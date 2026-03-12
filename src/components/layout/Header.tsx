import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    { label: "AI Agent", href: "/#ai-agent" },
    { label: "Pricing", href: "/#pricing" },
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
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[7px] font-extrabold text-[15px] tracking-[-0.3px] text-t-primary">
          <div
            className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-[13px] text-white"
            style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
          >
            ✦
          </div>
          LarkConsult
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-t-secondary hover:text-t-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://zalo.me/0905652628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-t-tertiary px-2.5 py-1.5 rounded-md border border-white/5 hover:text-t-secondary hover:border-white/10 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>
            0905.652.628
          </a>
          <a
            href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-[11px] !px-[22px] !text-sm"
          >
            Đặt lịch tư vấn
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            Tư vấn
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-t-primary" aria-label="Menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden animate-fade-in" style={{ background: "rgba(6,13,24,0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container-content py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-t-primary py-2"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/case-studies"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-t-primary py-2"
            >
              Case Study
            </Link>
            <a
              href="https://zalo.me/0905652628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-t-secondary py-2"
            >
              Zalo: 0905 652 628
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
