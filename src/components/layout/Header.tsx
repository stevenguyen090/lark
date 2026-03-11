import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Dịch vụ", href: "/#services" },
    { label: "Case Study", to: "/case-studies" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-content flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="font-semibold text-xl text-foreground">
            Lark<span className="text-primary">Consult</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA + Zalo */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://zalo.me/0905652628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            0905 652 628
          </a>
          <a
            href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="rounded-full">
              Đặt lịch tư vấn miễn phí
            </Button>
          </a>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="rounded-full text-xs px-3">
              Tư vấn miễn phí
            </Button>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-content py-4 flex flex-col gap-3">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground py-2"
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="https://zalo.me/0905652628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground py-2"
            >
              <Phone className="w-4 h-4" />
              Zalo: 0905 652 628
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
