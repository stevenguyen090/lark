import { useEffect, useRef } from "react";

const personas = [
  { num: "01", title: "CEO / Founder — 10 đến 50 nhân sự", desc: "Bị kéo vào quá nhiều việc vặt, không còn thời gian làm chiến lược. Mọi quyết định đều phải chờ bạn duyệt." },
  { num: "02", title: "Giám đốc vận hành / COO", desc: "Khó theo dõi tiến độ và hiệu suất đội ngũ theo thời gian thực. Báo cáo đến chậm, vấn đề phát hiện muộn." },
  { num: "03", title: "Chủ doanh nghiệp đang scale", desc: "Quy trình cũ dùng Zalo + Excel không còn đáp ứng được khi team lớn hơn. Cần hệ thống mới bài bản hơn." },
  { num: "04", title: "Doanh nghiệp dùng nhiều tool rời rạc", desc: "Dữ liệu nằm rải rác trên Zalo, sheet, pancake,... — thông tin mất kiểm soát, phối hợp khó khăn." },
];

const WhoIsThisForSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }), { threshold: 0.08 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="for" ref={sectionRef} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Đối tượng phù hợp</div>
        <h2 className="heading-h2 reveal">Lark Consult phù hợp với bạn <span className="kw">nếu...</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {personas.map((p, i) => (
            <div key={p.num} className={`card-dark p-6 flex gap-4 items-start reveal ${i > 0 ? `reveal-d${i}` : ""}`}>
              <div className="text-sm font-semibold text-b-500 opacity-60 px-[7px] py-1 rounded-md flex-shrink-0 mt-0.5" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>{p.num}</div>
              <div>
                <div className="heading-h3 mb-2" style={{ lineHeight: 1.3 }}>{p.title}</div>
                <div className="text-sm text-t-secondary" style={{ lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 px-5 rounded-[10px] text-sm text-t-secondary reveal" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", lineHeight: 1.6 }}>
          <strong className="text-r-400">Chưa phù hợp nếu:</strong> doanh nghiệp dưới 5 nhân sự hoặc chưa có quy trình vận hành cơ bản nào.
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
