import { useEffect, useRef } from "react";
const reviews = [
  { quote: "Trước mỗi sáng tôi mất 1 tiếng chỉ để check xem ai đang làm gì. Sau 6 tuần triển khai, tôi chỉ nhìn dashboard 5 phút là nắm tất cả. Team chủ động hơn rõ rệt.", name: "Khang Phạm", role: "Founder – Agency Marketing · 15 nhân sự", color: "#2563EB", initial: "K" },
  { quote: "Dashboard giúp chúng tôi nhìn rõ tình hình vận hành mỗi ngày thay vì đợi cuối tháng. Quan trọng hơn là phát hiện vấn đề sớm hơn và xử lý kịp thời.", name: "Huy Trần", role: "Giám đốc vận hành – Công ty thương mại", color: "#10B981", initial: "H" },
  { quote: "Quan trọng nhất là đội ngũ chủ động hơn, không còn phụ thuộc quá nhiều vào lãnh đạo. Sau 3 tháng, chúng tôi giảm gần 40% thời gian xử lý công việc hàng ngày.", name: "Hưng Nguyễn", role: "CEO – Doanh nghiệp dịch vụ · 25 nhân sự", color: "#F59E0B", initial: "H" },
];
const ReviewSection = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
  }, []);
  return (
    <section ref={ref} className="section-padding-sm">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Khách hàng nói gì</div>
        <h2 className="heading-h2 reveal">Sau khi <span className="kw">triển khai hệ thống</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {reviews.map((r, i) => (
            <div key={i} className={`card-dark p-7 reveal ${i > 0 ? `reveal-d${i}` : ""}`}>
              <div className="text-[48px] opacity-30 leading-[0.8] mb-4" style={{ color: "#2563EB" }}>"</div>
              <p className="text-sm text-t-secondary mb-5 italic" style={{ lineHeight: 1.75 }}>{r.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center font-extrabold text-base text-white flex-shrink-0" style={{ background: r.color }}>{r.initial}</div>
                <div><div className="font-bold text-sm text-t-primary">{r.name}</div><div className="text-xs text-t-tertiary mt-0.5">{r.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewSection;
