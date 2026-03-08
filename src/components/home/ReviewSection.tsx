import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "Sau 3 tháng triển khai, chúng tôi giảm gần 40% thời gian xử lý công việc. CEO không còn phải duyệt từng task nhỏ.",
    name: "Khang Phạm",
    role: "Founder",
    company: "Agency Marketing",
  },
  {
    quote: "Hệ thống dashboard giúp chúng tôi nhìn rõ tình hình vận hành mỗi ngày thay vì đợi cuối tháng.",
    name: "Huy Trần",
    role: "Giám đốc vận hành",
    company: "Công ty thương mại",
  },
  {
    quote: "Quan trọng nhất là đội ngũ chủ động hơn, không còn phụ thuộc quá nhiều vào lãnh đạo.",
    name: "Hưng Nguyễn",
    role: "CEO",
    company: "Doanh nghiệp dịch vụ",
  },
];

const ReviewSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Khách hàng nói gì{" "}
            <span className="text-primary">sau khi triển khai</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{review.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.role.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">— {review.role}</p>
                  <p className="text-muted-foreground text-sm">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
