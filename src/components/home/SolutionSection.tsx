import { Search, Settings, HeartHandshake, Clock } from "lucide-react";
import solutionStep1 from "@/assets/solution-step1.png";
import solutionStep2 from "@/assets/solution-step2.png";
import solutionStep3 from "@/assets/solution-step3.png";

const services = [
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
  {
    icon: HeartHandshake,
    number: "03",
    title: "Đồng hành tối ưu",
    subtitle: "Theo dõi việc dùng hệ thống, điều chỉnh quy trình, tối ưu dashboard.",
    outcome: "Hệ thống hoạt động tốt hơn theo thời gian.",
    duration: "Liên tục",
    image: solutionStep3,
  },
];

const SolutionSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Lark Consult làm gì cho doanh nghiệp
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Dịch vụ tư vấn vận hành và{" "}
            <span className="text-primary">triển khai hệ thống Lark</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Chúng tôi giúp doanh nghiệp thiết kế cách vận hành rõ ràng và triển khai hệ thống làm việc trên Lark.
          </p>
        </div>

        {/* Services - alternating layout */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Text Content */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  {/* Icon & Number */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-primary/15">{service.number}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <p className="text-sm font-medium text-primary/80 border-t border-border pt-4 mb-3">
                    {service.outcome}
                  </p>

                  {/* Duration badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </div>
                </div>

                {/* Image */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
