import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "Sau khi chuẩn hoá quy trình, tôi không còn phải xử lý từng việc nhỏ mỗi ngày. Nhân viên chủ động hơn rất rõ.",
    role: "Chủ phòng tập",
    scale: "20 nhân sự"
  },
  {
    quote: "Trước đây mỗi ngày tôi mất 2 tiếng để kiểm tra báo cáo. Giờ chỉ cần 15 phút buổi sáng là xong.",
    role: "Quản lý vận hành chuỗi F&B",
    scale: "35 nhân sự"
  },
  {
    quote: "Điều khác biệt là họ không ép triển khai toàn bộ. Làm thử ở 1 bộ phận trước, thấy hiệu quả rồi mới mở rộng.",
    role: "Chủ xưởng sản xuất",
    scale: "50 nhân sự"
  }
];

const ReviewSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Doanh nghiệp đã triển khai{" "}
            <span className="text-primary">nói gì?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Phản hồi thực tế từ CEO và quản lý SME
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              {/* Quote text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{review.quote}"
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.role.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{review.role}</p>
                  <p className="text-muted-foreground text-sm">{review.scale}</p>
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
