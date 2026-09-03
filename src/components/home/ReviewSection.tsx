import { useEffect, useRef } from "react";
import khangAvatar from "@/assets/testimonials/khang-pham.png";
import huyAvatar from "@/assets/testimonials/huy-tran.png";
import hungAvatar from "@/assets/testimonials/hung-nguyen.png";

const reviews = [
  {
    quote: "Trước đây sáng nào tôi cũng mở Zalo rồi hỏi từng người xem việc tới đâu. Có hôm mất gần một tiếng mà vẫn sót việc. Bây giờ tôi xem một màn hình khoảng 5 phút, chỉ gọi team khi có mục bị trễ. Nhẹ đầu nhất là mọi người tự cập nhật mà không chờ tôi nhắc.",
    name: "Khang Phạm",
    role: "Founder, agency marketing · 15 nhân sự",
    avatar: khangAvatar,
  },
  {
    quote: "Cái tôi cần không phải thêm một báo cáo đẹp, mà là biết sớm chỗ nào đang lệch. Tuần đầu dùng dashboard, tôi phát hiện một nhóm đơn bị chậm ngay trong ngày thay vì cuối tháng. Từ đó buổi họp vận hành ngắn hơn và đi thẳng vào việc cần xử lý.",
    name: "Huy Trần",
    role: "Giám đốc vận hành, công ty thương mại",
    avatar: huyAvatar,
  },
  {
    quote: "Trước đây tôi nghỉ một ngày là điện thoại đầy tin nhắn hỏi quy trình và xin duyệt. Sau khi đưa công việc lên Lark, đội ngũ biết tìm thông tin và theo dõi trạng thái ở đâu. Tôi vẫn nắm được số chính mỗi ngày nhưng không phải tham gia vào từng việc nhỏ.",
    name: "Hưng Nguyễn",
    role: "CEO, doanh nghiệp dịch vụ · 25 nhân sự",
    avatar: hungAvatar,
  },
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
            <div key={i} className={`card-dark flex h-full flex-col p-7 reveal ${i > 0 ? `reveal-d${i}` : ""}`}>
              <div className="text-[48px] opacity-30 leading-[0.8] mb-4" style={{ color: "#2563EB" }}>"</div>
              <p className="mb-6 flex-1 text-sm italic text-t-secondary" style={{ lineHeight: 1.75 }}>{r.quote}</p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <img src={r.avatar} alt={`Ảnh chân dung ${r.name}`} loading="lazy" decoding="async" className="h-11 w-11 flex-shrink-0 rounded-full object-cover ring-2 ring-white/10" />
                <div><div className="font-bold text-sm text-t-primary">{r.name}</div><div className="mt-0.5 text-xs text-t-secondary">{r.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewSection;
