import beforeCeo from "@/assets/before-ceo.png";
import beforeChannels from "@/assets/before-channels.png";
import beforeNometrics from "@/assets/before-nometrics.png";
import beforeLatereport from "@/assets/before-latereport.png";
import { CheckCircle2 } from "lucide-react";

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
    <>
      {/* BEFORE Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-content">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold text-destructive bg-destructive/10 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Trước khi có hệ thống
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Vấn đề doanh nghiệp <span className="text-destructive">thường gặp</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Khi chưa có hệ thống vận hành rõ ràng, mọi thứ đều phụ thuộc vào sếp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beforeItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-destructive/15 bg-card p-5 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER Section */}
      <section className="section-padding bg-[hsl(var(--success))]/5">
        <div className="container-content">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold text-[hsl(var(--success))] bg-[hsl(var(--success))]/10 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Sau khi được Lark Consult tư vấn
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Khi hệ thống vận hành được <span className="text-[hsl(var(--success))]">thiết kế lại</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Đội ngũ chủ động, lãnh đạo tập trung vào chiến lược.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {afterItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-[hsl(var(--success))]/15 bg-card p-5 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-[hsl(var(--success))]/10 flex-shrink-0">
                  <CheckCircle2 className="w-10 h-10 text-[hsl(var(--success))]" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeforeAfterSection;
