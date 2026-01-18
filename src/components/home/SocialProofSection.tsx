import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Factory, Dumbbell } from "lucide-react";

const industries = [
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Bán lẻ",
    pain: "Báo cáo chậm, CEO phải theo sát",
    link: "/case-studies?industry=retail",
    cta: "Xem case bán lẻ"
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Sản xuất",
    pain: "Phối hợp rời rạc, thông tin không đồng bộ",
    link: "/case-studies?industry=manufacturing",
    cta: "Xem case sản xuất"
  },
  {
    id: "fitness",
    icon: Dumbbell,
    name: "Fitness / Dịch vụ",
    pain: "Onboarding chậm, phụ thuộc quản lý",
    link: "/case-studies?industry=fitness",
    cta: "Xem case dịch vụ"
  }
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Nhiều doanh nghiệp SME đã bắt đầu từ những{" "}
            <span className="text-primary">bài toán rất giống bạn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Từ bán lẻ, sản xuất đến dịch vụ – fitness, các doanh nghiệp này bắt đầu bằng{" "}
            <span className="font-medium text-foreground">làm thử</span> –{" "}
            <span className="font-medium text-foreground">đo hiệu quả</span> – rồi mới mở rộng.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {industries.map((industry) => (
            <Link 
              key={industry.id}
              to={industry.link}
              className="card-elevated p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{industry.pain}</p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                {industry.cta}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Xem các case study theo ngành & quy mô
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
