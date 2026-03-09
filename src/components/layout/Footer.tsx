import { Link } from "react-router-dom";
import { Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-content py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-semibold text-xl text-foreground">
                Lark<span className="text-primary">Consult</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Hệ thống vận hành tập trung cho doanh nghiệp Việt
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Điều hướng</h4>
            <ul className="space-y-2">
              {[
                { label: "Dịch vụ", href: "/#services" },
                { label: "Case Study", to: "/case-studies" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Về chúng tôi", href: "/#about" },
              ].map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link to={item.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://zalo.me/0905652628" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Zalo: 0905 652 628
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:tung1234pct@gmail.com" className="hover:text-primary transition-colors">
                  tung1234pct@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <a
                  href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Đặt lịch tư vấn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Lark Consult. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
