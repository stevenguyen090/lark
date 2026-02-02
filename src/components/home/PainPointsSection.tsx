import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "Đã dùng tool nhưng không duy trì được",
  "Nhân viên vẫn hỏi – vẫn chờ",
  "Quy trình thay đổi là rối",
  "Cuối cùng sếp vẫn là người xử lý"
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Bạn có thấy mình trong{" "}
              <span className="text-primary">những tình huống này?</span>
            </h2>
            <p className="text-muted-foreground">
              Tick nhanh để xem doanh nghiệp bạn có đang gặp vấn đề tương tự
            </p>
          </div>

          {/* Checklist - Scan format */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8">
            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <label 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Empathy statement */}
          <p className="text-center text-muted-foreground mt-8 italic">
            Nếu bạn tick được 2 ô trở lên, có thể bạn cần một cách tiếp cận khác.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
