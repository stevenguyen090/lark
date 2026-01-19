-- 1. Create enum for admin roles
CREATE TYPE public.app_role AS ENUM ('admin', 'consultant', 'content_editor');

-- 2. Create user_roles table (NOT on profiles table - security requirement)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Create security definer function to check roles (avoid RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Helper function to check if user has any admin role
CREATE OR REPLACE FUNCTION public.is_admin_user(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'consultant', 'content_editor')
  )
$$;

-- 4. Create case_studies table with full schema from document
CREATE TABLE public.case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    
    -- Metadata
    industry TEXT NOT NULL,
    industry_label TEXT NOT NULL,
    scale TEXT NOT NULL,
    scale_label TEXT NOT NULL,
    main_problem TEXT NOT NULL,
    main_problem_label TEXT NOT NULL,
    
    -- Content
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    
    -- Section 1: Bối cảnh doanh nghiệp (JSON)
    context JSONB NOT NULL DEFAULT '{}',
    
    -- Section 2: Vấn đề quen thuộc (array)
    pain_points JSONB NOT NULL DEFAULT '[]',
    
    -- Section 3: Họ đã từng thử gì (array + text)
    previous_attempts JSONB NOT NULL DEFAULT '[]',
    previous_attempts_result TEXT,
    
    -- Section 4: Vấn đề gốc rễ (array of objects)
    root_causes JSONB NOT NULL DEFAULT '[]',
    
    -- Section 5: Giải pháp triển khai (JSON with description, approach, steps, dailyChanges, attachments)
    solution JSONB NOT NULL DEFAULT '{}',
    
    -- Section 6: Kết quả đo được (array + text)
    results JSONB NOT NULL DEFAULT '[]',
    key_insight TEXT,
    
    -- Section 7: Phù hợp / Không phù hợp (arrays)
    suitable_for JSONB NOT NULL DEFAULT '[]',
    not_suitable_for JSONB NOT NULL DEFAULT '[]',
    
    -- CTA
    cta_question TEXT,
    
    -- System fields (per document 11.3)
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id),
    updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS on case_studies
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 6. Create RLS policies for case_studies
-- Public can read published case studies
CREATE POLICY "Anyone can read published case studies"
ON public.case_studies
FOR SELECT
USING (status = 'published');

-- Admins can read all case studies
CREATE POLICY "Admins can read all case studies"
ON public.case_studies
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- Admins can insert case studies
CREATE POLICY "Admins can insert case studies"
ON public.case_studies
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin_user(auth.uid()));

-- Admins can update case studies
CREATE POLICY "Admins can update case studies"
ON public.case_studies
FOR UPDATE
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- Admins can delete case studies
CREATE POLICY "Admins can delete case studies"
ON public.case_studies
FOR DELETE
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- 7. Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- 8. Create indexes for performance
CREATE INDEX idx_case_studies_status ON public.case_studies(status);
CREATE INDEX idx_case_studies_industry ON public.case_studies(industry);
CREATE INDEX idx_case_studies_scale ON public.case_studies(scale);
CREATE INDEX idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);