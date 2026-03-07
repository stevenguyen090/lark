import beforeCeo from "@/assets/before-ceo.png";
import beforeChannels from "@/assets/before-channels.png";
import beforeNometrics from "@/assets/before-nometrics.png";
import beforeLatereport from "@/assets/before-latereport.png";

const beforeItems = [
  {
    image: beforeCeo,
    title: "CEO bị kéo vào quá nhiều việc nhỏ",
    description: "Mọi quyết định đều phải chờ lãnh đạo duyệt.",
  },
  {
    image: beforeChannels,
    title: "Công việc được giao qua nhiều kênh khác nhau",
    description: "Chat, file, email, bảng tính… khiến thông tin rời rạc.",
  },
  {
    image: beforeNometrics,
    title: "Nhân sự làm việc chăm chỉ nhưng khó đo hiệu quả",
    description: "Không có dashboard hoặc chỉ số rõ ràng để theo dõi.",
  },
  {
    image: beforeLatereport,
    title: "Báo cáo thường đến chậm",
    description: "Lãnh đạo chỉ biết vấn đề khi sự việc đã xảy ra.",
  },
];

const afterItems = [
  {
    title: "Quy trình làm việc rõ ràng",
    description: "Nhân sự biết mình cần làm gì và chịu trách nhiệm cho phần việc nào.",
  },
  {
    title: "Công việc và thông tin được tập trung trong một hệ thống",
    description: "Đội ngũ phối hợp dễ dàng hơn.",
  },
  {
    title: "Lãnh đạo có dashboard theo dõi tình hình vận hành",
    description: "Có thể nắm được tiến độ và vấn đề quan trọng trong vài phút.",
  },
  {
    title: "CEO tập trung vào chiến lược thay vì xử lý từng việc nhỏ",
    description: "Đội ngũ chủ động hơn trong công việc hàng ngày.",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Doanh nghiệp của bạn đang ở{" "}
            <span className="text-primary">giai đoạn nào?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* BEFORE Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive text-sm font-bold">✕</span>
              <h3 className="text-lg md:text-xl font-bold text-destructive">
                BEFORE – Khi chưa có hệ thống rõ ràng
              </h3>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      🔴 {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] text-sm font-bold">✓</span>
              <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--success))]">
                AFTER – Khi hệ thống vận hành được thiết kế lại
              </h3>
            </div>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-[hsl(var(--success))]/20 bg-[hsl(var(--success))]/5 p-4 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
                >
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] text-2xl flex-shrink-0">
                    🟢
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
