import { TrendingUp, Clock, Award, Building2 } from "lucide-react";

const metrics = [
  {
    icon: Building2,
    value: "30+",
    label: "Doanh nghiệp đã triển khai",
    context: "Từ 5–100 nhân sự, đa ngành",
  },
  {
    icon: Award,
    value: "92/100",
    label: "Mức độ hài lòng",
    context: "Sẵn sàng giới thiệu cho network",
  },
  {
    icon: Clock,
    value: "120+",
    label: "Quy trình được chuẩn hoá",
    context: "Từ sales → vận hành → chăm sóc KH",
  },
  {
    icon: TrendingUp,
    value: "30–50%",
    label: "Giảm thời gian xử lý",
    context: "Trong 90 ngày đầu triển khai",
  },
];

const ResultsSection = () => {
  return (
    <section className="section-padding" style={{ background: "#0D1B2A" }}>
      <div className="container-content">
        <div className="text-center mb-12">
          <span className="section-tag" style={{ color: "#94A3B8" }}>Kết quả thực tế</span>
          <h2
            className="font-display font-extrabold mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "white" }}
          >
            Những con số từ doanh nghiệp{" "}
            <span style={{ color: "hsl(var(--accent-brand))" }}>đã đồng hành</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center group transition-all duration-300 hover:bg-[#243447] animate-fade-in"
              style={{ background: "#1E293B", animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 group-hover:scale-110 transition-transform" style={{ background: "rgba(37,99,235,0.15)" }}>
                <m.icon className="w-6 h-6" style={{ color: "#3B82F6" }} />
              </div>

              <div className="font-display font-extrabold text-3xl md:text-4xl mb-1" style={{ color: "hsl(var(--accent-brand))" }}>
                {m.value}
              </div>

              <div className="text-sm font-semibold mb-1" style={{ color: "white" }}>{m.label}</div>
              <p className="text-xs" style={{ color: "#94A3B8" }}>{m.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
