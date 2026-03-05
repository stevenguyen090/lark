import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const trustLines = [
  "Làm thử quy mô nhỏ trước khi mở rộng",
  "Có KPI trước khi triển khai diện rộng",
  "Đồng hành dài hạn – không bàn giao rồi rời đi",
];

const HeroSection = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            Vận hành rối vì thiếu hệ thống?
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Lark Consult giúp doanh nghiệp{" "}
            <span className="text-primary font-medium">chuẩn hoá và đo được hiệu quả thật.</span>
          </p>

          {/* Value Props */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <p className="text-foreground font-medium mb-4">
              Chúng tôi không chỉ triển khai công cụ. Chúng tôi thiết kế hệ thống vận hành giúp bạn:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-lg mx-auto">
              {[
                "Giảm phụ thuộc vào CEO",
                "Rút ngắn thời gian xử lý công việc",
                "Tăng tính chủ động của đội ngũ",
                "Đo lường hiệu quả bằng số liệu rõ ràng",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <a
              href="https://zalo.me/your-zalo-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Nhắn Zalo để trao đổi nhanh
              </Button>
            </a>
          </div>

          {/* Trust Lines */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            {trustLines.map((line, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {line}
              </span>
            ))}
          </div>

          {/* Hero Dashboard Image */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src={heroDashboard}
                alt="Lark Consult – Hệ thống quản lý vận hành tập trung"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
