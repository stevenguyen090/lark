import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTopCaseStudies } from "@/hooks/useCaseStudies";
import vifitLogo from "@/assets/logos/vifit.png";
import ecomeliteLogo from "@/assets/logos/ecomelite.png";
import bivaLogo from "@/assets/logos/biva.png";
import ptfitnessLogo from "@/assets/logos/ptfitness.png";

const logos = [
  { src: vifitLogo, alt: "VIFIT Active" },
  { src: ecomeliteLogo, alt: "EcomElite" },
  { src: bivaLogo, alt: "Biva" },
  { src: ptfitnessLogo, alt: "PT Fitness" },
];

const metrics = [
  { value: "30+", label: "Doanh nghiệp SMEs đã triển khai hệ thống vận hành" },
  { value: "120+", label: "Quy trình được chuẩn hoá và số hoá" },
  { value: "30–50%", label: "Giảm thời gian xử lý công việc" },
];

const SocialProofSection = () => {
  const { data: caseStudies, isLoading } = useTopCaseStudies(4);

  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Logo Carousel */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Doanh nghiệp đã{" "}
            <span className="text-primary">tin tưởng triển khai</span>
          </h2>
          <div className="flex items-center justify-center gap-8 md:gap-12 py-6 flex-wrap">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 md:h-16 w-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Kết quả triển khai thực tế
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{m.value}</div>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Snapshots */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Xem doanh nghiệp giống bạn đã làm như thế nào
          </h3>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="card-elevated p-6 animate-pulse">
                  <div className="h-4 w-24 bg-muted rounded mb-3" />
                  <div className="h-4 w-32 bg-muted rounded mb-2" />
                  <div className="h-4 w-full bg-muted rounded mb-2" />
                  <div className="h-8 w-28 bg-muted rounded mt-4" />
                </div>
              ))}
            </div>
          ) : caseStudies && caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {caseStudies.map((cs, i) => (
                <div key={cs.id} className="card-elevated p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="badge-industry">{cs.industryLabel}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">{cs.scaleLabel}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {cs.results && cs.results.length > 0 && (
                      <p>
                        <span className="font-medium text-primary">Kết quả:</span>{" "}
                        <span className="text-primary font-medium">{cs.results[0].metric}: {cs.results[0].value}</span>
                      </p>
                    )}
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4 text-sm"
                  >
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { industry: "Agency Marketing", scale: "10–30 nhân sự", result: "Giảm 40% thời gian duyệt công việc" },
                { industry: "Doanh nghiệp thương mại", scale: "30–100 nhân sự", result: "Ban lãnh đạo có báo cáo realtime mỗi ngày" },
              ].map((c, i) => (
                <div key={i} className="card-elevated p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="badge-industry">{c.industry}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">{c.scale}</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium text-primary">Kết quả:</span>{" "}
                    <span className="text-primary font-medium">{c.result}</span>
                  </p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4 text-sm"
                  >
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Xem tất cả case study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
