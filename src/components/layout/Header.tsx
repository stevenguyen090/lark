import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import larkConsultLogo from "@/assets/brand/larkconsult-logo-primary.png";

const CTA_LINK = "https://larkconsult.sg.larksuite.com/share/base/form/shrlgOQm9YZugwbV6FaVibRHQ3b";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Dành cho ai", href: "/#for" },
    { label: "Dịch vụ", href: "/#services" },
    { label: "Trợ lý AI", href: "/#ai-agent" },
    { label: "Gói dịch vụ", href: "/#pricing" },
    { label: "Case Study", href: "/case-studies" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-250"
      style={{
        borderBottom: "1px solid transparent",
        ...(scrolled
          ? {
              background: "rgba(6,13,24,0.85)",
              backdropFilter: "blur(20px) saturate(1.5)",
              WebkitBackdropFilter: "blur(20px) saturate(1.5)",
              borderColor: "rgba(255,255,255,0.05)",
            }
          : {}),
      }}
    >
      <div className="container-content h-full flex items-center justify-between">
        <Link to="/" aria-label="LarkConsult — Trang chủ" className="flex min-h-11 items-center">
          <img
            src={larkConsultLogo}
            alt="LarkConsult"
            className="brand-logo h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-7 list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-sm font-medium text-t-secondary hover:text-t-primary transition-colors">{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3">
          <a href="https://zalo.me/0905652628" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-1.5 rounded-md border border-white/10 px-3 text-sm font-medium text-t-secondary transition-all hover:border-white/20 hover:text-t-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>
            0905.652.628
          </a>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary !py-[11px] !px-[22px] !text-sm">Đặt lịch tư vấn</a>
        </div>

        <div className="flex xl:hidden items-center gap-2">
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex min-h-11 items-center !px-5 !py-2 !text-sm">Tư vấn</a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-t-primary hover:bg-white/5"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="xl:hidden animate-fade-in" style={{ background: "rgba(6,13,24,0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container-content py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="inline-flex min-h-11 items-center text-sm font-medium text-t-primary">{item.label}</a>
            ))}
            <a href="https://zalo.me/0905652628" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-t-secondary">Zalo: 0905 652 628</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
