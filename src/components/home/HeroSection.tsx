import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            Giúp doanh nghiệp vận hành trơn tru – không cần sếp xử lý từng việc
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Lark Consult tư vấn vận hành và triển khai hệ thống quản lý trên nền tảng Lark, giúp doanh nghiệp làm việc rõ ràng và lãnh đạo nắm được tình hình bằng dữ liệu.
          </p>

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
              href="https://zalo.me/0905652628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Nhắn Zalo để trao đổi nhanh
              </Button>
            </a>
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
