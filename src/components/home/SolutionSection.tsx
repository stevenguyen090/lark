const steps = [
  {
    number: "01",
    title: "Hiểu đúng vấn đề vận hành",
    description: "Phân tích job, pain, constraint thực tế của doanh nghiệp.",
    highlight: false
  },
  {
    number: "02",
    title: "Chọn đúng nền tảng vận hành & làm thử quy mô nhỏ",
    description: "Lựa chọn nền tảng phù hợp với bài toán vận hành thực tế (Lark quản lý công việc tập trung, báo cáo, phối hợp; kết hợp các công cụ đang có nếu cần). Triển khai thử ở phạm vi nhỏ để kiểm chứng hiệu quả.",
    highlight: true
  },
  {
    number: "03",
    title: "Đo hiệu quả bằng số",
    description: "Thời gian xử lý, mức độ phụ thuộc CEO, tính chủ động nhân sự.",
    highlight: false
  },
  {
    number: "04",
    title: "Mở rộng có kiểm soát",
    description: "Chỉ mở rộng khi các chỉ số vận hành đã chứng minh hiệu quả. Mọi bước mở rộng đều có baseline và KPI rõ ràng.",
    highlight: true
  }
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Quy trình{" "}
            <span className="text-primary">giảm rủi ro</span>{" "}
            khi triển khai
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mỗi bước đều có thể đo lường, không triển khai ồ ạt
          </p>
        </div>

        {/* Steps - Stepper style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative p-6 rounded-xl border animate-fade-in ${
                step.highlight 
                  ? 'bg-primary/5 border-primary/30' 
                  : 'bg-card border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number - Large */}
              <div className={`text-5xl font-bold mb-4 ${
                step.highlight ? 'text-primary' : 'text-muted-foreground/30'
              }`}>
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className={`text-lg font-semibold mb-2 ${
                step.highlight ? 'text-primary' : 'text-foreground'
              }`}>
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              
              {/* Highlight badge */}
              {step.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Quan trọng
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
