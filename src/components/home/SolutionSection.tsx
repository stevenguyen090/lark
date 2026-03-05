const steps = [
  {
    number: "01",
    title: "Bóc Tách Mô Hình Kinh Doanh & Điểm Nghẽn Vận Hành",
    description: "Phân tích mô hình kinh doanh và quy trình thực tế để tìm đúng điểm nghẽn trước khi đề xuất giải pháp. Không làm khi chưa hiểu rõ vấn đề.",
  },
  {
    number: "02",
    title: "Thiết Kế Giải Pháp Phù Hợp Ngân Sách",
    description: "Đề xuất giải pháp đúng trọng tâm, làm rõ vai trò của Lark trong hệ thống và đưa ra nhiều phương án để lãnh đạo lựa chọn theo ngân sách.",
  },
  {
    number: "03",
    title: "Triển Khai Thử Nghiệm & Đo Bằng Số",
    description: "Làm thử ở phạm vi nhỏ, đo hiệu quả bằng chỉ số cụ thể trước khi nhân rộng. Quyết định dựa trên dữ liệu, không dựa trên cảm tính.",
  },
  {
    number: "04",
    title: "Đồng Hành Dài Hạn – Không Bỏ Giữa Chừng",
    description: "Theo dõi, bảo trì và tối ưu liên tục để hệ thống vận hành ổn định và tạo giá trị lâu dài. Không bàn giao rồi rời đi.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Quy trình triển khai –{" "}
            <span className="text-primary">giảm rủi ro tối đa</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl border bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold mb-4 text-primary/20">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
