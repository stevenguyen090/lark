import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    industry: "Fitness & Wellness",
    painPoint: "Nhân viên PT không báo cáo đúng giờ, quản lý không nắm được tình hình",
    metric: "Giảm 60% thời gian theo dõi công việc",
    slug: "fitness",
    icon: "🏋️"
  },
  {
    industry: "Bán lẻ & Chuỗi cửa hàng",
    painPoint: "Không kiểm soát được tồn kho và doanh thu từng điểm bán",
    metric: "Báo cáo tự động mỗi ngày, không cần nhắc",
    slug: "retail",
    icon: "🛒"
  },
  {
    industry: "Sản xuất & Gia công",
    painPoint: "Đơn hàng bị trễ vì thiếu phối hợp giữa các bộ phận",
    metric: "Giảm 40% thời gian xử lý đơn hàng",
    slug: "manufacturing",
    icon: "🏭"
  },
  {
    industry: "Dịch vụ chuyên môn",
    painPoint: "Hồ sơ khách hàng rải rác, không tra cứu được nhanh",
    metric: "100% hồ sơ được số hoá và truy xuất trong 30 giây",
    slug: "professional-services",
    icon: "💼"
  }
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Doanh nghiệp{" "}
            <span className="text-primary">tương tự bạn</span>{" "}
            đã triển khai thành công
          </h2>
          <p className="text-muted-foreground text-lg">
            Xem case study theo ngành để biết cách doanh nghiệp giống bạn đã giải quyết vấn đề
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index}
              className="card-elevated p-6 flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Industry icon */}
              <div className="text-3xl mb-4">{item.icon}</div>
              
              {/* Industry name */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.industry}
              </h3>
              
              {/* Pain point */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {item.painPoint}
              </p>
              
              {/* Metric highlight */}
              <div className="bg-primary/5 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-primary">
                  {item.metric}
                </p>
              </div>
              
              {/* CTA */}
              <Link 
                to={`/case-studies?industry=${item.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Xem case tương tự
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
