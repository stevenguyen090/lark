import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { sampleCaseStudies } from "@/data/caseStudies";

type CaseStudyInsert = Database["public"]["Tables"]["case_studies"]["Insert"];

function mapSampleToInsert(sample: (typeof sampleCaseStudies)[number]): CaseStudyInsert {
  return {
    slug: sample.slug,
    industry: sample.industry,
    industry_label: sample.industryLabel,
    scale: sample.scale,
    scale_label: sample.scaleLabel,
    main_problem: sample.mainProblem,
    main_problem_label: sample.mainProblemLabel,
    title: sample.title,
    summary: sample.summary,

    context: sample.context as unknown as CaseStudyInsert["context"],
    pain_points: sample.painPoints as unknown as CaseStudyInsert["pain_points"],
    previous_attempts: sample.previousAttempts as unknown as CaseStudyInsert["previous_attempts"],
    previous_attempts_result: sample.previousAttemptsResult,
    root_causes: sample.rootCauses as unknown as CaseStudyInsert["root_causes"],
    solution: sample.solution as unknown as CaseStudyInsert["solution"],
    results: sample.results as unknown as CaseStudyInsert["results"],
    key_insight: sample.keyInsight,
    suitable_for: sample.suitableFor as unknown as CaseStudyInsert["suitable_for"],
    not_suitable_for: sample.notSuitableFor as unknown as CaseStudyInsert["not_suitable_for"],
    cta_question: sample.ctaQuestion,

    // Đảm bảo hiển thị trên website
    status: "published",
  };
}

export function useSeedSampleCaseStudies() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      // Lấy tất cả slug hiện có (admin có quyền SELECT all)
      const { data: existing, error: existingError } = await supabase
        .from("case_studies")
        .select("slug");

      if (existingError) throw existingError;

      const existingSlugs = new Set((existing ?? []).map((r) => r.slug));
      const missing = sampleCaseStudies.filter((s) => !existingSlugs.has(s.slug));
      const inserts: CaseStudyInsert[] = missing.map(mapSampleToInsert);

      if (inserts.length === 0) {
        return { inserted: 0, totalSamples: sampleCaseStudies.length };
      }

      const { error: insertError } = await supabase.from("case_studies").insert(inserts);
      if (insertError) throw insertError;

      return { inserted: inserts.length, totalSamples: sampleCaseStudies.length };
    },
    onSuccess: () => {
      // refresh cả frontend và CMS
      queryClient.invalidateQueries({ queryKey: ["case-studies"] });
      queryClient.invalidateQueries({ queryKey: ["case-study"] });
    },
  });
}
