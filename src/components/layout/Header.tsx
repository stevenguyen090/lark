import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-content flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="font-semibold text-xl text-foreground">
              Lark<span className="text-primary">Consult</span>
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Trang chủ
          </Link>
          <Link 
            to="/case-studies" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Case Study
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a 
            href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
              Đặt lịch trao đổi
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
