import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Zap, MessageCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Chọn mức độ đồng hành{" "}
            <span className="text-primary">phù hợp với giai đoạn của bạn</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Dù bạn mới bắt đầu tìm hiểu hay đã sẵn sàng xây hệ thống — chúng tôi đều có cách phù hợp.
          </p>
        </div>

        {/* Scarcity */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 text-sm font-medium text-foreground">
            <Zap className="w-4 h-4 text-warning" />
            Chỉ nhận 5 slot tư vấn miễn phí mỗi tháng để đảm bảo chất lượng
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Package 1 — Tư vấn vận hành */}
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-1">Gói 1 — Tư vấn vận hành</h3>
            <div className="text-3xl font-bold text-primary mb-2">MIỄN PHÍ</div>
            <p className="text-sm text-muted-foreground mb-6">
              Doanh nghiệp muốn hiểu rõ điểm nghẽn trước khi đầu tư
            </p>

            <p className="text-xs text-muted-foreground mb-4 font-medium">1 buổi × 60 phút (online hoặc offline)</p>

            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Phân tích mô hình vận hành hiện tại",
                "Xác định 2–3 điểm nghẽn chính",
                "Đề xuất hướng giải quyết phù hợp",
                "Không ràng buộc, không áp lực",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full">
                Đặt lịch ngay
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Package 2 — Triển khai toàn diện */}
          <div className="rounded-2xl border-2 border-primary bg-card p-8 flex flex-col relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                <Star className="w-3 h-3 fill-primary-foreground" />
                PHỔ BIẾN NHẤT
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">Gói 2 — Triển khai toàn diện</h3>
            <div className="text-3xl font-bold text-primary mb-2">
              Từ 500.000đ<span className="text-lg font-normal text-muted-foreground"> / giờ</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Doanh nghiệp sẵn sàng xây hệ thống vận hành bài bản trên Lark
            </p>

            <p className="text-xs text-muted-foreground mb-4 font-medium">40–80 giờ tuỳ quy mô doanh nghiệp</p>

            <ul className="space-y-3 mb-6 flex-grow">
              {[
                "Toàn bộ nội dung Gói 1",
                "Chuẩn hoá quy trình & phân công trách nhiệm",
                "Thiết kế & triển khai hệ thống Lark",
                "Tích hợp tool bên thứ 3 (Pancake, Shopify, CRM…)",
                "Training đội ngũ vận hành hệ thống",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xs text-primary font-medium mb-6 bg-primary/5 rounded-lg p-3 border border-primary/10">
              ✨ Đồng hành tận tâm cho đến khi doanh nghiệp vận hành ổn định — không bỏ rơi giữa chừng
            </p>

            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full">
                Nhận báo giá chi tiết
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Không chắc nên chọn gói nào?{" "}
            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Bắt đầu với buổi tư vấn miễn phí
            </a>
            {" "}— chúng tôi sẽ tư vấn thật, không bán ép.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
