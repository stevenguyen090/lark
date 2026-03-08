import { XCircle, CheckCircle2 } from "lucide-react";

const beforeItems = [
  {
    title: "CEO bị kéo vào quá nhiều việc nhỏ",
    description: "Mọi quyết định đều phải chờ lãnh đạo duyệt.",
  },
  {
    title: "Công việc được giao qua nhiều kênh khác nhau",
    description: "Chat, file, email, bảng tính… khiến thông tin rời rạc.",
  },
  {
    title: "Nhân sự làm việc chăm chỉ nhưng khó đo hiệu quả",
    description: "Không có dashboard hoặc chỉ số rõ ràng để theo dõi.",
  },
  {
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
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Trước và sau khi được Lark Consult{" "}
            <span className="text-primary">tư vấn hệ thống vận hành</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Đồng hành xuyên suốt trong quá trình vận hành – từ phân tích, thiết kế đến tối ưu liên tục
          </p>
        </div>

        {/* Before / After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BEFORE Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-destructive">BEFORE</h3>
                <p className="text-sm text-muted-foreground">Khi chưa có hệ thống rõ ràng</p>
              </div>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-destructive/15 bg-card p-4 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5 text-destructive/60" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--success))]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[hsl(var(--success))]">AFTER</h3>
                <p className="text-sm text-muted-foreground">Khi được Lark Consult tư vấn</p>
              </div>
            </div>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-[hsl(var(--success))]/15 bg-card p-4 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]/60" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
