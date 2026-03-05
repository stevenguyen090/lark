import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { value: "30+", label: "Doanh nghiệp SMEs đã triển khai hệ thống vận hành" },
  { value: "120+", label: "Quy trình được chuẩn hoá và số hoá" },
  { value: "30–50%", label: "Giảm thời gian xử lý công việc" },
  { value: "↓", label: "Giảm mạnh mức độ phụ thuộc vào CEO trong vận hành hàng ngày" },
];

const miniCases = [
  {
    industry: "Agency Marketing",
    problem: "CEO duyệt từng task nhỏ, team thiếu chủ động",
    solution: "Chuẩn hoá quy trình, phân quyền rõ ràng trên Lark",
    result: "Giảm 40% thời gian duyệt công việc",
  },
  {
    industry: "Doanh nghiệp thương mại",
    problem: "Báo cáo rời rạc, không có số liệu tổng hợp",
    solution: "Thiết kế dashboard KPI tập trung",
    result: "Ban lãnh đạo có báo cáo realtime mỗi ngày",
  },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* 3.1 Logo Carousel Placeholder */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Doanh nghiệp đã{" "}
            <span className="text-primary">tin tưởng triển khai</span>
          </h2>
          <div className="flex items-center justify-center gap-8 py-6 opacity-40">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Building2 className="w-8 h-8 text-muted-foreground" />
                <div className="h-3 w-16 bg-muted-foreground/30 rounded" />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground italic">Logo khách hàng sẽ được cập nhật</p>
        </div>

        {/* 3.2 Metrics */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Kết quả triển khai thực tế
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{m.value}</div>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3.3 Mini Case Snapshots */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Mini Case Snapshot
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {miniCases.map((c, i) => (
              <div key={i} className="card-elevated p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="badge-industry mb-3 inline-block">{c.industry}</span>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium text-foreground">Vấn đề:</span>{" "}<span className="text-muted-foreground">{c.problem}</span></p>
                  <p><span className="font-medium text-foreground">Giải pháp:</span>{" "}<span className="text-muted-foreground">{c.solution}</span></p>
                  <p><span className="font-medium text-primary">Kết quả:</span>{" "}<span className="text-primary font-medium">{c.result}</span></p>
                </div>
              </div>
            ))}
          </div>
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
