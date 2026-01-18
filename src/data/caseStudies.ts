// Case Study data types và sample data
// Tuân thủ quy chuẩn Solution Mapping của Lark Consult

export interface CaseStudy {
  id: string;
  slug: string;
  // Metadata
  industry: "retail" | "manufacturing" | "service" | "fitness" | "other";
  industryLabel: string;
  scale: "under10" | "10to30" | "30to100" | "over100";
  scaleLabel: string;
  mainProblem: "task-management" | "department-coordination" | "ceo-reporting" | "onboarding";
  mainProblemLabel: string;
  
  // Content
  title: string;
  summary: string;
  
  // Section 1: Bối cảnh doanh nghiệp
  context: {
    businessType: string;
    industry: string;
    scale: string;
    situation: string;
  };
  
  // Section 2: Vấn đề quen thuộc
  painPoints: string[];
  
  // Section 3: Họ đã từng thử gì
  previousAttempts: string[];
  previousAttemptsResult: string;
  
  // Section 4: Vấn đề gốc rễ (Solution Mapping)
  rootCauses: {
    title: string;
    description: string;
    consequence: string;
  }[];
  
  // Section 5: Giải pháp triển khai
  solution: {
    approach: string;
    steps: {
      title: string;
      description: string;
    }[];
    dailyChanges: {
      before: string;
      after: string;
    };
  };
  
  // Section 6: Kết quả đo được
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  keyInsight: string;
  
  // Section 7: Phù hợp / Không phù hợp
  suitableFor: string[];
  notSuitableFor: string[];
  
  // CTA
  ctaQuestion: string;
}

export const industryOptions = [
  { value: "retail", label: "Bán lẻ" },
  { value: "manufacturing", label: "Sản xuất" },
  { value: "service", label: "Dịch vụ" },
  { value: "fitness", label: "Fitness" },
  { value: "other", label: "Khác" },
];

export const scaleOptions = [
  { value: "under10", label: "< 10 nhân sự" },
  { value: "10to30", label: "10-30 nhân sự" },
  { value: "30to100", label: "30-100 nhân sự" },
  { value: "over100", label: "> 100 nhân sự" },
];

export const problemOptions = [
  { value: "task-management", label: "Quản lý công việc" },
  { value: "department-coordination", label: "Phối hợp phòng ban" },
  { value: "ceo-reporting", label: "Báo cáo cho CEO" },
  { value: "onboarding", label: "Onboarding nhân sự" },
];

// Sample Case Studies theo quy chuẩn Lark Consult
export const sampleCaseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "fitness-sme-10-30-nhan-su",
    industry: "fitness",
    industryLabel: "Fitness",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Vì sao chủ phòng tập lúc nào cũng bận, dù đã có phần mềm?",
    summary: "Phòng tập 10-30 nhân sự đã từng dùng phần mềm quản lý hội viên, nhưng chủ phòng tập vẫn phải xử lý lịch PT thủ công mỗi ngày.",
    context: {
      businessType: "Phòng tập thể hình – yoga – PT",
      industry: "Fitness",
      scale: "10–30 nhân sự (PT, lễ tân, quản lý ca)",
      situation: "Đây là nhóm phòng tập đã vượt qua giai đoạn \"làm cho vui\" nhưng chưa đủ lớn để có bộ máy quản lý chuyên nghiệp."
    },
    painPoints: [
      "Lịch tập, lịch PT vẫn phải hỏi miệng hoặc nhắn Zalo",
      "Doanh thu cuối tháng không chênh nhiều, nhưng không biết rò rỉ ở đâu",
      "Nhân viên chỉ làm khi được nhắc",
      "Chủ phòng tập không dám nghỉ quá 2–3 ngày vì sợ mọi thứ rối lên"
    ],
    previousAttempts: [
      "Phần mềm quản lý hội viên",
      "File Excel theo dõi doanh thu",
      "Nhóm Zalo để giao việc"
    ],
    previousAttemptsResult: "Tool không kết nối với cách vận hành thực tế. Không có ai theo sát việc dùng hàng ngày. Mỗi người làm theo một kiểu. Sau 1–2 tháng, mọi thứ quay lại như cũ.",
    rootCauses: [
      {
        title: "Dữ liệu vận hành bị phân mảnh",
        description: "Lịch PT nằm ở tin nhắn, sổ tay hoặc nhiều file rời. Thông tin hội viên, gói tập, lịch sử tập không liên thông.",
        consequence: "Chủ phòng tập không có một bức tranh tổng thể theo thời gian thực."
      },
      {
        title: "Quy trình làm việc không được chuẩn hoá",
        description: "Lễ tân – PT – quản lý ca mỗi người hiểu công việc theo một cách. Không có định nghĩa rõ: ai làm gì, khi nào, đầu ra là gì.",
        consequence: "Mọi vấn đề đều quay về hỏi chủ phòng tập."
      },
      {
        title: "Không có cơ chế đo lường hiệu quả vận hành",
        description: "Không đo được thời gian xử lý lịch. Không biết một thay đổi có giúp giảm tải hay không.",
        consequence: "Không dám cải tiến vì sợ \"làm xong không hiệu quả\"."
      }
    ],
    solution: {
      approach: "Lark Consult tiếp cận bài toán fitness SME theo hướng solution-driven nhưng không tool-driven.",
      steps: [
        {
          title: "Thiết kế lại quy trình vận hành cốt lõi",
          description: "Tập trung vào 3 luồng chính: Quản lý lịch PT & ca làm việc, Theo dõi tình trạng hội viên, Báo cáo vận hành cho chủ phòng tập."
        },
        {
          title: "Kết nối nền tảng phù hợp",
          description: "Chuẩn hoá lịch PT trên hệ thống. Tự động thông báo lịch cho PT & lễ tân. Ghi nhận trạng thái hội viên theo từng buổi tập."
        },
        {
          title: "Thay đổi cách vận hành hàng ngày",
          description: "Nhân viên xem lịch & nhiệm vụ trực tiếp trên hệ thống. Chủ phòng tập chỉ theo dõi dashboard tổng hợp."
        },
        {
          title: "Đo hiệu quả sau từng giai đoạn",
          description: "Theo dõi: Thời gian xử lý lịch mỗi ngày, Số lần gián đoạn do hỏi lại thông tin, Mức độ phụ thuộc vào chủ phòng tập."
        }
      ],
      dailyChanges: {
        before: "Nhân viên hỏi – chủ phòng tập trả lời",
        after: "Nhân viên xem lịch & nhiệm vụ trực tiếp trên hệ thống. Chủ phòng tập chỉ theo dõi dashboard tổng hợp."
      }
    },
    results: [
      {
        metric: "Giảm thời gian xử lý",
        value: "30-40%",
        description: "Thời gian xử lý lịch và trao đổi nội bộ"
      },
      {
        metric: "Độc lập vận hành",
        value: "Cao hơn",
        description: "Chủ phòng tập không cần theo sát từng ca"
      },
      {
        metric: "Chủ động nhân viên",
        value: "Tăng rõ rệt",
        description: "Nhân viên chủ động hơn vì biết rõ việc cần làm"
      }
    ],
    keyInsight: "Chủ phòng tập bắt đầu rút ra khỏi việc vận hành hàng ngày.",
    suitableFor: [
      "Phòng tập 10–30 nhân sự",
      "Chủ phòng tập muốn giảm phụ thuộc vào bản thân",
      "Sẵn sàng làm thử nhỏ, đo hiệu quả"
    ],
    notSuitableFor: [
      "Muốn cài phần mềm xong là xong",
      "Không có thời gian tham gia vào giai đoạn làm thử"
    ],
    ctaQuestion: "Bạn có đang giống trường hợp này?"
  },
  {
    id: "2",
    slug: "ban-le-30-100-nhan-su",
    industry: "retail",
    industryLabel: "Bán lẻ",
    scale: "30to100",
    scaleLabel: "30-100 nhân sự",
    mainProblem: "ceo-reporting",
    mainProblemLabel: "Báo cáo cho CEO",
    title: "Chuỗi bán lẻ 5 cửa hàng: CEO vẫn phải gọi điện hỏi doanh số mỗi ngày",
    summary: "Chuỗi bán lẻ với 5 cửa hàng, mỗi cửa hàng có quản lý riêng nhưng báo cáo vẫn chậm, CEO không có bức tranh tổng thể.",
    context: {
      businessType: "Chuỗi cửa hàng bán lẻ thời trang",
      industry: "Bán lẻ",
      scale: "30–100 nhân sự, 5 cửa hàng",
      situation: "CEO quản lý từ xa, mỗi cửa hàng có quản lý riêng nhưng báo cáo không đồng bộ."
    },
    painPoints: [
      "Báo cáo doanh số cuối ngày vẫn phải tổng hợp thủ công",
      "Không biết cửa hàng nào đang có vấn đề cho đến khi quá muộn",
      "Mỗi quản lý báo cáo theo format khác nhau",
      "CEO phải gọi điện hỏi để nắm tình hình"
    ],
    previousAttempts: [
      "File Excel chia sẻ qua Google Drive",
      "Nhóm Zalo báo cáo hàng ngày",
      "Phần mềm POS tách biệt theo cửa hàng"
    ],
    previousAttemptsResult: "Dữ liệu nằm rải rác, mất thời gian tổng hợp. CEO không có dashboard thời gian thực.",
    rootCauses: [
      {
        title: "Không có nguồn dữ liệu thống nhất",
        description: "Mỗi cửa hàng dùng cách báo cáo khác nhau. Dữ liệu từ POS không kết nối với báo cáo quản trị.",
        consequence: "CEO mất 1-2 giờ mỗi ngày để tổng hợp thông tin."
      },
      {
        title: "Quy trình báo cáo không được chuẩn hoá",
        description: "Quản lý cửa hàng báo cáo khi nhớ, không có thời điểm và format cố định.",
        consequence: "Thông tin đến chậm, không đầy đủ."
      }
    ],
    solution: {
      approach: "Chuẩn hoá quy trình báo cáo trước, sau đó mới kết nối công cụ.",
      steps: [
        {
          title: "Xác định các chỉ số cần theo dõi",
          description: "Doanh số theo ngày/tuần, tồn kho, chi phí vận hành cơ bản."
        },
        {
          title: "Thiết kế luồng báo cáo chuẩn",
          description: "Quản lý cửa hàng nhập số liệu cuối ngày vào form chuẩn. Dữ liệu tự động cập nhật dashboard tổng hợp."
        },
        {
          title: "Tạo dashboard cho CEO",
          description: "CEO xem được doanh số tất cả cửa hàng theo thời gian thực, không cần gọi điện hỏi."
        }
      ],
      dailyChanges: {
        before: "CEO gọi điện hỏi từng cửa hàng, tổng hợp thủ công",
        after: "CEO mở dashboard, thấy ngay tình hình tất cả cửa hàng"
      }
    },
    results: [
      {
        metric: "Thời gian tổng hợp báo cáo",
        value: "Giảm 80%",
        description: "Từ 1-2 giờ xuống còn 10 phút mỗi ngày"
      },
      {
        metric: "Tốc độ ra quyết định",
        value: "Nhanh hơn",
        description: "CEO phát hiện vấn đề trong ngày thay vì cuối tuần"
      }
    ],
    keyInsight: "CEO có thể quản lý từ xa mà vẫn nắm được tình hình thực tế.",
    suitableFor: [
      "Chuỗi bán lẻ 3-10 cửa hàng",
      "CEO muốn quản lý từ xa hiệu quả",
      "Sẵn sàng chuẩn hoá quy trình báo cáo"
    ],
    notSuitableFor: [
      "Chỉ có 1 cửa hàng",
      "Không muốn thay đổi cách báo cáo hiện tại"
    ],
    ctaQuestion: "Bạn có đang gặp tình huống tương tự?"
  },
  {
    id: "3",
    slug: "san-xuat-10-30-nhan-su",
    industry: "manufacturing",
    industryLabel: "Sản xuất",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "department-coordination",
    mainProblemLabel: "Phối hợp phòng ban",
    title: "Xưởng sản xuất nhỏ: Đơn hàng hay bị chậm vì thông tin không đồng bộ",
    summary: "Xưởng sản xuất 15 nhân sự, đơn hàng thường xuyên bị chậm do phối hợp giữa bộ phận bán hàng, sản xuất và kho không rõ ràng.",
    context: {
      businessType: "Xưởng sản xuất đồ gỗ nội thất",
      industry: "Sản xuất",
      scale: "10–30 nhân sự",
      situation: "Chủ xưởng trực tiếp điều hành, đơn hàng tăng nhưng giao hàng hay bị chậm."
    },
    painPoints: [
      "Đơn hàng mới nhân viên sale nhận nhưng xưởng không biết ngay",
      "Không biết tồn kho nguyên vật liệu đến khi cần sản xuất",
      "Khách hàng hỏi tiến độ, chủ xưởng phải chạy xuống hỏi",
      "Mỗi lần có vấn đề, mọi người đổ lỗi cho nhau"
    ],
    previousAttempts: [
      "Ghi đơn hàng vào sổ",
      "Nhóm Zalo thông báo đơn mới",
      "File Excel theo dõi tiến độ"
    ],
    previousAttemptsResult: "Thông tin bị bỏ sót, không ai chịu trách nhiệm cập nhật. Chủ xưởng vẫn là người kết nối tất cả.",
    rootCauses: [
      {
        title: "Không có luồng thông tin rõ ràng",
        description: "Đơn hàng từ sale đến sản xuất không có quy trình bàn giao. Mỗi người hiểu nhiệm vụ theo cách riêng.",
        consequence: "Thông tin bị mất hoặc chậm trễ giữa các bộ phận."
      },
      {
        title: "Không theo dõi được tiến độ thực tế",
        description: "Không biết đơn hàng đang ở giai đoạn nào. Phát hiện vấn đề khi đã quá deadline.",
        consequence: "Khách hàng không hài lòng, chủ xưởng mệt mỏi."
      }
    ],
    solution: {
      approach: "Thiết kế luồng thông tin từ đơn hàng đến giao hàng, rồi mới kết nối công cụ.",
      steps: [
        {
          title: "Vẽ lại luồng đơn hàng",
          description: "Xác định rõ: Sale nhận đơn → Xác nhận với kho → Chuyển sản xuất → Hoàn thành → Giao hàng."
        },
        {
          title: "Định nghĩa trách nhiệm từng bước",
          description: "Ai làm gì, khi nào phải hoàn thành, output là gì."
        },
        {
          title: "Theo dõi tiến độ trên hệ thống",
          description: "Mỗi đơn hàng có trạng thái rõ ràng. Chủ xưởng xem dashboard thay vì chạy hỏi."
        }
      ],
      dailyChanges: {
        before: "Chủ xưởng chạy hỏi từng bộ phận để biết tiến độ",
        after: "Mở dashboard thấy ngay đơn nào đang ở đâu, có vấn đề gì"
      }
    },
    results: [
      {
        metric: "Đơn hàng giao đúng hạn",
        value: "Tăng 35%",
        description: "Từ 60% lên 95%"
      },
      {
        metric: "Thời gian điều phối",
        value: "Giảm 50%",
        description: "Chủ xưởng không cần chạy hỏi liên tục"
      }
    ],
    keyInsight: "Khi thông tin đồng bộ, mọi người tự biết việc cần làm mà không cần hỏi.",
    suitableFor: [
      "Xưởng sản xuất 10–50 nhân sự",
      "Có vấn đề phối hợp giữa các bộ phận",
      "Chủ xưởng muốn giảm thời gian điều phối"
    ],
    notSuitableFor: [
      "Xưởng 1-2 người, chưa cần quy trình",
      "Không sẵn sàng thay đổi cách làm việc"
    ],
    ctaQuestion: "Xưởng của bạn có gặp tình huống tương tự?"
  }
];
