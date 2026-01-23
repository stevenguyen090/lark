import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, X, Loader2 } from "lucide-react";
import { usePublishedCaseStudies } from "@/hooks/useCaseStudies";
import { 
  industryOptions, 
  scaleOptions, 
  problemOptions,
} from "@/data/caseStudies";

const CaseStudyListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states from URL params
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(
    searchParams.get("industry")?.split(",").filter(Boolean) || []
  );
  const [selectedScales, setSelectedScales] = useState<string[]>(
    searchParams.get("scale")?.split(",").filter(Boolean) || []
  );
  const [selectedProblems, setSelectedProblems] = useState<string[]>(
    searchParams.get("problem")?.split(",").filter(Boolean) || []
  );

  // Fetch published case studies from database
  const {
    data: caseStudies = [],
    isLoading,
    isError,
    error,
    refetch,
  } = usePublishedCaseStudies();

  // Toggle filter
  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (values: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedIndustries([]);
    setSelectedScales([]);
    setSelectedProblems([]);
    setSearchParams({});
  };

  // Check if any filter is active
  const hasActiveFilters = selectedIndustries.length > 0 || selectedScales.length > 0 || selectedProblems.length > 0;

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(cs.industry);
      const matchScale = selectedScales.length === 0 || selectedScales.includes(cs.scale);
      const matchProblem = selectedProblems.length === 0 || selectedProblems.includes(cs.mainProblem);
      return matchIndustry && matchScale && matchProblem;
    });
  }, [caseStudies, selectedIndustries, selectedScales, selectedProblems]);

  return (
    <Layout>
      {/* Header */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container-content">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Các doanh nghiệp đã{" "}
              <span className="text-primary">làm như thế nào?</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tìm case study giống doanh nghiệp của bạn – theo ngành nghề, quy mô, và vấn đề vận hành.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold">Bộ lọc</span>
                  </div>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Xoá tất cả
                    </button>
                  )}
                </div>

                {/* Industry Filter */}
                <div>
                  <h3 className="font-medium mb-3">Ngành nghề</h3>
                  <div className="flex flex-wrap gap-2">
                    {industryOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => toggleFilter(option.value, selectedIndustries, setSelectedIndustries)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                          selectedIndustries.includes(option.value)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border hover:border-primary/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scale Filter */}
                <div>
                  <h3 className="font-medium mb-3">Quy mô</h3>
                  <div className="flex flex-wrap gap-2">
                    {scaleOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => toggleFilter(option.value, selectedScales, setSelectedScales)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                          selectedScales.includes(option.value)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border hover:border-primary/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Problem Filter */}
                <div>
                  <h3 className="font-medium mb-3">Vấn đề vận hành</h3>
                  <div className="flex flex-wrap gap-2">
                    {problemOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => toggleFilter(option.value, selectedProblems, setSelectedProblems)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                          selectedProblems.includes(option.value)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border hover:border-primary/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Grid */}
            <div className="lg:col-span-3">
              {/* Results count */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Hiển thị <span className="font-medium text-foreground">{filteredCaseStudies.length}</span> case study
                </p>
              </div>

              {/* Loading / Error state */}
              {isLoading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : isError ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">
                    Không tải được danh sách case study. {(error as Error)?.message ? `(${(error as Error).message})` : ""}
                  </p>
                  <Button variant="outline" onClick={() => refetch()}>
                    Thử lại
                  </Button>
                </div>
              ) : filteredCaseStudies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCaseStudies.map((caseStudy) => (
                    <Link
                      key={caseStudy.id}
                      to={`/case-studies/${caseStudy.slug}`}
                      className="card-elevated p-6 group"
                    >
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="badge-industry">{caseStudy.industryLabel}</span>
                        <span className="badge-scale">{caseStudy.scaleLabel}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {caseStudy.summary}
                      </p>

                      {/* Problem tag */}
                      <div className="text-xs text-muted-foreground mb-4">
                        Vấn đề chính: <span className="font-medium">{caseStudy.mainProblemLabel}</span>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">
                    Không có case study phù hợp với bộ lọc đã chọn.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-2" />
                    Xoá bộ lọc
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyListing;