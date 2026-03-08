
-- Create a public view that excludes sensitive columns (created_by, updated_by)
CREATE OR REPLACE VIEW public.case_studies_public AS
SELECT 
  id, slug, industry, industry_label, scale, scale_label,
  main_problem, main_problem_label, title, summary, context,
  pain_points, previous_attempts, previous_attempts_result,
  root_causes, solution, results, key_insight, suitable_for,
  not_suitable_for, cta_question, status, created_at, updated_at
FROM public.case_studies
WHERE status = 'published';

-- Grant anon and authenticated access to the view
GRANT SELECT ON public.case_studies_public TO anon;
GRANT SELECT ON public.case_studies_public TO authenticated;

-- Drop the two redundant public SELECT policies on the base table
DROP POLICY IF EXISTS "Anyone can read published case studies" ON public.case_studies;
DROP POLICY IF EXISTS "allow_select_published" ON public.case_studies;
