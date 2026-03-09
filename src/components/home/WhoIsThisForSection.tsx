import { UserCircle, BarChart3, Rocket, Puzzle } from "lucide-react";

const personas = [
  {
    icon: UserCircle,
    title: "CEO / Founder doanh nghiệp 10–50 nhân sự",
    pain: "Bị kéo vào quá nhiều việc nhỏ, không có thời gian làm chiến lược",
  },
  {
    icon: BarChart3,
    title: "Giám đốc vận hành / COO",
    pain: "Khó theo dõi tiến độ và hiệu suất đội ngũ theo thời gian thực",
  },
  {
    icon: Rocket,
    title: "Chủ doanh nghiệp đang scale",
    pain: "Quy trình cũ không còn đáp ứng được khi team lớn hơn",
  },
  {
    icon: Puzzle,
    title: "Doanh nghiệp đang dùng nhiều tool rời rạc",
    pain: "Công việc nằm rải rác trên Zalo, email, sheet — mất kiểm soát",
  },
];

const WhoIsThisForSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Lark Consult phù hợp với bạn nếu...
          </h2>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {personas.map((p, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.pain}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Negative Qualifier */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground bg-secondary/50 rounded-xl px-6 py-4 border border-border">
            <span className="font-semibold text-foreground">Chúng tôi chưa phù hợp nếu:</span>{" "}
            doanh nghiệp dưới 5 nhân sự hoặc chưa có quy trình vận hành cơ bản.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
