import { Search, Settings, HeartHandshake, Sparkles, Clock, Link as LinkIcon } from "lucide-react";
import solutionStep1 from "@/assets/solution-step1.png";
import solutionStep2 from "@/assets/solution-step2.png";
import solutionStep3 from "@/assets/solution-step3.png";

const tier1Steps = [
  {
    icon: Search,
    number: "01",
    title: "Tư vấn & chuẩn hoá vận hành",
    subtitle: "Rà soát quy trình, xác định điểm nghẽn, thiết kế cách giao việc rõ ràng.",
    outcome: "Đội ngũ biết mình cần làm gì và chịu trách nhiệm phần nào.",
    duration: "1–2 tuần",
    image: solutionStep1,
  },
  {
    icon: Settings,
    number: "02",
    title: "Triển khai hệ thống Lark",
    subtitle: "Thiết lập task management, docs, dashboard, tích hợp tool bên thứ 3 (Pancake, Shopify, CRM…).",
    outcome: "Doanh nghiệp làm việc trên 1 nền tảng thống nhất.",
    duration: "3–4 tuần",
    image: solutionStep2,
  },
];

const tier2Step = {
  icon: Sparkles,
  number: "03",
  title: "Kích hoạt AI Agent trên nền tảng",
  subtitle: "Kết nối AI Agent với Lark Base, task management và data đã chuẩn hoá.",
  outcome: "Sếp quản lý toàn bộ qua 1 dòng chat.",
  duration: "Sau khi Tầng 1 ổn định",
  image: solutionStep3,
};

const SolutionSection = () => {
  return (
    <section id="services" className="section-padding" style={{ background: "hsl(var(--light))" }}>
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Lark Consult làm gì cho doanh nghiệp</span>
          <h2
            className="font-display font-extrabold mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.2 }}
          >
            Xây nền tảng.{" "}
            <span className="text-primary">Kích hoạt AI.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed" style={{ fontSize: "1.05rem" }}>
            Chúng tôi giúp doanh nghiệp thiết kế cách vận hành rõ ràng và triển khai hệ thống làm việc trên Lark.
          </p>
        </div>

        {/* TẦNG 1 — NỀN TẢNG VẬN HÀNH */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-light text-primary text-xs font-bold uppercase tracking-wider mb-8">
            Tầng 1 — Nền tảng vận hành
          </div>
        </div>

        <div className="space-y-16 mb-12">
          {tier1Steps.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-[58px] h-[58px] rounded-full bg-primary flex items-center justify-center"
                      style={{ boxShadow: "0 4px 16px rgba(27,79,216,0.3)" }}
                    >
                      <span className="font-display font-extrabold text-white text-lg">{service.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--dark2))" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>
                  <p className="text-sm font-medium text-success border-t border-border pt-4 mb-3">
                    ✓ {service.outcome}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-light text-xs font-medium text-primary">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </div>
                </div>
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="rounded-xl overflow-hidden border border-border shadow-card bg-card hover:shadow-hover hover:border-primary hover:-translate-y-0.5 transition-all duration-300">
                    <img src={service.image} alt={service.title} className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connector block */}
        <div
          className="rounded-r-lg p-4 mb-12 max-w-3xl"
          style={{
            background: "hsl(var(--blue-light))",
            borderLeft: "3px solid hsl(var(--blue))",
          }}
        >
          <p className="text-sm italic text-muted-foreground flex items-start gap-2">
            <LinkIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            AI chỉ thông minh khi data phía dưới đã sạch và có cấu trúc. Tầng 1 là điều kiện bắt buộc để Tầng 2 hoạt động.
          </p>
        </div>

        {/* TẦNG 2 — KÍCH HOẠT AI AGENT */}
        <div
          className="rounded-2xl p-6 md:p-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.04))",
            borderColor: "rgba(37,99,235,0.2)",
          }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ background: "rgba(37,99,235,0.12)", color: "hsl(var(--blue-bright))" }}
            >
              Tầng 2 — Kích hoạt AI Agent
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-semibold">
              ⭐ Add-on Premium
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-[58px] h-[58px] rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}
                >
                  <span className="font-display font-extrabold text-white text-lg">{tier2Step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--dark2))" }}>
                {tier2Step.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {tier2Step.subtitle}
              </p>
              <p className="text-sm font-medium text-success border-t border-border pt-4 mb-3">
                ✓ {tier2Step.outcome}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-light text-xs font-medium text-primary">
                <Clock className="w-3.5 h-3.5" />
                {tier2Step.duration}
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border border-border shadow-card bg-card">
                <img src={tier2Step.image} alt={tier2Step.title} className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
