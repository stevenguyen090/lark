
-- Re-add a single permissive SELECT policy for anon on published case studies
-- This is needed because the view uses security_invoker=true
-- Column restriction is handled by the view itself
CREATE POLICY "anon_read_published" ON public.case_studies
FOR SELECT TO anon
USING (status = 'published');
