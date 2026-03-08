import { Search, Settings, HeartHandshake } from "lucide-react";
import solutionStep1 from "@/assets/solution-step1.png";
import solutionStep2 from "@/assets/solution-step2.png";
import solutionStep3 from "@/assets/solution-step3.png";

const services = [
  {
    icon: Search,
    number: "01",
    title: "Tư vấn và chuẩn hoá vận hành",
    subtitle: "Phân tích mô hình vận hành hiện tại và xác định điểm nghẽn.",
    intro: "Chúng tôi cùng doanh nghiệp:",
    bullets: [
      "Rà soát quy trình làm việc",
      "Thiết kế cách giao việc rõ ràng",
      "Xác định trách nhiệm của từng vị trí",
    ],
    outcome: "Mục tiêu là giúp đội ngũ biết mình cần làm gì và chịu trách nhiệm ra sao.",
    image: solutionStep1,
  },
  {
    icon: Settings,
    number: "02",
    title: "Triển khai hệ thống quản lý trên Lark",
    subtitle: "Sau khi quy trình được chuẩn hoá, chúng tôi thiết lập hệ thống làm việc tập trung trên Lark.",
    intro: "Bao gồm:",
    bullets: [
      "Quản lý công việc & dự án",
      "Lưu trữ tài liệu",
      "Dashboard vận hành",
      "Tích hợp hệ thống bên thứ 3 (Pancake, Shopify, Chatbot AI, ViettelPost…)",
    ],
    outcome: "Nhờ đó doanh nghiệp có thể làm việc trên một nền tảng thống nhất.",
    image: solutionStep2,
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Đồng hành tối ưu hệ thống",
    subtitle: "Sau khi triển khai, Lark Consult tiếp tục đồng hành:",
    intro: "",
    bullets: [
      "Theo dõi việc sử dụng hệ thống",
      "Điều chỉnh quy trình khi cần",
      "Tối ưu dashboard và báo cáo",
    ],
    outcome: "Để hệ thống thực sự giúp doanh nghiệp vận hành tốt hơn theo thời gian.",
    image: solutionStep3,
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
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
            Chúng tôi giúp doanh nghiệp thiết kế cách vận hành rõ ràng và triển khai hệ thống làm việc trên Lark để đội ngũ phối hợp tốt hơn và lãnh đạo có thể theo dõi tình hình trong vài phút.
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

                  {service.intro && (
                    <p className="text-sm font-medium text-foreground mb-2">{service.intro}</p>
                  )}
                  <ul className="space-y-2 mb-5">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-medium text-primary/80 border-t border-border pt-4">
                    {service.outcome}
                  </p>
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
