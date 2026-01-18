import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            Giúp doanh nghiệp SME{" "}
            <span className="text-primary">vận hành trơn tru hơn</span> – mà sếp
            không phải lúc nào cũng nhảy vào xử lý.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Chúng tôi không triển khai tool ồ ạt. Lark Consult giúp bạn{" "}
            <span className="font-medium text-foreground">làm thử ở phạm vi nhỏ</span> –{" "}
            <span className="font-medium text-foreground">đo hiệu quả bằng số</span> – rồi mới quyết định mở rộng.
          </p>

          {/* Supporting line */}
          <p className="text-base text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dành cho doanh nghiệp SME muốn chuẩn hoá vận hành nhưng lo rủi ro, chi phí và hiệu quả thực tế.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Đánh giá nhanh doanh nghiệp của tôi
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
              Đặt lịch trao đổi 30 phút
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
