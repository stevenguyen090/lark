import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sampleCaseStudies } from "@/data/caseStudies";

const CaseStudyPreview = () => {
  // Lấy 3 case study đầu tiên để preview
  const previewCases = sampleCaseStudies.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Xem doanh nghiệp{" "}
            <span className="text-primary">giống bạn</span> đã làm như thế nào
          </h2>
          <p className="text-lg text-muted-foreground">
            Mỗi case study đều bắt đầu từ một vấn đề vận hành thực tế
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewCases.map((caseStudy) => (
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

        {/* View all CTA */}
        <div className="text-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Xem tất cả case study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
