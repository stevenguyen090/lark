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
                 bg-primary/10 text-primary text-xs font-semibold flex-shrink-0"
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

  /* Loading */
  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
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
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
            <Link to="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              to="/case-studies"
              className="hover:text-primary transition-colors"
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
                            bg-secondary/50 border border-border"
              >
                {[
                  { label: "Loại hình", value: caseStudy.context.businessType },
                  { label: "Ngành", value: caseStudy.context.industry },
                  { label: "Quy mô", value: caseStudy.context.scale },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                ))}
                {/* Situation full width */}
                <div className="sm:col-span-2 pt-3 border-t border-border/60">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Tình huống
                  </p>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
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
                               bg-background border border-border"
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
                    className="flex items-center gap-3 px-4 py-3 bg-background
                               text-sm text-muted-foreground"
                  >
                    <span
                      className="inline-flex items-center justify-center w-4 h-4
                                   rounded bg-destructive/10 text-destructive text-[9px]
                                   font-bold flex-shrink-0"
                    >
                      ✕
                    </span>
                    {attempt}
                  </li>
                ))}
              </ul>
              <div
                className="border-l-[3px] border-amber-400 bg-amber-50/50
                            rounded-r-lg px-4 py-3 text-sm leading-relaxed
                            text-foreground dark:bg-amber-900/10"
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
                    className="rounded-xl border border-border overflow-hidden bg-card"
                  >
                    {/* Header */}
                    <div
                      className="flex items-center gap-3 px-4 py-3
                                  bg-secondary/60 border-b border-border"
                    >
                      <span
                        className="inline-flex items-center justify-center w-5 h-5
                                     rounded bg-primary/10 text-primary text-[10px]
                                     font-semibold flex-shrink-0"
                      >
                        {i + 1}
                      </span>
                      <h3 className="text-sm font-medium">{cause.title}</h3>
                    </div>
                    {/* Body */}
                    <div className="px-4 py-3 space-y-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cause.description}
                      </p>
                      <div
                        className="flex items-start gap-2 text-xs px-3 py-2.5
                                    rounded-md bg-secondary"
                      >
                        <span className="font-semibold text-muted-foreground flex-shrink-0 mt-0.5">
                          Hệ quả:
                        </span>
                        <span className="text-muted-foreground leading-relaxed">
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
                  className="text-sm text-muted-foreground mb-5"
                />
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {caseStudy.solution.approach}
                </p>
              )}

              {/* Timeline steps */}
              <div className="relative space-y-0 mb-8">
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
                                  justify-center text-[11px] font-semibold text-primary"
                    >
                      {i + 1}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-0.5">
                      <h4 className="text-sm font-medium mb-1">{step.title}</h4>
                      {isRichText(step.description) ? (
                        <RichTextViewer
                          content={step.description}
                          className="text-sm text-muted-foreground"
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <div className="rounded-xl p-4 bg-secondary border border-border">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Trước đây
                  </p>
                  <p className="text-sm leading-relaxed">
                    {caseStudy.solution.dailyChanges.before}
                  </p>
                </div>
                <div className="rounded-xl p-4 bg-emerald-50/60 border border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                    Sau triển khai
                  </p>
                  <p className="text-sm leading-relaxed">
                    {caseStudy.solution.dailyChanges.after}
                  </p>
                </div>
              </div>

              {/* Attachments */}
              {caseStudy.solution.attachments?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-3">
                    Tài liệu đính kèm
                  </h3>
                  <AttachmentGallery
                    attachments={caseStudy.solution.attachments}
                  />
                </div>
              )}
            </section>

            <SectionDivider />

            {/* ── 6. Results ── */}
            <section>
              <SectionHeader num={6} title="Kết quả đo được" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {caseStudy.results.map((result, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-secondary/50
                               px-4 py-4 text-center"
                  >
                    <div className="text-xl md:text-2xl font-semibold text-primary mb-1 leading-tight">
                      {result.value}
                    </div>
                    <div className="text-xs font-medium mb-1">{result.metric}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key insight */}
              <div
                className="rounded-xl border border-primary/20 bg-primary/5
                            px-5 py-4 text-sm leading-relaxed text-foreground"
              >
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
                    <span className="text-sm font-medium text-emerald-700">
                      Phù hợp nếu
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.suitableFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground leading-relaxed">
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
                    <span className="text-sm font-medium text-red-600">
                      Không phù hợp nếu
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.notSuitableFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">
                          ✗
                        </span>
                        <span className="text-muted-foreground leading-relaxed">
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
              <p className="text-sm text-muted-foreground mb-7 max-w-md mx-auto leading-relaxed">
                Bạn không cần quyết định ngay. Hãy bắt đầu bằng một buổi đánh
                giá nhanh cách vận hành hiện tại.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">
                    <CalendarDays className="w-4 h-4" />
                    Đặt lịch trao đổi
                  </Button>
                </a>
                <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 text-primary hover:bg-primary/5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Nhắn Zalo để trao đổi nhanh
                  </Button>
                </a>
              </div>
            </section>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
              <Link to="/case-studies">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Xem case study khác
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudyDetail;