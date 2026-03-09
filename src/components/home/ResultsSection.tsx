import { TrendingUp, Clock, Award, Building2 } from "lucide-react";

const metrics = [
  {
    icon: Building2,
    value: "30+",
    unit: "",
    label: "Doanh nghiệp đã triển khai",
    context: "Từ 5–100 nhân sự, đa ngành",
    color: "from-primary to-primary/80",
  },
  {
    icon: Award,
    value: "92",
    unit: "/100",
    label: "Mức độ hài lòng",
    context: "Sẵn sàng giới thiệu cho network",
    color: "from-primary/90 to-primary/70",
  },
  {
    icon: Clock,
    value: "120+",
    unit: "",
    label: "Quy trình được chuẩn hoá",
    context: "Từ sales → vận hành → chăm sóc KH",
    color: "from-primary/80 to-primary/60",
  },
  {
    icon: TrendingUp,
    value: "30–50%",
    unit: "",
    label: "Giảm thời gian xử lý",
    context: "Trong 90 ngày đầu triển khai",
    color: "from-primary/70 to-primary/50",
  },
];

const ResultsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Kết quả triển khai{" "}
            <span className="text-primary">thực tế</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Những con số từ doanh nghiệp đã đồng hành cùng Lark Consult
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${m.color}`} />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <m.icon className="w-6 h-6" />
              </div>

              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {m.value}
                {m.unit && <span className="text-xl md:text-2xl text-primary/70">{m.unit}</span>}
              </div>

              <div className="text-sm font-semibold text-foreground mb-1">{m.label}</div>

              <p className="text-xs text-muted-foreground">{m.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
