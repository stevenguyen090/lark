import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Bạn muốn hệ thống vận hành rõ ràng trong 90 ngày tới?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bắt đầu bằng một buổi tư vấn miễn phí để xác định đúng điểm nghẽn trước khi triển khai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <a
              href="https://zalo.me/0905652628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5" />
                Nhắn Zalo để trao đổi nhanh
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
