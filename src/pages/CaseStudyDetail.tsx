import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  CalendarDays,
  MessageCircle,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { useCaseStudyBySlug } from "@/hooks/useCaseStudies";
import RichTextViewer from "@/components/ui/rich-text-viewer";
import AttachmentGallery from "@/components/case-study/AttachmentGallery";
import SolutionBlueprint from "@/components/case-study/SolutionBlueprint";
import { cn } from "@/lib/utils";

const CTA_LINK =
  "https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d";
const ZALO_LINK = "https://zalo.me/0905652628";

/* ─────────────────────────────────────────────
   Shared helpers
───────────────────────────────────────────── */
const isRichText = (content: string) =>
  Boolean(content && /<[a-z][\s\S]*>/i.test(content));

const RenderContent = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  if (!content) return null;
  if (isRichText(content))
    return <RichTextViewer content={content} className={className} />;
  return <p className={cn("leading-relaxed", className)}>{content}</p>;
};

/* Section header with numbered badge */
const SectionHeader = ({
  num,
  title,
}: {
  num: number;
  title: string;
}) => (
  <div className="flex items-center gap-3 mb-5">
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-md
                 bg-blue-500/20 text-blue-200 text-xs font-semibold flex-shrink-0"
    >
      {num}
    </span>
    <h2 className="text-lg font-semibold text-foreground">{title}</h2>
  </div>
);

const SectionDivider = () => (
  <div className="border-t border-border/60 my-10" />
);

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
const CaseStudyDetail = () => {
  const { slug } = useParams();
  const { data: caseStudy, isLoading, error } = useCaseStudyBySlug(slug);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileBlueprint, setShowMobileBlueprint] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  /* Loading */
  if (isLoading) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="sr-only">Đang tải case study…</span>
        </div>
      </Layout>
    );
  }

  /* Error / not found */
  if (!caseStudy || error) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-content text-center py-16">
            <div
              className="inline-flex items-center justify-center w-14 h-14
                          rounded-2xl bg-secondary mb-5"
            >
              <AlertTriangle className="w-7 h-7 text-muted-foreground" />
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Case study không tồn tại
            </h1>
            <p className="text-muted-foreground text-sm mb-6">
              Liên kết này có thể đã thay đổi hoặc bị xóa.
            </p>
            <Link to="/case-studies">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại danh sách
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  /* ── Problem → color mapping ── */
  const problemColors: Record<string, string> = {
    "task-management": "bg-blue-50 text-blue-800 border-blue-200",
    "department-coordination": "bg-violet-50 text-violet-800 border-violet-200",
    "ceo-reporting": "bg-amber-50 text-amber-800 border-amber-200",
    onboarding: "bg-emerald-50 text-emerald-800 border-emerald-200",
  };
  const problemClass =
    problemColors[caseStudy.mainProblem] ??
    "bg-secondary text-muted-foreground border-border";

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="hero-gradient py-8 md:py-12">
        <div className="container-content">
          {/* Breadcrumb */}
          <nav className="mb-5 flex min-h-11 items-center gap-1.5 text-xs text-slate-300">
            <Link to="/" className="inline-flex min-h-11 items-center hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              to="/case-studies"
              className="inline-flex min-h-11 items-center hover:text-primary transition-colors"
            >
              Case Study
            </Link>
            <span>/</span>
            <span className="text-foreground">{caseStudy.industryLabel}</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full
                           text-xs font-medium bg-secondary border border-border
                           text-secondary-foreground"
            >
              {caseStudy.industryLabel}
            </span>
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full
                           text-xs font-medium bg-secondary border border-border
                           text-secondary-foreground"
            >
              {caseStudy.scaleLabel}
            </span>
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                problemClass
              )}
            >
              {caseStudy.mainProblemLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold leading-tight max-w-3xl">
            {caseStudy.title}
          </h1>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">

            {/* ── 1. Bối cảnh ── */}
            <section>
              <SectionHeader num={1} title="Bối cảnh doanh nghiệp" />
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 rounded-xl
                            bg-[#0e1e35] border border-white/15"
              >
                {[
                  { label: "Loại hình", value: caseStudy.context.businessType },
                  { label: "Ngành", value: caseStudy.context.industry },
                  { label: "Quy mô", value: caseStudy.context.scale },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                ))}
                {/* Situation full width */}
                <div className="sm:col-span-2 pt-3 border-t border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Case Study
                  </p>
                  <p className="text-base text-slate-300 italic leading-7">
                    {caseStudy.context.situation}
                  </p>
                </div>
              </div>
            </section>

            <SectionDivider />

            {/* ── 2. Pain points ── */}
            <section>
              <SectionHeader
                num={2}
                title="Vấn đề quen thuộc của người điều hành"
              />
              <ul className="space-y-2.5">
                {caseStudy.painPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 rounded-lg
                               bg-[#0e1e35] border border-white/15"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <SectionDivider />

            {/* ── 3. Previous attempts ── */}
            <section>
              <SectionHeader num={3} title="Họ đã từng thử gì?" />
              <ul className="divide-y divide-border border border-border rounded-xl overflow-hidden mb-4">
                {caseStudy.previousAttempts.map((attempt, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-[#0e1e35] px-4 py-3
                               text-sm text-slate-300"
                  >
                    <span
                      className="inline-flex items-center justify-center w-4 h-4
                                   rounded bg-red-400/15 text-red-200 text-xs
                                   font-bold flex-shrink-0"
                    >
                      ✕
                    </span>
                    {attempt}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-r-lg border-l-[3px] border-amber-300 bg-amber-300/[0.08]
                            px-4 py-3 text-sm leading-6 text-slate-200"
              >
                <RenderContent content={caseStudy.previousAttemptsResult} />
              </div>
            </section>

            <SectionDivider />

            {/* ── 4. Root causes ── */}
            <section>
              <SectionHeader num={4} title="Phân tích vấn đề gốc rễ" />
              <div className="space-y-3">
                {caseStudy.rootCauses.map((cause, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-white/15 bg-[#0e1e35]"
                  >
                    {/* Header */}
                    <div
                      className="flex items-center gap-3 px-4 py-3
                                  bg-[#132540] border-b border-white/15"
                    >
                      <span
                        className="inline-flex items-center justify-center w-5 h-5
                                     rounded bg-blue-500/20 text-blue-200 text-xs
                                     font-semibold flex-shrink-0"
                      >
                        {i + 1}
                      </span>
                      <h3 className="text-sm font-medium">{cause.title}</h3>
                    </div>
                    {/* Body */}
                    <div className="px-4 py-3 space-y-3">
                      <p className="text-sm text-slate-300 leading-6">
                        {cause.description}
                      </p>
                      <div
                        className="flex items-start gap-2 rounded-md border border-white/10 bg-[#07111f] px-3 py-2.5 text-sm"
                      >
                        <span className="font-semibold text-slate-100 flex-shrink-0 mt-0.5">
                          Hệ quả:
                        </span>
                        <span className="text-slate-300 leading-6">
                          {cause.consequence}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <SectionDivider />

            {/* ── 5. Solution ── */}
            <section>
              <SectionHeader num={5} title="Giải pháp triển khai" />

              {/* Approach text */}
              {caseStudy.solution.description ? (
                <RenderContent
                  content={caseStudy.solution.description}
                  className="mb-5 text-base leading-7 text-slate-300"
                />
              ) : (
                <p className="mb-5 text-base leading-7 text-slate-300">
                  {caseStudy.solution.approach}
                </p>
              )}

              {caseStudy.solution.blueprint && isMobile && (
                <div className="mb-8 rounded-2xl border border-blue-400/25 bg-blue-500/[0.06] p-4">
                  <h3 className="text-base font-semibold">Bản thiết kế giải pháp</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Nắm luồng vận hành qua 5 bước; mở rộng khi bạn muốn xem hệ thống sử dụng những module nào.</p>
                  <div className="mt-4 rounded-xl border border-white/15 bg-[#07111f] p-4">
                    <ol className="space-y-3">
                      {caseStudy.solution.blueprint.mobileSteps.map((step, index) => (
                        <li key={step} className="flex items-center gap-3 text-sm text-slate-200">
                          <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-200">{index + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <button type="button" onClick={() => setShowMobileBlueprint((value) => !value)} aria-expanded={showMobileBlueprint} className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-blue-300/40 px-5 text-sm font-semibold text-blue-200 hover:bg-blue-400/10">
                    {showMobileBlueprint ? "Thu gọn chi tiết kỹ thuật" : "Xem chi tiết kỹ thuật"}
                  </button>
                  {showMobileBlueprint && <div className="mt-4"><SolutionBlueprint blueprint={caseStudy.solution.blueprint} hideMobileFlow /></div>}
                </div>
              )}

              {caseStudy.solution.blueprint && !isMobile && (
                <SolutionBlueprint blueprint={caseStudy.solution.blueprint} />
              )}

              {/* Timeline steps */}
              {!caseStudy.solution.blueprint && <div className="relative space-y-0 mb-8">
                {caseStudy.solution.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 pb-6 last:pb-0 relative">
                    {/* Connector line */}
                    {i < caseStudy.solution.steps.length - 1 && (
                      <div className="absolute left-[11px] top-7 bottom-0 w-px bg-border" />
                    )}
                    {/* Circle */}
                    <div
                      className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full
                                  border-2 border-primary/40 bg-primary/10 flex items-center
                                  justify-center text-xs font-semibold text-blue-200"
                    >
                      {i + 1}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h4 className="text-sm font-medium mb-1">{step.title}</h4>
                      {isRichText(step.description) ? (
                        <RichTextViewer
                          content={step.description}
                          className="text-sm text-slate-300"
                        />
                      ) : (
                        <p className="text-sm text-slate-300 leading-6">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>}

              {/* Before / After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <div className="rounded-xl border border-red-300/20 bg-red-400/[0.06] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-200">
                    Trước đây
                  </p>
                  <p className="text-sm leading-6 text-slate-200">
                    {caseStudy.solution.dailyChanges.before}
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-300/25 bg-emerald-400/[0.08] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                    Sau triển khai
                  </p>
                  <p className="text-sm leading-6 text-slate-100">
                    {caseStudy.solution.dailyChanges.after}
                  </p>
                </div>
              </div>

              {/* Attachments */}
              {caseStudy.solution.attachments?.length > 0 && (
                <div>
                  <h3 className="mb-3 text-base font-semibold">
                    Giao diện giải pháp đã triển khai
                  </h3>
                  <AttachmentGallery
                    attachments={caseStudy.solution.attachments}
                  />
                </div>
              )}
            </section>

            <SectionDivider />

            {/* ── Results after solution ── */}
            <section aria-labelledby="results-heading">
              <SectionHeader num={6} title="Kết quả đo được" />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {caseStudy.results.map((result) => (
                  <div key={result.metric} className="rounded-xl border border-blue-400/20 bg-[#0e1e35] p-5">
                    <div className="text-xl font-semibold leading-tight text-blue-300 md:text-2xl">{result.value}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-100">{result.metric}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-300">{result.description}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/[0.06] px-5 py-4 text-sm leading-6 text-slate-200">
                {caseStudy.keyInsight}
              </div>
            </section>

            <SectionDivider />

            {/* ── 7. Suitable / Not suitable ── */}
            <section>
              <SectionHeader
                num={7}
                title="Doanh nghiệp nào phù hợp với cách làm này?"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Suitable */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-300">
                      Phù hợp nếu
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.suitableFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-slate-300 leading-6">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not suitable */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-300">
                      Không phù hợp nếu
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.notSuitableFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">
                          ✗
                        </span>
                        <span className="text-slate-300 leading-6">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <SectionDivider />

            {/* ── CTA ── */}
            <section className="rounded-2xl border border-border bg-secondary/40 px-6 py-8 md:px-10 md:py-10 text-center">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 leading-tight">
                {caseStudy.ctaQuestion}
              </h2>
              <p className="mx-auto mb-7 max-w-md text-sm leading-6 text-slate-300">
                Bạn không cần quyết định ngay. Hãy bắt đầu bằng một buổi đánh
                giá nhanh cách vận hành hiện tại.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="w-4 h-4" />
                    Đặt lịch trao đổi
                  </a>
                </Button>
                <Button asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-300/40 text-blue-200 hover:bg-blue-400/10"
                  >
                  <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Nhắn Zalo để trao đổi nhanh
                  </a>
                </Button>
              </div>
            </section>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
              <Button asChild variant="ghost" size="default" className="min-h-11">
                <Link to="/case-studies">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Xem case study khác
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudyDetail;
