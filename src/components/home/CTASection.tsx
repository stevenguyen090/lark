import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const CTASection = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Bạn vẫn chưa chắc doanh nghiệp mình có phù hợp?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hãy bắt đầu bằng một buổi đánh giá nhanh –{" "}
            <span className="font-medium text-foreground">không ràng buộc</span>,{" "}
            <span className="font-medium text-foreground">không cam kết triển khai</span>.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl">
            <CalendarDays className="w-5 h-5" />
            Đặt lịch trao đổi
          </Button>

          {/* Trust note */}
          <p className="text-sm text-muted-foreground mt-6">
            Buổi trao đổi kéo dài khoảng 30 phút, hoàn toàn miễn phí.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
