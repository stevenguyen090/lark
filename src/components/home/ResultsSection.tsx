import { TrendingUp, Clock, Award } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "92",
    unit: "/100",
    label: "Mức độ hài lòng",
    description: "Doanh nghiệp sẵn sàng giới thiệu cho network của mình",
    color: "from-primary to-primary/80",
  },
  {
    icon: Clock,
    value: "120+",
    unit: "",
    label: "Quy trình",
    description: "được chuẩn hoá và số hoá",
    color: "from-primary/90 to-primary/70",
  },
  {
    icon: TrendingUp,
    value: "30–50%",
    unit: "",
    label: "Giảm thời gian",
    description: "xử lý công việc hàng ngày",
    color: "from-primary/80 to-primary/60",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${m.color}`} />
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                <m.icon className="w-7 h-7" />
              </div>

              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                {m.value}
                {m.unit && <span className="text-2xl md:text-3xl text-primary/70">{m.unit}</span>}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-1">{m.label}</div>
              
              <p className="text-sm text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
