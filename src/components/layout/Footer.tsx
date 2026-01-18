import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-content py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-semibold text-xl text-foreground">
                Lark<span className="text-primary">Consult</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Giúp doanh nghiệp SME vận hành trơn tru hơn – mà sếp không phải lúc nào cũng nhảy vào xử lý. 
              Chúng tôi không bán tool, chúng tôi giúp bạn giải quyết vấn đề vận hành.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Study
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Về chúng tôi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@larkconsult.vn</li>
              <li>Hotline: 0123 456 789</li>
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
