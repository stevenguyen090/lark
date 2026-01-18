import { AlertCircle } from "lucide-react";

const painPoints = [
  "Đã từng thử tool nhưng dùng không lâu dài",
  "Không biết triển khai có cải thiện thật hay không",
  "Nhân viên vẫn hỏi – vẫn chờ – vẫn báo chậm",
  "Mỗi lần thay đổi quy trình là sợ rối thêm",
  "Cuối cùng nhiều việc vẫn quay về cho sếp"
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Có phải doanh nghiệp bạn cũng đang gặp{" "}
              <span className="text-primary">những tình huống này?</span>
            </h2>
          </div>

          {/* Pain Points List */}
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="pain-point-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5 text-warning" />
                </div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>

          {/* Empathy statement */}
          <p className="text-center text-muted-foreground mt-8 italic">
            Nếu bạn đang gật đầu, bạn không phải là người duy nhất.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
