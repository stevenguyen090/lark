import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden" style={{ padding: "140px 5% 90px" }}>
      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border mb-6 animate-fade-in"
              style={{ boxShadow: "var(--shadow-badge)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-primary font-body">
                Đang nhận 3 slot tư vấn trong tháng này
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display font-extrabold leading-[1.15] mb-6 animate-fade-in"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.5px",
                animationDelay: "0.1s",
              }}
            >
              Sếp hỏi 1 câu —<br />
              hệ thống trả lời{" "}
              <em className="not-italic text-primary relative">
                tức thì
                <span
                  className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, hsl(var(--blue)), hsl(var(--accent-brand)))" }}
                />
              </em>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-base text-muted-foreground mb-6 leading-relaxed animate-fade-in"
              style={{ fontSize: "1.05rem", lineHeight: 1.7, animationDelay: "0.15s" }}
            >
              Lark Consult giúp doanh nghiệp 10–50 nhân sự xây hệ thống vận hành rõ ràng trên Lark — để đội ngũ chủ động và lãnh đạo tập trung vào chiến lược.
            </p>

            {/* Sub-hook v2.0 */}
            <p
              className="text-sm text-muted-foreground mb-6 italic animate-fade-in"
              style={{ animationDelay: "0.18s" }}
            >
              Không chỉ cài tool — chúng tôi xây nền tảng để AI Agent hoạt động đúng.
            </p>

            {/* Proof bar */}
            <div
              className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-sm font-semibold text-foreground">30+ doanh nghiệp</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="flex items-center gap-1 text-sm font-semibold">
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                92/100 hài lòng
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">30–50% giảm thời gian</span>
            </div>

            {/* Dual CTA */}
            <div
              className="flex flex-col sm:flex-row items-start gap-3 animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              <a
                href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="rounded-lg font-bold text-sm shadow-btn-primary hover:shadow-btn-hover hover:-translate-y-0.5 transition-all"
                  style={{ padding: "0.85rem 1.6rem" }}
                >
                  Đặt lịch tư vấn miễn phí
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a
                href="https://zalo.me/0905652628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-lg font-bold text-sm border-[1.5px] hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                  style={{ padding: "0.85rem 1.6rem" }}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Nhắn Zalo ngay
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div
              className="rounded-2xl overflow-hidden border border-border"
              style={{ boxShadow: "var(--shadow-hero-visual)" }}
            >
              <img
                src={heroDashboard}
                alt="Lark Consult – Hệ thống quản lý vận hành tập trung trên Lark"
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
