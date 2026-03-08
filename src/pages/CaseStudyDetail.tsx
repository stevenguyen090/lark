import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, XCircle, CalendarDays, MessageCircle, Loader2 } from "lucide-react";
import { useCaseStudyBySlug } from "@/hooks/useCaseStudies";
import RichTextViewer from "@/components/ui/rich-text-viewer";
import AttachmentGallery from "@/components/case-study/AttachmentGallery";

const CTA_LINK = "https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d";
const ZALO_LINK = "https://zalo.me/0905652628";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const { data: caseStudy, isLoading, error } = useCaseStudyBySlug(slug);

  if (isLoading) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-content flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </section>
      </Layout>
    );
  }

  if (!caseStudy || error) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-content text-center">
            <h1 className="text-2xl font-bold mb-4">Case study không tồn tại</h1>
            <Link to="/case-studies">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại danh sách
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Helper function to check if content is rich text (HTML) or plain text
  const isRichText = (content: string): boolean => {
    if (!content) return false;
    return /<[a-z][\s\S]*>/i.test(content);
  };

  // Render content as rich text or plain text
  const renderContent = (content: string, className?: string) => {
    if (!content) return null;
    if (isRichText(content)) {
      return <RichTextViewer content={content} className={className} />;
    }
    return <p className={className}>{content}</p>;
  };

  return (
    <Layout>
      {/* Breadcrumb and Header */}
      <section className="hero-gradient py-8 md:py-12">
        <div className="container-content">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Trang chủ</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-primary">Case Study</Link>
            <span>/</span>
            <span className="text-foreground">{caseStudy.industryLabel}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-industry">{caseStudy.industryLabel}</span>
            <span className="badge-scale">{caseStudy.scaleLabel}</span>
            <span className="badge-scale">{caseStudy.mainProblemLabel}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl">
            {caseStudy.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            {/* Section 1: Bối cảnh doanh nghiệp */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                Bối cảnh doanh nghiệp
              </h2>
              <div className="bg-secondary/50 rounded-xl p-6 space-y-3">
                <p><span className="font-medium">Loại hình:</span> {caseStudy.context.businessType}</p>
                <p><span className="font-medium">Ngành:</span> {caseStudy.context.industry}</p>
                <p><span className="font-medium">Quy mô:</span> {caseStudy.context.scale}</p>
                <p className="text-muted-foreground italic">{caseStudy.context.situation}</p>
              </div>
            </section>

            {/* Section 2: Vấn đề quen thuộc */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Vấn đề quen thuộc của người điều hành
              </h2>
              <ul className="space-y-3">
                {caseStudy.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3: Họ đã từng thử gì */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Họ đã từng thử gì?
              </h2>
              <ul className="space-y-2 mb-4">
                {caseStudy.previousAttempts.map((attempt, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-lg">•</span>
                    {attempt}
                  </li>
                ))}
              </ul>
              {/* Rich text support for previousAttemptsResult */}
              <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-warning">
                {renderContent(caseStudy.previousAttemptsResult, 'text-foreground')}
              </div>
            </section>

            {/* Section 4: Vấn đề gốc rễ */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                Phân tích vấn đề gốc rễ
              </h2>
              <div className="space-y-6">
                {caseStudy.rootCauses.map((cause, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">{index + 1}. {cause.title}</h3>
                    <p className="text-muted-foreground mb-3">{cause.description}</p>
                    <p className="text-sm">
                      <span className="font-medium text-foreground">👉 Hệ quả:</span>{" "}
                      <span className="text-muted-foreground">{cause.consequence}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Giải pháp triển khai */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Giải pháp triển khai
              </h2>
              
              {/* Solution description - Rich Text */}
              {caseStudy.solution.description && (
                <div className="mb-6">
                  {renderContent(caseStudy.solution.description, 'text-muted-foreground')}
                </div>
              )}
              
              <p className="text-muted-foreground mb-6">{caseStudy.solution.approach}</p>
              
              <div className="space-y-4 mb-8">
                {caseStudy.solution.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="step-number flex-shrink-0">{index + 1}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      {/* Rich text support for step description */}
                      {isRichText(step.description) ? (
                        <RichTextViewer content={step.description} className="text-muted-foreground text-sm" />
                      ) : (
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary/50 rounded-xl p-5 border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Trước đây</div>
                  <p className="text-foreground">{caseStudy.solution.dailyChanges.before}</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <div className="text-sm font-medium text-primary mb-2">Sau triển khai</div>
                  <p className="text-foreground">{caseStudy.solution.dailyChanges.after}</p>
                </div>
              </div>

              {/* Attachments Section */}
              {caseStudy.solution.attachments && caseStudy.solution.attachments.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Tài liệu đính kèm</h3>
                  <AttachmentGallery attachments={caseStudy.solution.attachments} />
                </div>
              )}
            </section>

            {/* Section 6: Kết quả đo được */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                Kết quả đo được
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {result.value}
                    </div>
                    <div className="font-medium text-sm mb-1">{result.metric}</div>
                    <div className="text-xs text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
                <p className="font-medium text-lg text-foreground">
                  👉 {caseStudy.keyInsight}
                </p>
              </div>
            </section>

            {/* Section 7: Phù hợp / Không phù hợp */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Doanh nghiệp nào phù hợp với cách làm này?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phù hợp */}
                <div className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    Phù hợp nếu
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.suitableFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-success mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Không phù hợp */}
                <div className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2 text-destructive">
                    <XCircle className="w-5 h-5" />
                    Không phù hợp nếu
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.notSuitableFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-destructive mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                {caseStudy.ctaQuestion}
              </h2>
              <p className="text-muted-foreground mb-6">
                Bạn không cần quyết định ngay. Hãy bắt đầu bằng một buổi đánh giá nhanh cách vận hành hiện tại.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">
                    <CalendarDays className="w-5 h-5" />
                    Đặt lịch trao đổi
                  </Button>
                </a>
                <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    <MessageCircle className="w-5 h-5" />
                    Nhắn Zalo để trao đổi nhanh
                  </Button>
                </a>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              <Link to="/case-studies">
                <Button variant="ghost">
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
