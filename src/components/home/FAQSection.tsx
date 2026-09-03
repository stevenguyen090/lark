import { useState, useEffect, useRef } from "react";
const faqs = [
  { q: "Tôi không rành công nghệ, có dùng được Lark không?", a: "Lark được thiết kế cho người dùng phổ thông, không cần biết lập trình. Chúng tôi hướng dẫn đội ngũ từ những thao tác đầu tiên và tiếp tục hỗ trợ cho đến khi mọi người sử dụng ổn định." },
  { q: "Triển khai mất bao lâu?", a: "Thường 4–6 tuần cho hệ thống cơ bản đầy đủ. Tuỳ quy mô và độ phức tạp của doanh nghiệp, có thể nhanh hơn hoặc lâu hơn. Chúng tôi sẽ ước tính cụ thể sau buổi tư vấn miễn phí đầu tiên." },
  { q: "Sau khi triển khai xong có được hỗ trợ tiếp không?", a: "Có. Gói 2 và 3 đều bao gồm đồng hành liên tục cho đến khi doanh nghiệp vận hành ổn định — không có thời hạn cố định. Chúng tôi không kết thúc dự án khi hết giờ, mà khi hệ thống thực sự hoạt động tốt." },
  { q: "Chi phí thực tế là bao nhiêu?", a: "Tính theo giờ thực tế làm việc, từ 149.000đ/giờ. Dự án trung bình 40–80 giờ tuỳ quy mô. Bạn chỉ trả cho thời gian thực tế, minh bạch hoàn toàn. Đặt lịch tư vấn để nhận ước tính cụ thể." },
  { q: "Lark Consult khác gì so với các bên tư vấn Lark khác?", a: "Chúng tôi không dừng ở việc cài đặt công cụ. Lark Consult cùng doanh nghiệp chuẩn hóa quy trình, trách nhiệm và dữ liệu vận hành; sau đó thiết lập báo cáo quản trị và cảnh báo phù hợp với cách lãnh đạo ra quyết định. Chúng tôi tiếp tục đồng hành cho đến khi hệ thống thực sự được đội ngũ sử dụng ổn định." },
  { q: "Trợ lý AI tổng hợp báo cáo trong Gói 3 hoạt động như thế nào?", a: "Trợ lý lấy số liệu đã được đối soát trong Lark để tự động tạo báo cáo theo ngày, tuần hoặc tháng. Báo cáo nêu rõ kết quả chính, biến động đáng chú ý và việc cần xử lý; lãnh đạo cũng có thể hỏi thêm bằng ngôn ngữ thông thường mà không phải chờ nhân sự gom số liệu." },
  { q: "Khi nào tôi cần thanh toán?", a: "Ngay từ đầu, hai bên thống nhất kế hoạch, kết quả bàn giao và tiêu chí nghiệm thu cho từng giai đoạn. Doanh nghiệp thanh toán sau khi từng giai đoạn đạt đúng yêu cầu đã thống nhất, nên luôn biết mình đang trả cho kết quả nào." },
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
              <button
                id={`faq-button-${i}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full min-h-11 text-left bg-transparent border-none py-5 flex items-center justify-between gap-4 text-base font-semibold transition-colors cursor-pointer"
                style={{ color: openIdx === i ? "#F0F6FF" : "#94A3B8", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {faq.q}
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all" style={{ background: openIdx === i ? "#2563EB" : "#132540", color: openIdx === i ? "white" : "#4E6380", transform: openIdx === i ? "rotate(45deg)" : "none" }}>+</div>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                aria-hidden={openIdx !== i}
                className="overflow-hidden transition-all"
                style={{ maxHeight: openIdx === i ? 220 : 0, visibility: openIdx === i ? "visible" : "hidden", transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
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
