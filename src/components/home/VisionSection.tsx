import { X, Check } from "lucide-react";

const todayItems = [
  "Sếp mở 5 tab mỗi sáng để check tình hình",
  "Nhân sự báo cáo sai, thiếu, chậm",
  "Phát hiện vấn đề khi đã quá muộn",
  "Họp mới biết team đang làm gì",
];

const futureItems = [
  'Sếp nhắn: "Tuần này sales ra sao?" → AI trả lời ngay',
  "AI tổng hợp từ data thật trong hệ thống",
  "AI chủ động alert khi có bất thường",
  "Hỏi chat lúc 10 giờ đêm cũng có câu trả lời",
];

const VisionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="text-center mb-12">
          <span className="section-tag">Hình dung tương lai</span>
          <h2
            className="font-display font-extrabold mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.2 }}
          >
            Từ quản lý thủ công →{" "}
            <span className="text-primary">AI trả lời thay bạn</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
          {/* Today column */}
          <div className="p-6 md:p-8" style={{ background: "#FFF5F5", borderRight: "1px solid #FECACA" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-destructive flex items-center justify-center">
                <X className="w-3 h-3 text-white" />
              </div>
              <h3 className="font-display font-extrabold text-destructive text-base">
                Hôm nay — không có hệ thống
              </h3>
            </div>
            <ul className="space-y-4">
              {todayItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark2))" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future column */}
          <div className="p-6 md:p-8" style={{ background: "#F0FDF4" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <h3 className="font-display font-extrabold text-success text-base">
                90 ngày sau — có Lark + AI Agent
              </h3>
            </div>
            <ul className="space-y-4">
              {futureItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "hsl(var(--dark2))" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
