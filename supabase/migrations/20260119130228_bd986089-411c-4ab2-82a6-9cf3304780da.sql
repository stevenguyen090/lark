-- Create storage bucket for case study attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('case-study-attachments', 'case-study-attachments', true);

-- RLS policies for case study attachments bucket
-- Anyone can view files (public bucket for published case studies)
CREATE POLICY "Anyone can view case study attachments"
ON storage.objects
FOR SELECT
USING (bucket_id = 'case-study-attachments');

-- Only admins can upload files
CREATE POLICY "Admins can upload case study attachments"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'case-study-attachments' 
  AND public.is_admin_user(auth.uid())
);

-- Only admins can update files
CREATE POLICY "Admins can update case study attachments"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'case-study-attachments' 
  AND public.is_admin_user(auth.uid())
);

-- Only admins can delete files
CREATE POLICY "Admins can delete case study attachments"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'case-study-attachments' 
  AND public.is_admin_user(auth.uid())
);