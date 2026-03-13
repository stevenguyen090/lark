import { Link } from "react-router-dom";

const CTA_LINK = "https://larkconsult.sg.larksuite.com/share/base/form/shrlgOQm9YZugwbV6FaVibRHQ3b";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "48px 0 32px" }}>
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-8 mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <div className="font-extrabold text-base flex items-center gap-[7px] mb-3 text-t-primary">
              <div className="w-[22px] h-[22px] rounded-[7px] flex items-center justify-center text-[11px] text-white" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>✦</div>
              LarkConsult
            </div>
            <p className="text-sm text-t-tertiary max-w-[260px]" style={{ lineHeight: 1.6 }}>Tư vấn, xây dựng hệ thống vận hành để AI Agent giúp các sếp quản lý nhàn hơn.</p>
          </div>
          <div>
            <div className="text-[11px] font-bold text-t-tertiary mb-4" style={{ letterSpacing: 1 }}>ĐIỀU HƯỚNG</div>
            <ul className="flex flex-col gap-3 list-none">
              {[{ label: "Dành cho ai", href: "/#for" }, { label: "Dịch vụ", href: "/#services" }, { label: "AI Agent", href: "/#ai-agent" }, { label: "Pricing", href: "/#pricing" }, { label: "FAQ", href: "/#faq" }].map(item => (
                <li key={item.label}><a href={item.href} className="text-sm text-t-tertiary hover:text-t-secondary transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold text-t-tertiary mb-4" style={{ letterSpacing: 1 }}>CASE STUDIES</div>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link to="/case-studies" className="text-sm text-t-tertiary hover:text-t-secondary transition-colors">Tất cả Case Study</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold text-t-tertiary mb-4" style={{ letterSpacing: 1 }}>LIÊN HỆ</div>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="https://zalo.me/0905652628" target="_blank" rel="noopener noreferrer" className="text-sm text-t-tertiary hover:text-t-secondary transition-colors">Zalo: 0905.652.628</a></li>
              <li><a href="mailto:hello@larkconsult.vn" className="text-sm text-t-tertiary hover:text-t-secondary transition-colors">hello@larkconsult.vn</a></li>
              <li><a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-t-tertiary hover:text-t-secondary transition-colors">Đặt lịch tư vấn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-xs text-t-tertiary">© 2025 Lark Consult — All rights reserved.</span>
          <span className="text-xs text-t-tertiary">Built to help Vietnamese businesses operate better.</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
