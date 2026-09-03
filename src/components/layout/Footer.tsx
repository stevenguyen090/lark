import { Link } from "react-router-dom";
import larkConsultLogo from "@/assets/brand/larkconsult-logo-primary.png";

const CTA_LINK = "https://larkconsult.sg.larksuite.com/share/base/form/shrlgOQm9YZugwbV6FaVibRHQ3b";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "48px 0 32px" }}>
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8 mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <Link to="/" aria-label="LarkConsult — Trang chủ" className="mb-3 inline-flex min-h-11 items-center">
              <img
                src={larkConsultLogo}
                alt="LarkConsult"
                className="brand-logo h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-t-secondary max-w-[260px]" style={{ lineHeight: 1.6 }}>Tư vấn và xây dựng hệ thống vận hành trên Lark để chủ doanh nghiệp nắm số liệu, việc cần xử lý và báo cáo đúng lúc.</p>
          </div>
          <div>
            <div className="text-xs font-bold text-t-secondary mb-4" style={{ letterSpacing: 1 }}>ĐIỀU HƯỚNG</div>
            <ul className="flex flex-col gap-3 list-none">
              {[{ label: "Dành cho ai", href: "/#for" }, { label: "Dịch vụ", href: "/#services" }, { label: "Trợ lý AI", href: "/#ai-agent" }, { label: "Gói dịch vụ", href: "/#pricing" }, { label: "FAQ", href: "/#faq" }].map(item => (
                <li key={item.label}><a href={item.href} className="text-sm text-t-secondary hover:text-t-primary transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold text-t-secondary mb-4" style={{ letterSpacing: 1 }}>CASE STUDY</div>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link to="/case-studies" className="inline-flex min-h-11 items-center text-sm text-t-secondary hover:text-t-primary transition-colors">Xem tất cả Case Study</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold text-t-secondary mb-4" style={{ letterSpacing: 1 }}>LIÊN HỆ</div>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="https://zalo.me/0905652628" target="_blank" rel="noopener noreferrer" className="text-sm text-t-secondary hover:text-t-primary transition-colors">Zalo: 0905.652.628</a></li>
              <li><a href="mailto:hello@larkconsult.vn" className="text-sm text-t-secondary hover:text-t-primary transition-colors">hello@larkconsult.vn</a></li>
              <li><a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-t-secondary hover:text-t-primary transition-colors">Đặt lịch tư vấn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-xs text-t-secondary">© 2026 Lark Consult — Bảo lưu mọi quyền.</span>
          <span className="text-xs text-t-secondary">Giúp doanh nghiệp Việt vận hành rõ ràng và hiệu quả hơn.</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
