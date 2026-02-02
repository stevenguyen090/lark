import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            Chuẩn hoá vận hành SME –{" "}
            <span className="text-primary">để doanh nghiệp chạy mà không cần sếp xử lý từng việc.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Làm thử ở quy mô nhỏ. Đo hiệu quả bằng số. Chỉ mở rộng khi đã thấy kết quả.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Primary CTA */}
            <a 
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Đặt lịch trao đổi 30 phút
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            
            {/* Secondary CTA */}
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <BookOpen className="w-5 h-5" />
                Xem case study giống doanh nghiệp tôi
              </Button>
            </Link>
          </div>

          {/* Hero Visual Overlay */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              {/* Visual mockup representing centralized system */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="h-2 bg-secondary rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-secondary rounded w-1/2"></div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <div className="h-2 bg-secondary rounded w-full mb-2"></div>
                  <div className="h-2 bg-secondary rounded w-2/3"></div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                  </div>
                  <div className="h-2 bg-secondary rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-secondary rounded w-full"></div>
                </div>
              </div>
              
              {/* Overlay badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  SME 10–100 nhân sự
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium border border-success/20">
                  Làm thử – đo – mở rộng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
