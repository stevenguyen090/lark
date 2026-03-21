import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, SlidersHorizontal, X, Loader2, Search } from "lucide-react";
import { usePublishedCaseStudies } from "@/hooks/useCaseStudies";
import {
  industryOptions,
  scaleOptions,
  problemOptions,
} from "@/data/caseStudies";

/* ─────────────────────────────────────────────
   Pill button for filters
───────────────────────────────────────────── */
const FilterPill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
      ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-background text-muted-foreground border-border hover:border-primary/60 hover:text-foreground"
      }
    `}
  >
    {label}
  </button>
);

/* ─────────────────────────────────────────────
   Problem → icon/color mapping
───────────────────────────────────────────── */
const problemMeta: Record<string, { color: string; bg: string }> = {
  "task-management":       { color: "text-blue-700",   bg: "bg-blue-50" },
  "department-coordination": { color: "text-violet-700", bg: "bg-violet-50" },
  "ceo-reporting":         { color: "text-amber-700",  bg: "bg-amber-50" },
  "onboarding":            { color: "text-emerald-700", bg: "bg-emerald-50" },
};

/* ─────────────────────────────────────────────
   Single card
───────────────────────────────────────────── */
const CaseStudyCard = ({ caseStudy }: { caseStudy: any }) => {
  const meta = problemMeta[caseStudy.mainProblem] ?? {
    color: "text-muted-foreground",
    bg: "bg-secondary",
  };

  const thumbnail = caseStudy.solution?.attachments?.find(
    (a: any) => a.type === "image"
  );

  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden
                 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                 hover:border-primary/30"
    >
      {/* Thumbnail hoặc gradient placeholder */}
      {thumbnail ? (
        <div className="aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={thumbnail.url}
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5
                        flex items-center justify-center overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/8" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-primary/6" />
          <span className="relative text-4xl font-bold text-primary/20 select-none">
            {caseStudy.industryLabel?.charAt(0)}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        {/* Tags row */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                           bg-secondary text-secondary-foreground border border-border">
            {caseStudy.industryLabel}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                           bg-secondary text-secondary-foreground border border-border">
            {caseStudy.scaleLabel}
          </span>
          {/* Problem pill */}
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${meta.bg} ${meta.color}`}>
            {caseStudy.mainProblemLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground leading-snug mb-2
                       group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {caseStudy.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1 mb-4">
          {caseStudy.summary}
        </p>

        {/* Divider */}
        <div className="border-t border-border/60 pt-4">
          {/* CTA row */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary flex items-center gap-1.5
                             group-hover:gap-2.5 transition-all duration-200">
              Xem chi tiết
              <ArrowRight className="w-4 h-4" />
            </span>
            {/* Key result teaser */}
            {caseStudy.results?.[0] && (
              <span className="text-xs text-muted-foreground hidden sm:block truncate max-w-[140px]">
                {caseStudy.results[0].value}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
const CaseStudyListing = () => {
  const [, setSearchParams] = useSearchParams();

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedScales, setSelectedScales] = useState<string[]>([]);
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const {
    data: caseStudies = [],
    isLoading,
    isError,
    error,
    refetch,
  } = usePublishedCaseStudies();

  const toggle = (
    value: string,
    selected: string[],
    setSelected: (v: string[]) => void
  ) =>
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );

  const clearFilters = () => {
    setSelectedIndustries([]);
    setSelectedScales([]);
    setSelectedProblems([]);
    setSearchParams({});
  };

  const hasFilters =
    selectedIndustries.length > 0 ||
    selectedScales.length > 0 ||
    selectedProblems.length > 0;

  const filtered = useMemo(
    () =>
      caseStudies.filter((cs) => {
        if (selectedIndustries.length && !selectedIndustries.includes(cs.industry)) return false;
        if (selectedScales.length && !selectedScales.includes(cs.scale)) return false;
        if (selectedProblems.length && !selectedProblems.includes(cs.mainProblem)) return false;
        return true;
      }),
    [caseStudies, selectedIndustries, selectedScales, selectedProblems]
  );

  /* ── Filter panel (shared between desktop sidebar & mobile drawer) ── */
  const FilterPanel = () => (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold text-sm">Bộ lọc</span>
        </div>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-primary hover:underline font-medium"
          >
            Xoá tất cả
          </button>
        )}
      </div>

      {/* Industry */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Ngành nghề
        </h3>
        <div className="flex flex-wrap gap-2">
          {industryOptions.map((o) => (
            <FilterPill
              key={o.value}
              label={o.label}
              active={selectedIndustries.includes(o.value)}
              onClick={() => toggle(o.value, selectedIndustries, setSelectedIndustries)}
            />
          ))}
        </div>
      </div>

      {/* Scale */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Quy mô
        </h3>
        <div className="flex flex-wrap gap-2">
          {scaleOptions.map((o) => (
            <FilterPill
              key={o.value}
              label={o.label}
              active={selectedScales.includes(o.value)}
              onClick={() => toggle(o.value, selectedScales, setSelectedScales)}
            />
          ))}
        </div>
      </div>

      {/* Problem */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Vấn đề vận hành
        </h3>
        <div className="flex flex-wrap gap-2">
          {problemOptions.map((o) => (
            <FilterPill
              key={o.value}
              label={o.label}
              active={selectedProblems.includes(o.value)}
              onClick={() => toggle(o.value, selectedProblems, setSelectedProblems)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="hero-gradient py-14 md:py-20">
        <div className="container-content">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                             text-primary uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-primary" />
              Case Studies
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Doanh nghiệp như bạn{" "}
              <span className="text-primary">đã giải quyết ra sao?</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Tìm case study theo ngành, quy mô và vấn đề — để thấy mình trong
              đó trước khi đặt câu hỏi.
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="section-padding">
        <div className="container-content">

          {/* Mobile: filter toggle bar */}
          <div className="lg:hidden mb-6 flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border
                         bg-background text-sm font-medium hover:border-primary/50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Bộ lọc
              {hasFilters && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full
                                 bg-primary text-primary-foreground text-xs font-bold">
                  {selectedIndustries.length + selectedScales.length + selectedProblems.length}
                </span>
              )}
            </button>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" /> Xoá bộ lọc
              </button>
            )}
          </div>

          {/* Mobile: collapsible filter drawer */}
          {mobileFilterOpen && (
            <div className="lg:hidden mb-8 p-5 rounded-2xl border border-border bg-card shadow-sm">
              <FilterPanel />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

            {/* ── Desktop sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 p-5 rounded-2xl border border-border bg-card">
                <FilterPanel />
              </div>
            </aside>

            {/* ── Results ── */}
            <div>
              {/* Active filter chips + count row */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <p className="text-sm text-muted-foreground mr-1">
                  <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                  case study
                </p>

                {/* Active chips */}
                {[
                  ...selectedIndustries.map((v) => ({
                    v,
                    label: industryOptions.find((o) => o.value === v)?.label ?? v,
                    clear: () => setSelectedIndustries(selectedIndustries.filter((x) => x !== v)),
                  })),
                  ...selectedScales.map((v) => ({
                    v,
                    label: scaleOptions.find((o) => o.value === v)?.label ?? v,
                    clear: () => setSelectedScales(selectedScales.filter((x) => x !== v)),
                  })),
                  ...selectedProblems.map((v) => ({
                    v,
                    label: problemOptions.find((o) => o.value === v)?.label ?? v,
                    clear: () => setSelectedProblems(selectedProblems.filter((x) => x !== v)),
                  })),
                ].map(({ v, label, clear }) => (
                  <button
                    key={v}
                    onClick={clear}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs
                               font-medium bg-primary/10 text-primary border border-primary/20
                               hover:bg-primary/20 transition-colors"
                  >
                    {label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>

              {/* Loading */}
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-3">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">Đang tải case studies…</p>
                </div>
              ) : isError ? (
                <div className="text-center py-20 px-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl
                                  bg-destructive/10 mb-4">
                    <X className="w-7 h-7 text-destructive" />
                  </div>
                  <p className="text-muted-foreground mb-5 max-w-xs mx-auto">
                    Không tải được danh sách.{" "}
                    {(error as Error)?.message ? `(${(error as Error).message})` : ""}
                  </p>
                  <Button variant="outline" onClick={() => refetch()} size="sm">
                    Thử lại
                  </Button>
                </div>
              ) : filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
                  {filtered.map((cs) => (
                    <CaseStudyCard key={cs.id} caseStudy={cs} />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="text-center py-20 px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                                  bg-secondary mb-5">
                    <Search className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Không tìm thấy case study phù hợp
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                    Thử thay đổi bộ lọc hoặc xoá bớt điều kiện để xem thêm kết quả.
                  </p>
                  <Button variant="outline" onClick={clearFilters} size="sm">
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