import { XCircle, CheckCircle2, HeartHandshake } from "lucide-react";

const beforeItems = [
  { title: "CEO bị kéo vào mọi việc nhỏ" },
  { title: "Giao việc qua Zalo/chat rời rạc" },
  { title: "Không có số liệu theo dõi hiệu suất" },
  { title: "Báo cáo đến cuối tháng mới có" },
  { title: "Nhân sự không biết ưu tiên gì" },
];

const afterItems = [
  { title: "CEO tập trung vào chiến lược" },
  { title: "Công việc tập trung 1 nền tảng" },
  { title: "Dashboard realtime — nhìn là biết" },
  { title: "Thông tin có ngay trong ngày" },
  { title: "Mọi người biết rõ việc mình cần làm" },
];

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Trước và sau khi được Lark Consult{" "}
            <span className="text-primary">tư vấn hệ thống vận hành</span>
          </h2>
        </div>

        {/* Before / After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BEFORE Column */}
          <div className="rounded-2xl bg-destructive/5 border border-destructive/15 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-destructive">BEFORE</h3>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER Column */}
          <div className="rounded-2xl bg-[hsl(var(--success))]/5 border border-[hsl(var(--success))]/15 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--success))]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]" />
              </div>
              <h3 className="text-lg font-bold text-[hsl(var(--success))]">AFTER</h3>
            </div>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]/60 flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                Đồng hành xuyên suốt – không bỏ rơi giữa chừng
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lark Consult không chỉ triển khai rồi rời đi. Chúng tôi đồng hành cùng doanh nghiệp từ khâu phân tích, thiết kế hệ thống đến tối ưu liên tục.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
