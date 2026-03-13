import { useEffect, useRef } from "react";

const beforeItems = [
  "Giao việc qua Zalo, chat, email — dễ sót, khó kiểm soát",
  "Nhân sự làm chăm chỉ nhưng không có số liệu đo hiệu quả",
  "Báo cáo cuối tháng mới có — phát hiện vấn đề khi đã quá muộn",
  "Đội ngũ không biết ưu tiên gì, chờ sếp chỉ đạo từng bước",
];
const afterItems = [
  "Công việc và thông tin tập trung trong 1 nền tảng duy nhất",
  "Dashboard realtime — AI alert khi có bất thường trước khi sếp hỏi",
  "Thông tin có ngay trong ngày, phát hiện và xử lý vấn đề kịp thời",
  "Nhân sự biết rõ việc mình cần làm — AI trả lời quy trình 24/7",
];

const BeforeAfterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }), { threshold: 0.08 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding-sm">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Trước và sau</div>
        <h2 className="heading-h2 reveal">Sự thay đổi khi có <span className="kw">hệ thống vận hành rõ ràng</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 rounded-[20px] overflow-hidden reveal" style={{ border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 24px 60px rgba(0,0,0,0.3)" }}>
          <div className="p-8" style={{ background: "linear-gradient(160deg, rgba(239,68,68,0.06), #0A1628)", borderRight: "1px solid rgba(255,255,255,0.09)" }}>
            <div className="flex items-center gap-2 font-bold text-base mb-6 text-r-400"><span>✕</span> Khi chưa có hệ thống</div>
            <div className="flex flex-col gap-4">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-t-secondary" style={{ lineHeight: 1.6 }}>
                  <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5 bg-r-500 text-white">✕</div>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="p-8" style={{ background: "linear-gradient(160deg, rgba(16,185,129,0.06), #0A1628)" }}>
            <div className="flex items-center gap-2 font-bold text-base mb-6 text-g-400"><span>✓</span> Sau khi có Lark + AI Agent</div>
            <div className="flex flex-col gap-4">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-t-secondary" style={{ lineHeight: 1.6 }}>
                  <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5 bg-g-500 text-white">✓</div>{item}
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
