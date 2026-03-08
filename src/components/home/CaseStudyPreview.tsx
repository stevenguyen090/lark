import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { usePublishedCaseStudies } from "@/hooks/useCaseStudies";
import { industryOptions } from "@/data/caseStudies";

const CaseStudyPreview = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>(undefined);

  const {
    data: allCases = [],
    isLoading,
    isError,
    error,
    refetch,
  } = usePublishedCaseStudies(selectedIndustry ? { industry: selectedIndustry } : undefined);

  const previewCases = allCases.slice(0, 4);

  // Extract thumbnail from solution attachments
  const getThumbnail = (cs: typeof allCases[number]) => {
    const sol = cs.solution as { attachments?: { type: string; url: string }[] } | undefined;
    return sol?.attachments?.find(a => a.type === 'image')?.url || null;
  };

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Xem doanh nghiệp{" "}
            <span className="text-primary">giống bạn</span> đã làm như thế nào
          </h2>
          <p className="text-lg text-muted-foreground">
            Mỗi case study đều bắt đầu từ một vấn đề vận hành thực tế
          </p>
        </div>

        {/* Industry Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedIndustry(undefined)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              !selectedIndustry
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            Tất cả
          </button>
          {industryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedIndustry(selectedIndustry === opt.value ? undefined : opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                selectedIndustry === opt.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Loading / Error state */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Không tải được danh sách case study. {(error as Error)?.message ? `(${(error as Error).message})` : ""}
            </p>
            <button
              onClick={() => refetch()}
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Thử lại
            </button>
          </div>
        ) : previewCases.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {previewCases.map((caseStudy) => {
                const thumbnailUrl = getThumbnail(caseStudy);
                return (
                  <div
                    key={caseStudy.id}
                    className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
                  >
                    {thumbnailUrl && (
                      <div className="aspect-video w-full overflow-hidden bg-secondary">
                        <img
                          src={thumbnailUrl}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="badge-industry">{caseStudy.industryLabel}</span>
                        <span className="badge-scale">{caseStudy.scaleLabel}</span>
                      </div>

                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {caseStudy.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-grow">
                        {caseStudy.summary}
                      </p>

                      <p className="text-xs text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">Vấn đề chính:</span>{" "}
                        {caseStudy.mainProblemLabel}
                      </p>

                      {caseStudy.results && caseStudy.results.length > 0 && (
                        <div className="bg-primary/5 rounded-lg p-3 mb-4">
                          <p className="text-sm font-medium text-primary">
                            {caseStudy.results[0].metric}: {caseStudy.results[0].value}
                          </p>
                        </div>
                      )}

                      <Link
                        to={`/case-studies/${caseStudy.slug}`}
                        className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all mt-auto"
                      >
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Xem tất cả case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {selectedIndustry ? "Không có case study nào cho lĩnh vực này." : "Chưa có case study nào được công bố."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyPreview;
