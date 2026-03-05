import { Settings, Laptop, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Tư vấn thiết kế hệ thống vận hành",
    description: "Chuẩn hoá quy trình, phân quyền, thiết lập KPI và cơ chế đo lường.",
  },
  {
    icon: Laptop,
    title: "Triển khai Lark & tích hợp công cụ",
    description: "Xây dựng workspace tập trung: quản lý công việc, báo cáo, tài liệu, quy trình.",
  },
  {
    icon: TrendingUp,
    title: "Đo lường & tối ưu vận hành",
    description: "Thiết lập dashboard, baseline và theo dõi hiệu quả liên tục.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Giải pháp{" "}
            <span className="text-primary">Lark Consult cung cấp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-elevated p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
