import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Zap, MessageCircle, Bot } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding" style={{ background: "hsl(var(--light))" }}>
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="section-tag">Pricing</span>
          <h2
            className="font-display font-extrabold mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.2 }}
          >
            Chọn mức độ đồng hành{" "}
            <span className="text-primary">phù hợp với giai đoạn của bạn</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
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

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10" style={{ gridTemplateColumns: "1fr 1.1fr 1fr" }}>
          {/* GÓI 1 */}
          <div className="rounded-2xl border-[1.5px] border-border bg-card p-8 flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-1">Gói 1 — Tư vấn vận hành</h3>
            <div className="font-display font-extrabold text-3xl text-primary mb-2">MIỄN PHÍ</div>
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

            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full rounded-lg">
                Đặt lịch ngay <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* GÓI 2 — Featured */}
          <div className="rounded-2xl border-[1.5px] border-primary bg-card p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                <Star className="w-3 h-3 fill-primary-foreground" /> PHỔ BIẾN NHẤT
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">Gói 2 — Triển khai toàn diện</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-display font-extrabold text-2xl" style={{ color: "hsl(var(--dark2))" }}>Từ 500.000đ</span>
              <span className="text-sm text-muted-foreground">/ giờ</span>
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

            <div className="text-xs text-primary font-medium mb-6 rounded-lg p-3" style={{ background: "linear-gradient(135deg, hsl(var(--blue-light)), #F0FDF4)", border: "1px solid hsl(var(--blue) / 0.1)" }}>
              ✨ Đồng hành tận tâm cho đến khi doanh nghiệp vận hành ổn định — không bỏ rơi giữa chừng
            </div>

            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full rounded-lg">
                Nhận báo giá chi tiết <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* GÓI 3 — AI Agent (MỚI) */}
          <div className="rounded-2xl p-8 flex flex-col relative overflow-hidden" style={{ border: "1.5px solid rgba(6,182,212,0.4)", background: "white" }}>
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(6,182,212,0.1)", color: "#06B6D4" }}>
                🤖 EARLY ACCESS
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">Gói 3 — Kích hoạt AI Agent</h3>
            <div className="font-display font-extrabold text-xl mb-2" style={{ color: "hsl(var(--dark2))" }}>
              Liên hệ để nhận báo giá
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Kích hoạt AI Agent trên hệ thống Lark đã chuẩn hoá
            </p>

            <div className="text-xs text-muted-foreground mb-4 font-medium flex items-center gap-1">
              <Bot className="w-3.5 h-3.5" />
              Yêu cầu: Đã hoàn thành Gói 2
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              {[
                "Kết nối AI Agent với Lark Base",
                "AI đọc data thật, trả lời tức thì",
                "Báo cáo tự động, alert thông minh",
                "Onboarding nhân sự qua chat",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#06B6D4" }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-xs font-medium mb-6 rounded-lg p-3 flex items-center gap-2" style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.15)", color: "#0E7490" }}>
              <Zap className="w-3.5 h-3.5" />
              Chỉ nhận 3 doanh nghiệp / quý — còn 2 slot
            </div>

            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer">
              <button className="w-full py-3 rounded-lg font-bold text-sm text-white transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>
                Đăng ký Early Access →
              </button>
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Không chắc nên chọn gói nào?{" "}
            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
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
