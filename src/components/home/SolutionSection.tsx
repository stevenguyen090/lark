import { useEffect, useRef } from "react";

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Cách chúng tôi làm việc</div>
        <h2 className="heading-h2 reveal">2 tầng — từ nền tảng đến <span className="kw">AI vận hành</span></h2>
        <p className="body-lg reveal mt-4" style={{ maxWidth: 560 }}>
          Không phải cài tool rồi xong. Chúng tôi xây đủ 2 tầng để AI Agent thực sự hoạt động đúng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Layer 1 */}
          <div className="card-dark p-8 relative overflow-hidden reveal">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #2563EB, #3B82F6)" }} />
            <div className="text-sm font-semibold text-t-tertiary mb-4">Tầng 01 — Nền tảng · 4–6 tuần</div>
            <div className="heading-h3 mb-3" style={{ lineHeight: 1.3 }}>Chuẩn hoá vận hành & triển khai Lark</div>
            <p className="text-sm text-t-secondary mb-6" style={{ lineHeight: 1.7 }}>
              Rà soát quy trình, xác định điểm nghẽn, thiết kế hệ thống làm việc tập trung trên Lark với task management, tài liệu và dashboard.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Phân tích mô hình vận hành & điểm nghẽn",
                "Thiết kế quy trình & phân công trách nhiệm rõ ràng",
                "Triển khai Lark: task, docs, dashboard, tích hợp tool",
                "Training đội ngũ cho đến khi vận hành ổn định",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(37,99,235,0.15)", color: "#3B82F6" }}>✓</div>
                  {step}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[7px] p-3 px-4 rounded-[10px] text-sm font-semibold text-g-400" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
              ✓ Đội ngũ chủ động — lãnh đạo nắm tình hình mà không cần họp
            </div>
          </div>

          {/* Layer 2 */}
          <div className="card-dark p-8 relative overflow-hidden reveal reveal-d2">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #06B6D4, #34D399)" }} />
            <div className="text-sm font-semibold text-t-tertiary mb-4">Tầng 02 — AI Agent · Sau Tầng 1</div>
            <div className="heading-h3 mb-3" style={{ lineHeight: 1.3 }}>Kích hoạt AI Agent trên nền Lark</div>
            <p className="text-sm text-t-secondary mb-6" style={{ lineHeight: 1.7 }}>
              Khi data đã sạch và có cấu trúc, AI Agent có thể đọc toàn bộ hệ thống và trả lời bất kỳ câu hỏi nào của lãnh đạo bằng ngôn ngữ tự nhiên.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Tích hợp AI Agent vào Lark Messenger",
                "Cấu hình knowledge base từ tài liệu nội bộ",
                "Thiết lập alert tự động khi có bất thường",
                "Training AI theo đặc thù vận hành của doanh nghiệp",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(6,182,212,0.15)", color: "#22D3EE" }}>✓</div>
                  {step}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[7px] p-3 px-4 rounded-[10px] text-sm font-semibold text-g-400" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
              ✓ Sếp hỏi 1 câu — AI trả lời tức thì từ dữ liệu thật
            </div>
          </div>

          {/* Connector */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-3 p-4 px-6 rounded-[10px] text-sm text-t-secondary reveal" style={{ background: "#0E1E35", border: "1px solid rgba(37,99,235,0.35)", lineHeight: 1.6, marginTop: -8, textAlign: "center" }}>
            <span>🔗</span>
            <span><strong className="text-c-400">Tầng 1 là điều kiện bắt buộc của Tầng 2</strong> — AI chỉ thông minh khi data phía dưới đã sạch và có cấu trúc. Đây là lý do các đơn vị chỉ cài AI mà bỏ qua nền tảng thường thất bại.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
