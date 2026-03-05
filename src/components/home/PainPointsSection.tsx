import { UserCheck, BarChart3, Network, MonitorOff } from "lucide-react";

const painPoints = [
  {
    icon: UserCheck,
    title: "CEO bị kéo vào mọi việc nhỏ.",
    description: "Mọi quyết định đều phải chờ bạn duyệt.",
  },
  {
    icon: BarChart3,
    title: "Không có số đo hiệu quả rõ ràng.",
    description: "Nhân sự bận nhưng không biết năng suất có thực sự tăng hay không.",
  },
  {
    icon: Network,
    title: "Phòng ban làm việc thiếu phối hợp.",
    description: "Thông tin rời rạc giữa chat, file, bảng tính.",
  },
  {
    icon: MonitorOff,
    title: "Triển khai phần mềm nhưng không ai dùng.",
    description: "Hệ thống có nhưng không tạo ra thay đổi thực sự.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Doanh nghiệp của bạn có đang gặp{" "}
            <span className="text-primary">những vấn đề này?</span>
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-elevated p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
