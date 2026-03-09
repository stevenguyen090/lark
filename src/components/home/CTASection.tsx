import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Sẵn sàng xây hệ thống vận hành rõ ràng trong 90 ngày tới?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Bắt đầu bằng buổi tư vấn miễn phí 60 phút — chúng tôi phân tích thực trạng và đề xuất hướng đi cụ thể, không ràng buộc.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="xl" className="bg-background text-primary hover:bg-background/90 font-semibold">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <a
              href="https://zalo.me/0905652628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="w-5 h-5" />
                Nhắn Zalo — phản hồi trong 30 phút
              </Button>
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Miễn phí, không ràng buộc
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Phản hồi trong vòng 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Đã đồng hành 30+ doanh nghiệp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
