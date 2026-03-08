
-- Fix SECURITY DEFINER view issue by explicitly setting SECURITY INVOKER
CREATE OR REPLACE VIEW public.case_studies_public
WITH (security_invoker = true) AS
SELECT 
  id, slug, industry, industry_label, scale, scale_label,
  main_problem, main_problem_label, title, summary, context,
  pain_points, previous_attempts, previous_attempts_result,
  root_causes, solution, results, key_insight, suitable_for,
  not_suitable_for, cta_question, status, created_at, updated_at
FROM public.case_studies
WHERE status = 'published';
