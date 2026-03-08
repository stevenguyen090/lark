import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type CaseStudy = Database['public']['Tables']['case_studies']['Row'];
type CaseStudyInsert = Database['public']['Tables']['case_studies']['Insert'];
type CaseStudyUpdate = Database['public']['Tables']['case_studies']['Update'];

function withTimeout<T>(promise: PromiseLike<T>, ms: number, label = 'Request') {
  let timeoutId: number | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timeoutId = window.setTimeout(() => {
      reject(new Error(`${label} timeout after ${ms}ms`));
    }, ms);
  });

  return Promise.race([Promise.resolve(promise), timeout]).finally(() => {
    if (timeoutId) window.clearTimeout(timeoutId);
  });
}

// Transform database row to frontend format
export function transformCaseStudy(row: Omit<CaseStudy, 'created_by' | 'updated_by'> & { created_by?: string | null; updated_by?: string | null }) {
  return {
    id: row.id,
    slug: row.slug,
    industry: row.industry,
    industryLabel: row.industry_label,
    scale: row.scale,
    scaleLabel: row.scale_label,
    mainProblem: row.main_problem,
    mainProblemLabel: row.main_problem_label,
    title: row.title,
    summary: row.summary,
    context: row.context as {
      businessType: string;
      industry: string;
      scale: string;
      situation: string;
    },
    painPoints: row.pain_points as string[],
    previousAttempts: row.previous_attempts as string[],
    previousAttemptsResult: row.previous_attempts_result || '',
    rootCauses: row.root_causes as {
      title: string;
      description: string;
      consequence: string;
    }[],
    solution: row.solution as {
      description?: string;
      approach: string;
      steps: { title: string; description: string }[];
      dailyChanges: { before: string; after: string };
      attachments?: { type: string; url: string; caption: string }[];
    },
    results: row.results as {
      metric: string;
      value: string;
      description: string;
    }[],
    keyInsight: row.key_insight || '',
    suitableFor: row.suitable_for as string[],
    notSuitableFor: row.not_suitable_for as string[],
    ctaQuestion: row.cta_question || '',
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// Fetch published case studies (for frontend)
export function usePublishedCaseStudies(filters?: {
  industry?: string;
  scale?: string;
  mainProblem?: string;
}) {
  return useQuery({
    queryKey: ['case-studies', 'published', filters],
    queryFn: async () => {
      const PUBLIC_COLUMNS = 'id,slug,industry,industry_label,scale,scale_label,main_problem,main_problem_label,title,summary,context,pain_points,previous_attempts,previous_attempts_result,root_causes,solution,results,key_insight,suitable_for,not_suitable_for,cta_question,status,created_at,updated_at';
      let query = supabase
        .from('case_studies')
        .select(PUBLIC_COLUMNS)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (filters?.industry) {
        query = query.eq('industry', filters.industry);
      }
      if (filters?.scale) {
        query = query.eq('scale', filters.scale);
      }
      if (filters?.mainProblem) {
        query = query.eq('main_problem', filters.mainProblem);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data?.map(transformCaseStudy) || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
}

// Fetch top N published case studies for homepage (optimized)
export function useTopCaseStudies(limit: number = 3) {
  return useQuery({
    queryKey: ['case-studies', 'top', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('id, slug, title, summary, industry_label, scale_label, main_problem_label, results, solution, status')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data?.map(row => {
        const solution = row.solution as { attachments?: { type: string; url: string; caption: string }[] } | null;
        const firstImage = solution?.attachments?.find(a => a.type === 'image');
        return {
          id: row.id,
          slug: row.slug,
          title: row.title,
          summary: row.summary,
          industryLabel: row.industry_label,
          scaleLabel: row.scale_label,
          mainProblemLabel: row.main_problem_label,
          results: Array.isArray(row.results) ? row.results as Array<{ metric: string; value: string }> : [],
          thumbnailUrl: firstImage?.url || null,
        };
      }) || [];
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}

// Fetch single case study by slug (for frontend detail page)
export function useCaseStudyBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ['case-study', slug],
    queryFn: async () => {
      if (!slug) return null;
      
      const PUBLIC_COLUMNS = 'id,slug,industry,industry_label,scale,scale_label,main_problem,main_problem_label,title,summary,context,pain_points,previous_attempts,previous_attempts_result,root_causes,solution,results,key_insight,suitable_for,not_suitable_for,cta_question,status,created_at,updated_at';
      const { data, error } = await supabase
        .from('case_studies')
        .select(PUBLIC_COLUMNS)
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }
      return data ? transformCaseStudy(data) : null;
    },
    enabled: !!slug,
  });
}

// Escape special ILIKE characters to prevent pattern injection
function escapeIlike(str: string): string {
  return str.replace(/[%_\\]/g, '\\$&');
}

// Admin: Fetch all case studies
export function useAllCaseStudies(filters?: {
  status?: string;
  industry?: string;
  scale?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: ['case-studies', 'all', filters],
    queryFn: async () => {
      let query = supabase
        .from('case_studies')
        .select('*')
        .order('updated_at', { ascending: false });

      if (filters?.status) {
        query = query.eq('status', filters.status);
      }
      if (filters?.industry) {
        query = query.eq('industry', filters.industry);
      }
      if (filters?.scale) {
        query = query.eq('scale', filters.scale);
      }
      if (filters?.search) {
        // Escape special ILIKE characters to prevent pattern injection
        const escapedSearch = escapeIlike(filters.search);
        query = query.or(`title.ilike.%${escapedSearch}%,slug.ilike.%${escapedSearch}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data?.map(transformCaseStudy) || [];
    },
  });
}

// Admin: Fetch single case study by ID
export function useCaseStudyById(id: string | undefined) {
  return useQuery({
    queryKey: ['case-study', 'admin', id],
    queryFn: async () => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data ? transformCaseStudy(data) : null;
    },
    enabled: !!id,
  });
}

// Admin: Create case study
export function useCreateCaseStudy() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: CaseStudyInsert) => {
      const { data: result, error } = await supabase
        .from('case_studies')
        .insert(data)
        .select()
        .single();

      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['case-studies'] });
    },
  });
}

// Admin: Update case study
export function useUpdateCaseStudy() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: CaseStudyUpdate }) => {
      const { data: result, error } = await supabase
        .from('case_studies')
        .update(data)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['case-studies'] });
      queryClient.invalidateQueries({ queryKey: ['case-study'] });
    },
  });
}

// Admin: Delete case study
export function useDeleteCaseStudy() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['case-studies'] });
    },
  });
}

// Upload attachment
export async function uploadAttachment(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `attachments/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('case-study-attachments')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('case-study-attachments')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
