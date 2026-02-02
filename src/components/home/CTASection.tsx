import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const CTASection = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Không bán phần mềm. Không ép triển khai.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chỉ trao đổi để xem{" "}
            <span className="font-medium text-foreground">doanh nghiệp bạn có phù hợp</span>{" "}
            hay không.
          </p>

          {/* CTA Button */}
          <a 
            href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="xl">
              <CalendarDays className="w-5 h-5" />
              Đặt lịch trao đổi
            </Button>
          </a>

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
