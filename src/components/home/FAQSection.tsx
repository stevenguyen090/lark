import { useState, useEffect, useRef } from "react";
const faqs = [
  { q: "Tôi không rành công nghệ, có dùng được Lark không?", a: "Lark được thiết kế cho người dùng phổ thông. Chúng tôi training đội ngũ từ đầu đến khi thành thạo." },
  { q: "Triển khai mất bao lâu?", a: "Thường 4–6 tuần cho hệ thống cơ bản đầy đủ. Tuỳ quy mô và độ phức tạp." },
  { q: "Sau khi triển khai xong có được hỗ trợ tiếp không?", a: "Có. Đồng hành liên tục cho đến khi doanh nghiệp vận hành ổn định." },
  { q: "Chi phí thực tế là bao nhiêu?", a: "Từ 149.000đ/giờ. Dự án trung bình 40–80 giờ. Minh bạch hoàn toàn." },
  { q: "Lark Consult khác gì so với các bên tư vấn Lark khác?", a: "Chúng tôi xây hệ thống đủ chuẩn để AI Agent chạy — tầng giá trị mà các bên khác không có." },
  { q: "AI Agent hoạt động như thế nào?", a: "Tích hợp trực tiếp vào Lark Messenger. Lãnh đạo hỏi bằng ngôn ngữ tự nhiên, nhận câu trả lời từ dữ liệu thật." },
  { q: "Khi nào tôi cần thanh toán?", a: "Bạn chỉ thanh toán sau khi nghiệm thu thành công từng giai đoạn đúng yêu cầu đã thống nhất." },
];
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
  }, []);
  return (
    <section id="faq" ref={ref} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />FAQ</div>
        <h2 className="heading-h2 reveal">Những thắc mắc <span className="kw">trước khi bắt đầu</span></h2>
        <div className="mt-12 max-w-[740px] reveal">
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left bg-transparent border-none py-5 flex items-center justify-between gap-4 text-base font-semibold transition-colors cursor-pointer" style={{ color: openIdx === i ? "#F0F6FF" : "#94A3B8", fontFamily: "Inter, system-ui, sans-serif" }}>
                {faq.q}
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all" style={{ background: openIdx === i ? "#2563EB" : "#132540", color: openIdx === i ? "white" : "#4E6380", transform: openIdx === i ? "rotate(45deg)" : "none" }}>+</div>
              </button>
              <div className="overflow-hidden transition-all" style={{ maxHeight: openIdx === i ? 220 : 0, transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                <div className="pb-5 text-sm text-t-secondary" style={{ lineHeight: 1.75 }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
