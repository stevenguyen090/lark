import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Star } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline — Pain-first hook */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            Doanh nghiệp bạn đang chạy bằng{" "}
            <span className="text-primary">Zalo và Excel?</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Lark Consult giúp doanh nghiệp 10–50 nhân sự xây hệ thống vận hành rõ ràng trên Lark — để đội ngũ chủ động và lãnh đạo tập trung vào chiến lược.
          </p>

          {/* Inline Social Proof */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span className="text-sm md:text-base text-muted-foreground font-medium">
              Đã đồng hành cùng <span className="text-foreground font-bold">30+</span> doanh nghiệp
            </span>
            <span className="w-px h-5 bg-border" />
            <span className="flex items-center gap-1 text-sm md:text-base text-muted-foreground font-medium">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-foreground font-bold">92/100</span> mức độ hài lòng
            </span>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
                Nhắn Zalo ngay
              </Button>
            </a>
          </div>

          {/* Scarcity Element */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 text-sm font-medium text-foreground animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <Zap className="w-4 h-4 text-warning" />
            Chỉ nhận 5 slot tư vấn miễn phí mỗi tháng
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
