import { Search, TestTube, BarChart3, Expand } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Hiểu đúng vấn đề vận hành",
    description: "Không bắt đầu bằng tool – bắt đầu bằng việc hiểu doanh nghiệp bạn đang mất thời gian ở đâu."
  },
  {
    number: 2,
    icon: TestTube,
    title: "Làm thử ở phạm vi nhỏ",
    description: "Chọn 1 quy trình cốt lõi, chuẩn hoá và chạy thử trong 2-4 tuần."
  },
  {
    number: 3,
    icon: BarChart3,
    title: "Đo hiệu quả bằng số",
    description: "Theo dõi các chỉ số cụ thể: thời gian tiết kiệm, số lần gián đoạn, mức độ chủ động của nhân viên."
  },
  {
    number: 4,
    icon: Expand,
    title: "Mở rộng khi đã thấy kết quả",
    description: "Chỉ khi số liệu cho thấy hiệu quả rõ ràng, hệ thống mới được mở rộng thêm."
  }
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Chúng tôi không bắt đầu bằng tool –{" "}
            <span className="text-primary">chúng tôi bắt đầu bằng vấn đề vận hành</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="bg-card p-6 rounded-xl border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number and icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="step-number">{step.number}</div>
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
