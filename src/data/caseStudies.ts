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
  // ============================================
  // FITNESS (6 bài)
  // ============================================
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
    slug: "fitness-chuoi-3-co-so-phoi-hop-kem",
    industry: "fitness",
    industryLabel: "Fitness",
    scale: "30to100",
    scaleLabel: "30-100 nhân sự",
    mainProblem: "department-coordination",
    mainProblemLabel: "Phối hợp phòng ban",
    title: "Chuỗi phòng tập 3 cơ sở: Mỗi nơi vận hành một kiểu",
    summary: "Chuỗi 3 phòng tập với 40 nhân sự, mỗi cơ sở tự quyết cách làm việc, chủ không nắm được tình hình thực tế.",
    context: {
      businessType: "Chuỗi phòng tập gym – yoga",
      industry: "Fitness",
      scale: "30–100 nhân sự, 3 cơ sở",
      situation: "Chủ chuỗi muốn mở rộng nhưng không kiểm soát được chất lượng vận hành từng cơ sở."
    },
    painPoints: [
      "Mỗi cơ sở có cách quản lý lịch PT khác nhau",
      "Không biết cơ sở nào đang hoạt động tốt, cơ sở nào có vấn đề",
      "Nhân sự giữa các cơ sở không chia sẻ kinh nghiệm",
      "Chủ chuỗi phải đến từng nơi mới nắm được tình hình"
    ],
    previousAttempts: [
      "Mỗi cơ sở dùng phần mềm riêng",
      "Họp online hàng tuần để báo cáo",
      "File Excel tổng hợp cuối tháng"
    ],
    previousAttemptsResult: "Thông tin không đồng nhất, so sánh hiệu quả giữa các cơ sở rất khó. Chủ chuỗi mất nhiều thời gian tổng hợp.",
    rootCauses: [
      {
        title: "Không có quy trình chuẩn xuyên suốt chuỗi",
        description: "Mỗi quản lý cơ sở làm theo cách riêng, không có chuẩn chung.",
        consequence: "Chất lượng dịch vụ không đồng đều, khó nhân rộng mô hình."
      },
      {
        title: "Dữ liệu không liên thông giữa các cơ sở",
        description: "Thông tin hội viên, doanh thu, lịch PT nằm rải rác ở từng nơi.",
        consequence: "Không có bức tranh toàn chuỗi để ra quyết định."
      }
    ],
    solution: {
      approach: "Chuẩn hoá quy trình vận hành cho toàn chuỗi, sau đó kết nối dữ liệu về một nơi.",
      steps: [
        {
          title: "Định nghĩa quy trình chuẩn cho chuỗi",
          description: "Thống nhất cách xếp lịch PT, chăm sóc hội viên, báo cáo doanh thu cho tất cả cơ sở."
        },
        {
          title: "Triển khai thử tại 1 cơ sở",
          description: "Chọn cơ sở có quản lý sẵn sàng nhất, chạy thử 4 tuần, đo hiệu quả."
        },
        {
          title: "Nhân rộng và kết nối dữ liệu",
          description: "Áp dụng quy trình đã kiểm chứng cho các cơ sở còn lại. Tạo dashboard tổng hợp cho chủ chuỗi."
        }
      ],
      dailyChanges: {
        before: "Chủ chuỗi phải đến từng cơ sở để nắm tình hình",
        after: "Mở dashboard thấy ngay hiệu quả vận hành của tất cả cơ sở"
      }
    },
    results: [
      {
        metric: "Thời gian quản lý chuỗi",
        value: "Giảm 60%",
        description: "Không cần đến từng cơ sở để kiểm tra"
      },
      {
        metric: "Chất lượng dịch vụ",
        value: "Đồng đều hơn",
        description: "Cùng quy trình, cùng tiêu chuẩn"
      }
    ],
    keyInsight: "Muốn mở rộng chuỗi, trước tiên phải chuẩn hoá cách vận hành.",
    suitableFor: [
      "Chuỗi phòng tập 2-5 cơ sở",
      "Chủ chuỗi muốn quản lý từ xa hiệu quả",
      "Có kế hoạch mở rộng thêm cơ sở"
    ],
    notSuitableFor: [
      "Chỉ có 1 cơ sở đơn lẻ",
      "Không sẵn sàng thay đổi cách làm việc hiện tại"
    ],
    ctaQuestion: "Chuỗi của bạn có gặp vấn đề tương tự?"
  },
  {
    id: "3",
    slug: "fitness-studio-yoga-onboarding",
    industry: "fitness",
    industryLabel: "Fitness",
    scale: "under10",
    scaleLabel: "< 10 nhân sự",
    mainProblem: "onboarding",
    mainProblemLabel: "Onboarding nhân sự",
    title: "Studio yoga nhỏ: Nhân viên mới mất 3 tuần mới làm việc được",
    summary: "Studio yoga 8 nhân sự, mỗi lần tuyển người mới phải đào tạo lại từ đầu, mất nhiều thời gian của chủ studio.",
    context: {
      businessType: "Studio yoga chuyên biệt",
      industry: "Fitness",
      scale: "Dưới 10 nhân sự",
      situation: "Chủ studio kiêm nhiệm nhiều vai trò, không có thời gian đào tạo nhân viên mới bài bản."
    },
    painPoints: [
      "Mỗi nhân viên mới phải được chủ studio đào tạo trực tiếp",
      "Không có tài liệu hướng dẫn công việc rõ ràng",
      "Nhân viên cũ không biết cách training cho nhân viên mới",
      "Chất lượng phục vụ không đồng đều giữa các nhân viên"
    ],
    previousAttempts: [
      "Kèm cặp trực tiếp 1-1",
      "Ghi chú trong sổ tay",
      "Nhắn Zalo khi cần hướng dẫn"
    ],
    previousAttemptsResult: "Mất nhiều thời gian của chủ studio. Nhân viên mới vẫn hay hỏi lại. Khi nhân viên cũ nghỉ, kiến thức cũng mất theo.",
    rootCauses: [
      {
        title: "Không có quy trình onboarding chuẩn",
        description: "Mỗi lần tuyển người mới, phải đào tạo từ đầu theo cách ngẫu nhiên.",
        consequence: "Chủ studio mất nhiều thời gian, nhân viên mới học không có hệ thống."
      },
      {
        title: "Kiến thức không được tài liệu hoá",
        description: "Kinh nghiệm làm việc nằm trong đầu từng người, không được ghi lại.",
        consequence: "Khi có người nghỉ, phải xây dựng lại từ đầu."
      }
    ],
    solution: {
      approach: "Tài liệu hoá quy trình làm việc và tạo checklist onboarding cho nhân viên mới.",
      steps: [
        {
          title: "Ghi nhận quy trình hiện tại",
          description: "Phỏng vấn nhân viên giỏi nhất, ghi lại cách họ làm việc hàng ngày."
        },
        {
          title: "Tạo checklist onboarding",
          description: "Liệt kê các bước nhân viên mới cần hoàn thành trong 2 tuần đầu."
        },
        {
          title: "Triển khai và cải tiến",
          description: "Áp dụng cho nhân viên mới tiếp theo, thu thập phản hồi, cập nhật quy trình."
        }
      ],
      dailyChanges: {
        before: "Chủ studio kèm cặp nhân viên mới 2-3 tuần",
        after: "Nhân viên mới tự học theo checklist, chủ studio chỉ hỗ trợ khi cần"
      }
    },
    results: [
      {
        metric: "Thời gian onboarding",
        value: "Giảm 50%",
        description: "Từ 3 tuần xuống còn 1.5 tuần"
      },
      {
        metric: "Thời gian của chủ studio",
        value: "Giảm 70%",
        description: "Không cần kèm cặp liên tục"
      }
    ],
    keyInsight: "Tài liệu hoá là bước đầu để nhân rộng mà không cần chủ doanh nghiệp can thiệp.",
    suitableFor: [
      "Studio nhỏ dưới 10 người",
      "Hay tuyển nhân viên mới",
      "Chủ studio muốn giảm thời gian đào tạo"
    ],
    notSuitableFor: [
      "Nhân sự rất ổn định, ít thay đổi",
      "Không sẵn sàng đầu tư thời gian ban đầu để tài liệu hoá"
    ],
    ctaQuestion: "Studio của bạn có mất nhiều thời gian đào tạo nhân viên mới?"
  },
  {
    id: "4",
    slug: "fitness-gym-bao-cao-doanh-thu",
    industry: "fitness",
    industryLabel: "Fitness",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "ceo-reporting",
    mainProblemLabel: "Báo cáo cho CEO",
    title: "Gym 20 nhân sự: Chủ gym không biết doanh thu thực tế đến cuối tháng",
    summary: "Phòng gym 20 nhân sự, chủ gym chỉ biết doanh thu khi kế toán tổng hợp cuối tháng, không phát hiện được vấn đề kịp thời.",
    context: {
      businessType: "Phòng gym kết hợp PT",
      industry: "Fitness",
      scale: "10–30 nhân sự",
      situation: "Chủ gym muốn nắm tình hình kinh doanh hàng ngày nhưng dữ liệu luôn chậm."
    },
    painPoints: [
      "Doanh thu hàng ngày không được ghi nhận đầy đủ",
      "Kế toán tổng hợp cuối tháng mới có số liệu",
      "Không biết gói tập nào bán chạy, gói nào ế",
      "Phát hiện vấn đề khi đã quá muộn để can thiệp"
    ],
    previousAttempts: [
      "Nhờ lễ tân ghi sổ bán hàng",
      "File Excel kế toán tổng hợp",
      "Hỏi miệng nhân viên cuối ngày"
    ],
    previousAttemptsResult: "Số liệu không chính xác, thường xuyên bị bỏ sót. Chủ gym không tin tưởng được dữ liệu.",
    rootCauses: [
      {
        title: "Không có quy trình ghi nhận doanh thu chuẩn",
        description: "Mỗi nhân viên ghi theo cách riêng, không có thời điểm và format cố định.",
        consequence: "Dữ liệu thiếu sót, không đáng tin cậy."
      },
      {
        title: "Không có báo cáo tự động",
        description: "Phải tổng hợp thủ công, mất thời gian và dễ sai sót.",
        consequence: "Chủ gym không có thông tin kịp thời để ra quyết định."
      }
    ],
    solution: {
      approach: "Chuẩn hoá quy trình ghi nhận doanh thu, tạo báo cáo tự động cho chủ gym.",
      steps: [
        {
          title: "Định nghĩa quy trình bán hàng",
          description: "Ai nhập dữ liệu, khi nào, thông tin gì cần ghi."
        },
        {
          title: "Tạo form nhập liệu đơn giản",
          description: "Lễ tân nhập doanh thu ngay khi có giao dịch, dữ liệu tự động cập nhật."
        },
        {
          title: "Thiết lập báo cáo tự động",
          description: "Chủ gym nhận báo cáo doanh thu hàng ngày qua tin nhắn."
        }
      ],
      dailyChanges: {
        before: "Chờ cuối tháng mới biết doanh thu, phát hiện vấn đề quá muộn",
        after: "Mỗi ngày nhận báo cáo doanh thu, phát hiện xu hướng sớm"
      }
    },
    results: [
      {
        metric: "Tốc độ có thông tin",
        value: "Từ 30 ngày xuống 1 ngày",
        description: "Báo cáo doanh thu realtime"
      },
      {
        metric: "Độ chính xác dữ liệu",
        value: "Tăng 95%",
        description: "Nhập liệu có quy trình chuẩn"
      }
    ],
    keyInsight: "Muốn quản lý được phải đo lường được. Đo lường cần có quy trình.",
    suitableFor: [
      "Gym 10-30 nhân sự",
      "Chủ gym muốn nắm số liệu hàng ngày",
      "Đã có lễ tân/nhân viên bán hàng"
    ],
    notSuitableFor: [
      "Gym mới mở, chưa có doanh thu ổn định",
      "Không có nhân viên để nhập liệu"
    ],
    ctaQuestion: "Bạn có đang chờ đến cuối tháng mới biết tình hình kinh doanh?"
  },
  {
    id: "5",
    slug: "fitness-pt-freelance-quan-ly-lich",
    industry: "fitness",
    industryLabel: "Fitness",
    scale: "under10",
    scaleLabel: "< 10 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "PT freelance: Khách hẹn lịch qua Zalo, hay bị trùng hoặc quên",
    summary: "PT tự do với 5-7 học viên/ngày, nhận lịch qua Zalo dẫn đến trùng lịch, quên lịch, khách không hài lòng.",
    context: {
      businessType: "Personal Trainer tự do",
      industry: "Fitness",
      scale: "Cá nhân hoặc nhóm nhỏ dưới 10 người",
      situation: "PT muốn tăng số lượng học viên nhưng quản lý lịch ngày càng phức tạp."
    },
    painPoints: [
      "Khách nhắn Zalo đặt lịch, hay bị bỏ sót tin nhắn",
      "Trùng lịch giữa các học viên",
      "Khách huỷ không báo trước, mất buổi",
      "Cuối tháng không nhớ đã dạy bao nhiêu buổi"
    ],
    previousAttempts: [
      "Ghi lịch vào điện thoại",
      "Nhớ trong đầu",
      "Nhờ khách nhắc trước 1 ngày"
    ],
    previousAttemptsResult: "Vẫn bị trùng lịch, quên lịch. Khách không hài lòng vì phải nhắc lại.",
    rootCauses: [
      {
        title: "Không có hệ thống đặt lịch tập trung",
        description: "Lịch nằm rải rác: Zalo, điện thoại, trong đầu.",
        consequence: "Dễ bị trùng, bỏ sót, không có tổng quan."
      },
      {
        title: "Không có cơ chế nhắc lịch tự động",
        description: "Phải tự nhớ hoặc nhờ khách nhắc.",
        consequence: "Mất buổi khi quên, khách không hài lòng."
      }
    ],
    solution: {
      approach: "Tạo hệ thống đặt lịch đơn giản với thông báo tự động.",
      steps: [
        {
          title: "Tập trung lịch vào một nơi",
          description: "Tất cả lịch tập được ghi nhận trên một hệ thống duy nhất."
        },
        {
          title: "Thiết lập thông báo tự động",
          description: "PT và học viên đều nhận thông báo trước buổi tập."
        },
        {
          title: "Theo dõi số buổi đã tập",
          description: "Cuối tháng có báo cáo tổng hợp số buổi."
        }
      ],
      dailyChanges: {
        before: "Check Zalo liên tục, sợ bỏ sót lịch",
        after: "Mở app thấy ngay lịch trong ngày, học viên tự nhận thông báo"
      }
    },
    results: [
      {
        metric: "Tỷ lệ trùng/quên lịch",
        value: "Giảm 90%",
        description: "Có hệ thống nhắc tự động"
      },
      {
        metric: "Sự hài lòng của khách",
        value: "Tăng rõ rệt",
        description: "Không cần nhắc lại, chuyên nghiệp hơn"
      }
    ],
    keyInsight: "Chuyên nghiệp hoá cách làm việc giúp tăng uy tín và giữ chân khách.",
    suitableFor: [
      "PT freelance có từ 5 học viên trở lên",
      "Muốn tăng số lượng khách",
      "Sẵn sàng thay đổi cách quản lý lịch"
    ],
    notSuitableFor: [
      "Chỉ có 1-2 học viên cố định",
      "Không muốn dùng công nghệ"
    ],
    ctaQuestion: "Bạn có hay bị trùng lịch hoặc quên buổi tập?"
  },
  {
    id: "6",
    slug: "fitness-chuoi-phong-tap-hoi-vien",
    industry: "fitness",
    industryLabel: "Fitness",
    scale: "over100",
    scaleLabel: "> 100 nhân sự",
    mainProblem: "department-coordination",
    mainProblemLabel: "Phối hợp phòng ban",
    title: "Chuỗi phòng tập lớn: Hội viên than phiền vì thông tin không đồng bộ giữa các cơ sở",
    summary: "Chuỗi 5 phòng tập với hơn 100 nhân sự, hội viên sử dụng gói tập liên thông nhưng thông tin không đồng bộ giữa các cơ sở.",
    context: {
      businessType: "Chuỗi phòng tập gym cao cấp",
      industry: "Fitness",
      scale: "Hơn 100 nhân sự, 5 cơ sở",
      situation: "Chuỗi đã có hệ thống nhưng dữ liệu hội viên không liên thông, gây khó chịu cho khách."
    },
    painPoints: [
      "Hội viên tập cơ sở A, sang cơ sở B thông tin không có",
      "Lễ tân phải gọi qua cơ sở khác để xác nhận gói tập",
      "Khiếu nại về việc bị tính nhầm buổi tập",
      "Không theo dõi được hội viên nào sắp hết hạn để gia hạn"
    ],
    previousAttempts: [
      "Mỗi cơ sở dùng phần mềm riêng",
      "Đồng bộ thủ công cuối ngày qua Excel",
      "Lễ tân gọi điện xác nhận chéo"
    ],
    previousAttemptsResult: "Mất thời gian, vẫn bị sai sót. Khách hàng không hài lòng.",
    rootCauses: [
      {
        title: "Hệ thống dữ liệu không liên thông",
        description: "Mỗi cơ sở là một \"ốc đảo\" dữ liệu riêng.",
        consequence: "Không có nguồn dữ liệu duy nhất và chính xác."
      },
      {
        title: "Quy trình đồng bộ thủ công",
        description: "Phụ thuộc vào con người để cập nhật, dễ bỏ sót.",
        consequence: "Dữ liệu luôn bị chậm và không đáng tin cậy."
      }
    ],
    solution: {
      approach: "Kết nối dữ liệu hội viên về một nơi, cập nhật realtime giữa các cơ sở.",
      steps: [
        {
          title: "Audit hệ thống hiện tại",
          description: "Đánh giá các phần mềm đang dùng, khả năng kết nối."
        },
        {
          title: "Thiết kế luồng dữ liệu liên thông",
          description: "Xác định dữ liệu cần đồng bộ, tần suất cập nhật."
        },
        {
          title: "Triển khai và đào tạo",
          description: "Kết nối hệ thống, đào tạo lễ tân sử dụng."
        }
      ],
      dailyChanges: {
        before: "Lễ tân gọi điện xác nhận, khách phải chờ",
        after: "Quét thẻ là có thông tin ngay, phục vụ nhanh chóng"
      }
    },
    results: [
      {
        metric: "Thời gian xác nhận hội viên",
        value: "Từ 5 phút xuống 5 giây",
        description: "Thông tin có sẵn realtime"
      },
      {
        metric: "Khiếu nại của khách",
        value: "Giảm 80%",
        description: "Không còn bị tính nhầm buổi"
      }
    ],
    keyInsight: "Quy mô càng lớn, việc liên thông dữ liệu càng quan trọng.",
    suitableFor: [
      "Chuỗi phòng tập từ 3 cơ sở trở lên",
      "Có gói tập liên thông giữa các cơ sở",
      "Đang gặp khiếu nại từ hội viên"
    ],
    notSuitableFor: [
      "Mỗi cơ sở hoạt động độc lập",
      "Không có ngân sách cho việc nâng cấp hệ thống"
    ],
    ctaQuestion: "Chuỗi của bạn có gặp vấn đề đồng bộ dữ liệu?"
  },

  // ============================================
  // BÁN LẺ (6 bài)
  // ============================================
  {
    id: "7",
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
    id: "8",
    slug: "ban-le-ton-kho-khong-chinh-xac",
    industry: "retail",
    industryLabel: "Bán lẻ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Cửa hàng bán lẻ: Tồn kho trên hệ thống và thực tế luôn lệch nhau",
    summary: "Cửa hàng bán lẻ 15 nhân sự, tồn kho trên sổ sách và thực tế thường xuyên chênh lệch, không tìm ra nguyên nhân.",
    context: {
      businessType: "Cửa hàng bán lẻ đồ gia dụng",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự",
      situation: "Chủ cửa hàng lo lắng về việc thất thoát hàng hoá nhưng không biết vấn đề nằm ở đâu."
    },
    painPoints: [
      "Kiểm kê cuối tháng luôn lệch với số liệu trên hệ thống",
      "Không biết hàng bị thất thoát hay ghi nhận sai",
      "Nhân viên đổ lỗi cho nhau",
      "Tốn nhiều thời gian kiểm tra, đối soát"
    ],
    previousAttempts: [
      "Kiểm kê thường xuyên hơn",
      "Yêu cầu nhân viên ký xác nhận",
      "Lắp camera giám sát"
    ],
    previousAttemptsResult: "Vẫn bị lệch, tốn thời gian kiểm kê. Không tìm ra nguyên nhân gốc.",
    rootCauses: [
      {
        title: "Quy trình nhập/xuất hàng không chặt chẽ",
        description: "Hàng vào/ra không được ghi nhận ngay, hoặc ghi không đầy đủ.",
        consequence: "Dữ liệu tồn kho không phản ánh thực tế."
      },
      {
        title: "Không có trách nhiệm rõ ràng",
        description: "Ai cũng có thể lấy hàng, không ai chịu trách nhiệm cập nhật.",
        consequence: "Khi lệch không biết quy trách nhiệm cho ai."
      }
    ],
    solution: {
      approach: "Chuẩn hoá quy trình nhập/xuất kho, phân trách nhiệm rõ ràng.",
      steps: [
        {
          title: "Thiết kế lại quy trình kho",
          description: "Mọi hàng vào/ra đều phải qua bước xác nhận và ghi nhận."
        },
        {
          title: "Phân quyền và trách nhiệm",
          description: "Xác định ai được lấy hàng, ai xác nhận, ai ghi sổ."
        },
        {
          title: "Đối soát hàng ngày",
          description: "Kiểm tra nhanh cuối ngày thay vì chờ cuối tháng."
        }
      ],
      dailyChanges: {
        before: "Hàng ra vào tự do, cuối tháng mới kiểm kê",
        after: "Mỗi giao dịch được ghi nhận, đối soát hàng ngày"
      }
    },
    results: [
      {
        metric: "Độ lệch tồn kho",
        value: "Giảm 90%",
        description: "Từ lệch 5-10% xuống dưới 1%"
      },
      {
        metric: "Thời gian kiểm kê",
        value: "Giảm 70%",
        description: "Đối soát hàng ngày thay vì cuối tháng"
      }
    ],
    keyInsight: "Vấn đề tồn kho thường không phải do nhân viên gian lận, mà do quy trình không rõ ràng.",
    suitableFor: [
      "Cửa hàng bán lẻ có kho hàng",
      "Đang gặp vấn đề lệch tồn kho",
      "Sẵn sàng chuẩn hoá quy trình"
    ],
    notSuitableFor: [
      "Cửa hàng không có kho (dropship)",
      "Chỉ bán dịch vụ, không có hàng hoá"
    ],
    ctaQuestion: "Cửa hàng của bạn có hay bị lệch tồn kho?"
  },
  {
    id: "9",
    slug: "ban-le-cham-soc-khach-hang",
    industry: "retail",
    industryLabel: "Bán lẻ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Cửa hàng thời trang: Khách mua một lần rồi biến mất, không quay lại",
    summary: "Cửa hàng thời trang 12 nhân sự, tỷ lệ khách quay lại thấp, không có cách chăm sóc khách sau mua.",
    context: {
      businessType: "Cửa hàng thời trang nữ",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự",
      situation: "Cửa hàng có lượng khách đến nhưng ít khách quay lại, phải liên tục tìm khách mới."
    },
    painPoints: [
      "Không lưu thông tin khách hàng sau khi mua",
      "Không biết khách mua gì, thích gì",
      "Không có cách liên hệ lại với khách cũ",
      "Chạy quảng cáo liên tục để tìm khách mới, tốn kém"
    ],
    previousAttempts: [
      "Xin số điện thoại khách nhưng không làm gì tiếp",
      "Lập fanpage Facebook đăng bài",
      "Gửi tin nhắn khi có sale"
    ],
    previousAttemptsResult: "Thông tin khách nằm rải rác, không có hệ thống. Gửi tin nhắn nhưng không biết ai thích gì.",
    rootCauses: [
      {
        title: "Không có hệ thống quản lý khách hàng",
        description: "Thông tin khách không được lưu trữ có tổ chức.",
        consequence: "Không thể chăm sóc khách hàng có mục tiêu."
      },
      {
        title: "Không hiểu hành vi mua hàng",
        description: "Không biết khách mua gì, bao lâu mua một lần.",
        consequence: "Marketing đại trà, không hiệu quả."
      }
    ],
    solution: {
      approach: "Xây dựng hệ thống lưu trữ thông tin khách đơn giản, tạo quy trình chăm sóc sau mua.",
      steps: [
        {
          title: "Thiết kế quy trình thu thập thông tin",
          description: "Nhân viên hỏi và ghi nhận thông tin khách khi mua hàng."
        },
        {
          title: "Phân loại khách hàng",
          description: "Nhóm khách theo sở thích, tần suất mua, giá trị đơn hàng."
        },
        {
          title: "Tạo quy trình chăm sóc",
          description: "Gửi tin nhắn chúc mừng sinh nhật, thông báo sản phẩm mới phù hợp."
        }
      ],
      dailyChanges: {
        before: "Khách mua xong là xong, không liên hệ lại",
        after: "Khách được chăm sóc theo sở thích, nhận thông tin phù hợp"
      }
    },
    results: [
      {
        metric: "Tỷ lệ khách quay lại",
        value: "Tăng 40%",
        description: "Khách được chăm sóc sẽ quay lại nhiều hơn"
      },
      {
        metric: "Chi phí marketing",
        value: "Giảm 30%",
        description: "Tận dụng khách cũ thay vì tìm khách mới"
      }
    ],
    keyInsight: "Giữ khách cũ rẻ hơn tìm khách mới 5-7 lần.",
    suitableFor: [
      "Cửa hàng bán lẻ có lượng khách ổn định",
      "Muốn tăng tỷ lệ khách quay lại",
      "Có nhân viên để thực hiện chăm sóc"
    ],
    notSuitableFor: [
      "Cửa hàng mới, chưa có khách hàng",
      "Bán hàng online 100%, không tiếp xúc trực tiếp"
    ],
    ctaQuestion: "Bạn có đang mất nhiều chi phí tìm khách mới?"
  },
  {
    id: "10",
    slug: "ban-le-quan-ly-ca-nhan-vien",
    industry: "retail",
    industryLabel: "Bán lẻ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Cửa hàng bán lẻ: Xếp ca làm việc mỗi tuần mất cả buổi sáng",
    summary: "Cửa hàng bán lẻ 20 nhân sự, mỗi tuần quản lý mất 3-4 tiếng để xếp ca làm việc vì nhân viên hay xin đổi ca.",
    context: {
      businessType: "Cửa hàng bán lẻ mỹ phẩm",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự",
      situation: "Quản lý cửa hàng kiêm nhiệm việc xếp ca, nhưng nhân viên thường xuyên xin thay đổi."
    },
    painPoints: [
      "Nhân viên xin đổi ca qua tin nhắn Zalo liên tục",
      "Xếp ca xong lại phải sửa vì có người không đi được",
      "Không biết ai làm thêm bao nhiêu giờ để tính lương",
      "Hay bị thiếu người vào giờ cao điểm"
    ],
    previousAttempts: [
      "Xếp ca trên bảng giấy",
      "File Excel gửi qua Zalo",
      "Họp đầu tuần để xác nhận"
    ],
    previousAttemptsResult: "Vẫn bị thay đổi sau khi đã xếp. Mất thời gian cập nhật và thông báo.",
    rootCauses: [
      {
        title: "Không có quy trình đổi ca chuẩn",
        description: "Nhân viên xin đổi ca bất cứ lúc nào, quản lý phải xử lý từng trường hợp.",
        consequence: "Mất thời gian, dễ bị sót."
      },
      {
        title: "Thông tin ca làm việc không tập trung",
        description: "Lịch làm việc nằm rải rác, nhân viên không biết ai làm ca nào.",
        consequence: "Hỏi lại liên tục, khó đổi ca với nhau."
      }
    ],
    solution: {
      approach: "Chuẩn hoá quy trình đổi ca, tạo hệ thống xem lịch tập trung.",
      steps: [
        {
          title: "Định nghĩa quy tắc đổi ca",
          description: "Xin đổi trước 48h, tự tìm người thay, quản lý chỉ duyệt."
        },
        {
          title: "Tạo lịch làm việc online",
          description: "Tất cả nhân viên xem được lịch, biết ai làm ca nào."
        },
        {
          title: "Tự động tính giờ làm thêm",
          description: "Hệ thống tự ghi nhận giờ làm, cuối tháng có báo cáo."
        }
      ],
      dailyChanges: {
        before: "Quản lý xử lý từng tin nhắn xin đổi ca",
        after: "Nhân viên tự đổi ca với nhau, quản lý chỉ duyệt"
      }
    },
    results: [
      {
        metric: "Thời gian xếp ca",
        value: "Giảm 70%",
        description: "Từ 4 tiếng xuống 1 tiếng/tuần"
      },
      {
        metric: "Số lần thiếu người",
        value: "Giảm 80%",
        description: "Ca làm việc được đảm bảo"
      }
    ],
    keyInsight: "Giao quyền cho nhân viên tự giải quyết với nhau, quản lý chỉ kiểm soát.",
    suitableFor: [
      "Cửa hàng có nhân viên làm ca",
      "Hay gặp vấn đề xin đổi ca",
      "Quản lý mất nhiều thời gian xếp lịch"
    ],
    notSuitableFor: [
      "Chỉ có 1-2 nhân viên cố định",
      "Lịch làm việc ổn định, ít thay đổi"
    ],
    ctaQuestion: "Bạn có mất nhiều thời gian xếp ca cho nhân viên?"
  },
  {
    id: "11",
    slug: "ban-le-nhan-vien-moi-ban-hang",
    industry: "retail",
    industryLabel: "Bán lẻ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "onboarding",
    mainProblemLabel: "Onboarding nhân sự",
    title: "Cửa hàng bán lẻ: Nhân viên mới không biết bán hàng, phải kèm 2 tuần",
    summary: "Cửa hàng bán lẻ 18 nhân sự, mỗi nhân viên mới cần 2 tuần kèm cặp mới biết tư vấn khách, gây tải cho nhân viên cũ.",
    context: {
      businessType: "Cửa hàng bán lẻ điện thoại",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự",
      situation: "Cửa hàng mở thêm chi nhánh, cần tuyển nhân viên mới nhưng mất nhiều thời gian đào tạo."
    },
    painPoints: [
      "Nhân viên mới không biết sản phẩm, tư vấn sai",
      "Nhân viên cũ phải kèm, ảnh hưởng công việc",
      "Khách không hài lòng khi gặp nhân viên mới",
      "Tỷ lệ nhân viên nghỉ trong tháng đầu cao"
    ],
    previousAttempts: [
      "Kèm cặp 1-1",
      "Cho xem catalogue sản phẩm",
      "Để nhân viên mới quan sát trước khi bán"
    ],
    previousAttemptsResult: "Mất thời gian, nhân viên mới vẫn thiếu tự tin. Nhân viên cũ bị ảnh hưởng năng suất.",
    rootCauses: [
      {
        title: "Không có tài liệu đào tạo chuẩn",
        description: "Mỗi người dạy theo cách riêng, kiến thức không đồng nhất.",
        consequence: "Nhân viên mới học được những thứ khác nhau."
      },
      {
        title: "Không có lộ trình đào tạo rõ ràng",
        description: "Không biết ngày nào học gì, bao giờ thì được bán hàng.",
        consequence: "Nhân viên mới mơ hồ, không tự tin."
      }
    ],
    solution: {
      approach: "Tạo chương trình đào tạo có lộ trình, kết hợp học tự động và thực hành có giám sát.",
      steps: [
        {
          title: "Tài liệu hoá kiến thức sản phẩm",
          description: "Ghi lại thông tin sản phẩm, cách tư vấn, câu hỏi thường gặp."
        },
        {
          title: "Thiết kế lộ trình đào tạo 5 ngày",
          description: "Ngày 1-2: Học tài liệu. Ngày 3-4: Quan sát. Ngày 5: Bán thử có giám sát."
        },
        {
          title: "Kiểm tra và đánh giá",
          description: "Cuối tuần đầu có bài test, đạt mới được bán độc lập."
        }
      ],
      dailyChanges: {
        before: "Nhân viên cũ kèm cặp 2 tuần, mất năng suất",
        after: "Nhân viên mới tự học 3 ngày, kèm cặp 2 ngày là bán được"
      }
    },
    results: [
      {
        metric: "Thời gian đào tạo",
        value: "Giảm 60%",
        description: "Từ 2 tuần xuống 5 ngày"
      },
      {
        metric: "Năng suất nhân viên cũ",
        value: "Tăng 40%",
        description: "Không phải kèm cặp liên tục"
      }
    ],
    keyInsight: "Đào tạo có hệ thống giúp nhân viên mới tự tin hơn và ở lại lâu hơn.",
    suitableFor: [
      "Cửa hàng hay tuyển nhân viên mới",
      "Sản phẩm cần kiến thức để tư vấn",
      "Muốn mở thêm chi nhánh"
    ],
    notSuitableFor: [
      "Nhân sự ổn định, ít tuyển mới",
      "Sản phẩm đơn giản, không cần tư vấn"
    ],
    ctaQuestion: "Bạn có mất nhiều thời gian đào tạo nhân viên mới?"
  },
  {
    id: "12",
    slug: "ban-le-dat-hang-nha-cung-cap",
    industry: "retail",
    industryLabel: "Bán lẻ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "department-coordination",
    mainProblemLabel: "Phối hợp phòng ban",
    title: "Cửa hàng bán lẻ: Đặt hàng nhà cung cấp hay bị trễ hoặc thừa thiếu",
    summary: "Cửa hàng bán lẻ 15 nhân sự, việc đặt hàng từ nhà cung cấp không có quy trình, dẫn đến thiếu hàng bán hoặc tồn kho quá nhiều.",
    context: {
      businessType: "Cửa hàng bán lẻ thực phẩm sạch",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự",
      situation: "Cửa hàng đặt hàng từ nhiều nhà cung cấp, việc quản lý đơn hàng phức tạp."
    },
    painPoints: [
      "Hết hàng bán vì đặt không kịp",
      "Đặt quá nhiều, hàng tồn kho hỏng",
      "Không nhớ giá mua lần trước để so sánh",
      "Nhà cung cấp giao sai, không phát hiện ngay"
    ],
    previousAttempts: [
      "Đặt hàng qua Zalo",
      "Ghi sổ tay đơn hàng",
      "Nhớ trong đầu số lượng cần đặt"
    ],
    previousAttemptsResult: "Hay bị sót, đặt nhầm số lượng. Không có lịch sử để đối chiếu.",
    rootCauses: [
      {
        title: "Không có quy trình đặt hàng chuẩn",
        description: "Ai cũng có thể đặt hàng, không có người chịu trách nhiệm chính.",
        consequence: "Đặt trùng hoặc bỏ sót."
      },
      {
        title: "Không theo dõi tồn kho để dự báo",
        description: "Chờ đến khi hết hàng mới đặt, không dự trù trước.",
        consequence: "Thiếu hàng bán, mất khách."
      }
    ],
    solution: {
      approach: "Xây dựng quy trình đặt hàng có kế hoạch, theo dõi tồn kho để dự báo.",
      steps: [
        {
          title: "Thiết lập mức tồn kho tối thiểu",
          description: "Xác định ngưỡng cần đặt hàng cho từng sản phẩm."
        },
        {
          title: "Tạo lịch đặt hàng cố định",
          description: "Mỗi tuần có ngày cố định để review và đặt hàng."
        },
        {
          title: "Ghi nhận lịch sử đặt hàng",
          description: "Lưu lại thông tin đơn hàng, giá cả, để đối chiếu sau."
        }
      ],
      dailyChanges: {
        before: "Đặt hàng khi nhớ ra, thường là khi đã hết",
        after: "Review tồn kho định kỳ, đặt hàng có kế hoạch"
      }
    },
    results: [
      {
        metric: "Tỷ lệ hết hàng",
        value: "Giảm 80%",
        description: "Đặt hàng chủ động, có kế hoạch"
      },
      {
        metric: "Hàng tồn kho hỏng",
        value: "Giảm 50%",
        description: "Đặt đúng số lượng cần"
      }
    ],
    keyInsight: "Đặt hàng có kế hoạch giúp vừa không thiếu hàng, vừa không tồn kho quá nhiều.",
    suitableFor: [
      "Cửa hàng có nhiều nhà cung cấp",
      "Sản phẩm có hạn sử dụng",
      "Đang gặp vấn đề thiếu hoặc thừa hàng"
    ],
    notSuitableFor: [
      "Đặt hàng từ 1-2 nhà cung cấp cố định",
      "Sản phẩm không có hạn sử dụng"
    ],
    ctaQuestion: "Bạn có hay gặp tình trạng hết hàng bán hoặc tồn kho quá nhiều?"
  },

  // ============================================
  // SẢN XUẤT (6 bài)
  // ============================================
  {
    id: "13",
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
  },
  {
    id: "14",
    slug: "san-xuat-nguyen-vat-lieu-thieu-hut",
    industry: "manufacturing",
    industryLabel: "Sản xuất",
    scale: "30to100",
    scaleLabel: "30-100 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Xưởng sản xuất: Dừng sản xuất vì thiếu nguyên vật liệu, phát hiện quá muộn",
    summary: "Xưởng sản xuất 50 nhân sự, hay phải dừng dây chuyền vì thiếu nguyên vật liệu, bộ phận kho không thông báo kịp thời.",
    context: {
      businessType: "Xưởng sản xuất bao bì nhựa",
      industry: "Sản xuất",
      scale: "30–100 nhân sự",
      situation: "Xưởng hoạt động 2 ca, sản lượng cao nhưng hay bị gián đoạn do thiếu nguyên liệu."
    },
    painPoints: [
      "Đến khi sản xuất mới biết thiếu nguyên liệu",
      "Bộ phận kho không thông báo khi sắp hết",
      "Phải dừng dây chuyền chờ nhập hàng",
      "Mất đơn hàng vì không giao kịp thời"
    ],
    previousAttempts: [
      "Nhờ kho báo khi nào sắp hết",
      "Kiểm kê định kỳ mỗi tuần",
      "Đặt hàng dự phòng nhiều"
    ],
    previousAttemptsResult: "Kho hay quên báo. Kiểm kê tốn thời gian. Đặt dự phòng nhiều làm đọng vốn.",
    rootCauses: [
      {
        title: "Không có hệ thống cảnh báo tồn kho",
        description: "Dữ liệu tồn kho không được theo dõi realtime.",
        consequence: "Phát hiện thiếu hàng khi đã quá muộn."
      },
      {
        title: "Không có quy trình đặt hàng chủ động",
        description: "Chờ đến khi hết mới đặt, không dự trù theo kế hoạch sản xuất.",
        consequence: "Dây chuyền bị gián đoạn, mất năng suất."
      }
    ],
    solution: {
      approach: "Xây dựng hệ thống theo dõi tồn kho với cảnh báo tự động, kết nối với kế hoạch sản xuất.",
      steps: [
        {
          title: "Thiết lập mức cảnh báo cho từng nguyên liệu",
          description: "Xác định ngưỡng tồn kho tối thiểu cần đặt hàng."
        },
        {
          title: "Kết nối kế hoạch sản xuất với tồn kho",
          description: "Dựa trên đơn hàng sắp tới, tính nguyên liệu cần có."
        },
        {
          title: "Tự động thông báo khi cần đặt hàng",
          description: "Bộ phận mua hàng nhận thông báo trước khi hết nguyên liệu."
        }
      ],
      dailyChanges: {
        before: "Phát hiện thiếu nguyên liệu khi dây chuyền đã dừng",
        after: "Nhận cảnh báo trước 3-5 ngày, đặt hàng chủ động"
      }
    },
    results: [
      {
        metric: "Thời gian dừng dây chuyền",
        value: "Giảm 90%",
        description: "Chủ động có nguyên liệu trước khi cần"
      },
      {
        metric: "Đơn hàng giao đúng hạn",
        value: "Tăng 40%",
        description: "Sản xuất không bị gián đoạn"
      }
    ],
    keyInsight: "Cảnh báo sớm giúp chuyển từ \"chữa cháy\" sang \"phòng ngừa\".",
    suitableFor: [
      "Xưởng sản xuất có nhiều loại nguyên liệu",
      "Hay bị gián đoạn vì thiếu nguyên liệu",
      "Có bộ phận kho riêng"
    ],
    notSuitableFor: [
      "Sản xuất theo đơn, không có kho nguyên liệu",
      "Chỉ dùng 1-2 loại nguyên liệu đơn giản"
    ],
    ctaQuestion: "Xưởng của bạn có hay bị dừng vì thiếu nguyên liệu?"
  },
  {
    id: "15",
    slug: "san-xuat-chat-luong-san-pham",
    industry: "manufacturing",
    industryLabel: "Sản xuất",
    scale: "30to100",
    scaleLabel: "30-100 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Xưởng sản xuất: Sản phẩm lỗi nhiều, không biết lỗi ở công đoạn nào",
    summary: "Xưởng sản xuất 40 nhân sự, tỷ lệ sản phẩm lỗi cao nhưng không truy xuất được nguyên nhân từ công đoạn nào.",
    context: {
      businessType: "Xưởng sản xuất linh kiện cơ khí",
      industry: "Sản xuất",
      scale: "30–100 nhân sự",
      situation: "Xưởng có 5 công đoạn sản xuất, mỗi công đoạn do một tổ đảm nhận."
    },
    painPoints: [
      "Sản phẩm lỗi phát hiện ở khâu cuối, không biết lỗi từ đâu",
      "Các tổ đổ lỗi cho nhau",
      "Không có dữ liệu để cải tiến quy trình",
      "Khách hàng khiếu nại về chất lượng"
    ],
    previousAttempts: [
      "Kiểm tra chất lượng ở khâu cuối",
      "Họp rút kinh nghiệm khi có lỗi",
      "Phạt tổ có sản phẩm lỗi"
    ],
    previousAttemptsResult: "Không tìm ra nguyên nhân gốc. Các tổ đổ lỗi cho nhau. Vẫn bị lỗi tiếp.",
    rootCauses: [
      {
        title: "Không kiểm soát chất lượng từng công đoạn",
        description: "Chỉ kiểm tra cuối cùng, không biết lỗi phát sinh ở đâu.",
        consequence: "Không thể cải tiến đúng công đoạn có vấn đề."
      },
      {
        title: "Không ghi nhận dữ liệu sản xuất",
        description: "Không biết ai làm, khi nào, điều kiện sản xuất thế nào.",
        consequence: "Không có cơ sở để phân tích và cải tiến."
      }
    ],
    solution: {
      approach: "Thiết lập kiểm soát chất lượng từng công đoạn, ghi nhận dữ liệu để phân tích.",
      steps: [
        {
          title: "Xác định tiêu chuẩn cho từng công đoạn",
          description: "Mỗi công đoạn có tiêu chuẩn đầu vào và đầu ra rõ ràng."
        },
        {
          title: "Kiểm tra và ghi nhận ở mỗi công đoạn",
          description: "Sản phẩm đạt mới chuyển sang công đoạn tiếp, ghi nhận kết quả."
        },
        {
          title: "Phân tích dữ liệu để cải tiến",
          description: "Thống kê lỗi theo công đoạn, tập trung cải tiến công đoạn có nhiều lỗi nhất."
        }
      ],
      dailyChanges: {
        before: "Phát hiện lỗi ở cuối, không biết từ đâu",
        after: "Lỗi được phát hiện ngay tại công đoạn, biết rõ nguyên nhân"
      }
    },
    results: [
      {
        metric: "Tỷ lệ sản phẩm lỗi",
        value: "Giảm 60%",
        description: "Phát hiện và xử lý lỗi sớm"
      },
      {
        metric: "Thời gian xử lý khiếu nại",
        value: "Giảm 70%",
        description: "Có dữ liệu truy xuất rõ ràng"
      }
    ],
    keyInsight: "Kiểm soát chất lượng cần được thực hiện ở từng công đoạn, không chỉ ở cuối.",
    suitableFor: [
      "Xưởng có nhiều công đoạn sản xuất",
      "Đang gặp vấn đề chất lượng sản phẩm",
      "Sẵn sàng đầu tư thời gian kiểm soát"
    ],
    notSuitableFor: [
      "Sản xuất đơn giản, 1-2 công đoạn",
      "Sản phẩm không yêu cầu chất lượng cao"
    ],
    ctaQuestion: "Xưởng của bạn có gặp vấn đề về chất lượng sản phẩm?"
  },
  {
    id: "16",
    slug: "san-xuat-bao-tri-may-moc",
    industry: "manufacturing",
    industryLabel: "Sản xuất",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Xưởng sản xuất: Máy hỏng đột xuất, mất cả ngày sản xuất",
    summary: "Xưởng sản xuất 25 nhân sự, máy móc hay hỏng đột xuất, không có kế hoạch bảo trì định kỳ.",
    context: {
      businessType: "Xưởng in ấn",
      industry: "Sản xuất",
      scale: "10–30 nhân sự",
      situation: "Xưởng có 5 máy in chính, khi máy hỏng thì dừng sản xuất cả ngày."
    },
    painPoints: [
      "Máy hỏng đột xuất, không có máy thay thế",
      "Mất thời gian chờ sửa, trễ đơn hàng",
      "Không nhớ lần bảo trì cuối là khi nào",
      "Chi phí sửa chữa khẩn cấp cao"
    ],
    previousAttempts: [
      "Sửa khi máy hỏng",
      "Nhờ nhân viên nhớ bảo trì",
      "Ghi sổ tay lịch bảo trì"
    ],
    previousAttemptsResult: "Quên bảo trì, máy hỏng đột xuất. Chi phí sửa chữa cao, mất đơn hàng.",
    rootCauses: [
      {
        title: "Không có kế hoạch bảo trì định kỳ",
        description: "Bảo trì theo kiểu \"hỏng thì sửa\", không phòng ngừa.",
        consequence: "Máy hỏng đột xuất, ảnh hưởng sản xuất."
      },
      {
        title: "Không theo dõi lịch sử máy móc",
        description: "Không biết máy nào hay hỏng, hỏng vì nguyên nhân gì.",
        consequence: "Không thể dự đoán và phòng ngừa."
      }
    ],
    solution: {
      approach: "Thiết lập lịch bảo trì định kỳ, ghi nhận lịch sử sửa chữa để dự đoán.",
      steps: [
        {
          title: "Lập danh sách máy móc và thông số",
          description: "Ghi nhận thông tin từng máy, chu kỳ bảo trì khuyến cáo."
        },
        {
          title: "Tạo lịch bảo trì định kỳ",
          description: "Mỗi máy có lịch bảo trì cố định, nhắc nhở tự động."
        },
        {
          title: "Ghi nhận lịch sử sự cố",
          description: "Khi máy hỏng, ghi lại nguyên nhân, thời gian sửa, chi phí."
        }
      ],
      dailyChanges: {
        before: "Chờ máy hỏng mới sửa, mất cả ngày sản xuất",
        after: "Bảo trì định kỳ, máy ít hỏng đột xuất"
      }
    },
    results: [
      {
        metric: "Thời gian dừng máy đột xuất",
        value: "Giảm 70%",
        description: "Bảo trì phòng ngừa hiệu quả"
      },
      {
        metric: "Chi phí sửa chữa",
        value: "Giảm 40%",
        description: "Phát hiện sớm, sửa ít tốn kém hơn"
      }
    ],
    keyInsight: "Bảo trì phòng ngừa rẻ hơn sửa chữa khẩn cấp.",
    suitableFor: [
      "Xưởng có máy móc quan trọng",
      "Hay bị dừng sản xuất do máy hỏng",
      "Muốn giảm chi phí sửa chữa"
    ],
    notSuitableFor: [
      "Máy móc đơn giản, dễ thay thế",
      "Sản xuất thủ công, ít máy móc"
    ],
    ctaQuestion: "Xưởng của bạn có hay bị dừng vì máy hỏng đột xuất?"
  },
  {
    id: "17",
    slug: "san-xuat-bao-cao-san-luong",
    industry: "manufacturing",
    industryLabel: "Sản xuất",
    scale: "30to100",
    scaleLabel: "30-100 nhân sự",
    mainProblem: "ceo-reporting",
    mainProblemLabel: "Báo cáo cho CEO",
    title: "Xưởng sản xuất: Chủ xưởng không biết sản lượng thực tế đến cuối tuần",
    summary: "Xưởng sản xuất 60 nhân sự, chủ xưởng chỉ biết sản lượng khi kế toán tổng hợp cuối tuần, không thể điều chỉnh kịp thời.",
    context: {
      businessType: "Xưởng sản xuất thực phẩm",
      industry: "Sản xuất",
      scale: "30–100 nhân sự",
      situation: "Xưởng chạy 2 ca, sản lượng cao nhưng báo cáo chậm."
    },
    painPoints: [
      "Không biết sản lượng hàng ngày",
      "Kế toán tổng hợp cuối tuần mới có số liệu",
      "Không so sánh được năng suất giữa các ca",
      "Phát hiện vấn đề khi đã quá muộn"
    ],
    previousAttempts: [
      "Nhờ tổ trưởng báo cáo cuối ca",
      "File Excel tổng hợp cuối ngày",
      "Họp tuần để review số liệu"
    ],
    previousAttemptsResult: "Tổ trưởng hay quên báo cáo. Số liệu không chính xác. Phát hiện vấn đề sau 3-4 ngày.",
    rootCauses: [
      {
        title: "Không có quy trình ghi nhận sản lượng chuẩn",
        description: "Mỗi tổ ghi theo cách riêng, không đồng nhất.",
        consequence: "Số liệu không đáng tin cậy."
      },
      {
        title: "Báo cáo phụ thuộc vào con người",
        description: "Phải nhờ tổ trưởng báo cáo, hay bị quên hoặc sai.",
        consequence: "Thông tin chậm và thiếu chính xác."
      }
    ],
    solution: {
      approach: "Thiết kế quy trình ghi nhận sản lượng đơn giản, tạo báo cáo tự động.",
      steps: [
        {
          title: "Xác định các chỉ số cần theo dõi",
          description: "Sản lượng theo ca, theo sản phẩm, tỷ lệ lỗi."
        },
        {
          title: "Tạo form nhập liệu cho tổ trưởng",
          description: "Cuối mỗi ca, tổ trưởng nhập số liệu trong 5 phút."
        },
        {
          title: "Tự động tổng hợp và báo cáo",
          description: "Chủ xưởng nhận báo cáo hàng ngày, không cần chờ cuối tuần."
        }
      ],
      dailyChanges: {
        before: "Chờ cuối tuần mới biết sản lượng",
        after: "Mỗi sáng có báo cáo sản lượng ngày hôm trước"
      }
    },
    results: [
      {
        metric: "Tốc độ có thông tin",
        value: "Từ 7 ngày xuống 1 ngày",
        description: "Báo cáo sản lượng hàng ngày"
      },
      {
        metric: "Độ chính xác",
        value: "Tăng 90%",
        description: "Quy trình nhập liệu chuẩn"
      }
    ],
    keyInsight: "Thông tin sớm giúp điều chỉnh kịp thời, không chờ đến khi quá muộn.",
    suitableFor: [
      "Xưởng sản xuất có nhiều ca",
      "Sản lượng cao, cần theo dõi hàng ngày",
      "Chủ xưởng muốn nắm tình hình realtime"
    ],
    notSuitableFor: [
      "Sản xuất theo đơn, sản lượng thấp",
      "Chỉ có 1 ca, dễ theo dõi"
    ],
    ctaQuestion: "Bạn có đang chờ cuối tuần mới biết tình hình sản xuất?"
  },
  {
    id: "18",
    slug: "san-xuat-cong-nhan-moi-khong-biet-lam",
    industry: "manufacturing",
    industryLabel: "Sản xuất",
    scale: "30to100",
    scaleLabel: "30-100 nhân sự",
    mainProblem: "onboarding",
    mainProblemLabel: "Onboarding nhân sự",
    title: "Xưởng sản xuất: Công nhân mới không biết làm, phải có người kèm liên tục",
    summary: "Xưởng sản xuất 45 nhân sự, mỗi công nhân mới cần 3-4 tuần kèm cặp, ảnh hưởng năng suất của công nhân cũ.",
    context: {
      businessType: "Xưởng may mặc",
      industry: "Sản xuất",
      scale: "30–100 nhân sự",
      situation: "Xưởng tuyển công nhân mới thường xuyên do đơn hàng tăng, nhưng mất nhiều thời gian đào tạo."
    },
    painPoints: [
      "Công nhân mới không biết quy trình, thao tác sai",
      "Công nhân cũ phải kèm, giảm năng suất",
      "Sản phẩm lỗi nhiều trong giai đoạn đầu",
      "Tỷ lệ công nhân mới nghỉ việc cao"
    ],
    previousAttempts: [
      "Kèm cặp 1-1",
      "Cho xem thợ cũ làm mẫu",
      "Giao việc đơn giản trước"
    ],
    previousAttemptsResult: "Mất nhiều thời gian, công nhân cũ không muốn kèm. Sản phẩm lỗi nhiều.",
    rootCauses: [
      {
        title: "Không có tài liệu hướng dẫn chuẩn",
        description: "Mỗi thợ cũ dạy theo cách riêng, kiến thức không đồng nhất.",
        consequence: "Công nhân mới học được các thói quen khác nhau."
      },
      {
        title: "Không có lộ trình đào tạo rõ ràng",
        description: "Công nhân mới không biết cần học gì, bao giờ làm được việc.",
        consequence: "Mất động lực, nghỉ việc sớm."
      }
    ],
    solution: {
      approach: "Tạo tài liệu hướng dẫn chuẩn và lộ trình đào tạo rõ ràng.",
      steps: [
        {
          title: "Ghi nhận quy trình từ thợ giỏi nhất",
          description: "Quay video, chụp hình các bước thao tác chuẩn."
        },
        {
          title: "Tạo tài liệu hướng dẫn đơn giản",
          description: "Hình ảnh + video ngắn cho từng công đoạn."
        },
        {
          title: "Thiết kế lộ trình đào tạo 2 tuần",
          description: "Ngày 1-5: Học lý thuyết + thực hành cơ bản. Ngày 6-10: Làm thử có giám sát."
        }
      ],
      dailyChanges: {
        before: "Công nhân cũ kèm cặp 3-4 tuần",
        after: "Công nhân mới tự học 1 tuần, kèm cặp 1 tuần là làm được"
      }
    },
    results: [
      {
        metric: "Thời gian đào tạo",
        value: "Giảm 50%",
        description: "Từ 4 tuần xuống 2 tuần"
      },
      {
        metric: "Tỷ lệ công nhân mới ở lại",
        value: "Tăng 40%",
        description: "Công nhân tự tin hơn khi có lộ trình rõ ràng"
      }
    ],
    keyInsight: "Đào tạo có hệ thống giúp công nhân mới tự tin và gắn bó hơn.",
    suitableFor: [
      "Xưởng hay tuyển công nhân mới",
      "Công việc cần kỹ năng tay nghề",
      "Muốn giảm thời gian đào tạo"
    ],
    notSuitableFor: [
      "Công việc đơn giản, không cần đào tạo",
      "Nhân sự ổn định, ít thay đổi"
    ],
    ctaQuestion: "Xưởng của bạn có mất nhiều thời gian đào tạo công nhân mới?"
  },

  // ============================================
  // DỊCH VỤ (6 bài)
  // ============================================
  {
    id: "19",
    slug: "dich-vu-agency-bao-cao-khach-hang",
    industry: "service",
    industryLabel: "Dịch vụ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "ceo-reporting",
    mainProblemLabel: "Báo cáo cho CEO",
    title: "Agency marketing: Khách hàng hay hỏi tiến độ, team mất thời gian trả lời",
    summary: "Agency 15 nhân sự, khách hàng liên tục hỏi tiến độ dự án qua Zalo, team mất nhiều thời gian trả lời thay vì làm việc.",
    context: {
      businessType: "Agency marketing & quảng cáo",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự",
      situation: "Agency đang quản lý 20+ khách hàng, mỗi khách có người phụ trách riêng."
    },
    painPoints: [
      "Khách hàng nhắn Zalo hỏi tiến độ liên tục",
      "Team mất thời gian trả lời thay vì làm việc",
      "Không có nơi để khách tự xem tiến độ",
      "Một số việc bị quên, khách hàng phàn nàn"
    ],
    previousAttempts: [
      "Nhờ team trả lời nhanh hơn",
      "Gửi báo cáo tuần qua email",
      "Tạo nhóm Zalo riêng cho từng khách"
    ],
    previousAttemptsResult: "Team vẫn bị gián đoạn. Báo cáo tuần chậm, khách vẫn hỏi giữa tuần.",
    rootCauses: [
      {
        title: "Khách không có cách tự theo dõi tiến độ",
        description: "Thông tin tiến độ nằm trong nội bộ agency, khách phải hỏi mới biết.",
        consequence: "Khách hàng lo lắng, team bị gián đoạn."
      },
      {
        title: "Không có hệ thống quản lý công việc rõ ràng",
        description: "Việc nằm rải rác ở nhiều nơi, dễ bị bỏ sót.",
        consequence: "Một số việc bị quên, khách không hài lòng."
      }
    ],
    solution: {
      approach: "Tạo hệ thống theo dõi tiến độ mà khách hàng có thể tự xem.",
      steps: [
        {
          title: "Chuẩn hoá quy trình quản lý dự án",
          description: "Mỗi dự án có danh sách công việc, deadline, người phụ trách rõ ràng."
        },
        {
          title: "Tạo dashboard tiến độ cho khách",
          description: "Khách hàng có link xem tiến độ realtime, không cần hỏi."
        },
        {
          title: "Tự động thông báo milestone",
          description: "Khi hoàn thành công việc quan trọng, khách tự động nhận thông báo."
        }
      ],
      dailyChanges: {
        before: "Khách nhắn hỏi, team dừng việc trả lời",
        after: "Khách tự xem dashboard, team tập trung làm việc"
      }
    },
    results: [
      {
        metric: "Thời gian trả lời khách",
        value: "Giảm 70%",
        description: "Khách tự xem thay vì hỏi"
      },
      {
        metric: "Sự hài lòng của khách",
        value: "Tăng rõ rệt",
        description: "Minh bạch, chuyên nghiệp hơn"
      }
    ],
    keyInsight: "Minh bạch tiến độ giúp khách hàng yên tâm và team tập trung làm việc.",
    suitableFor: [
      "Agency có nhiều khách hàng",
      "Khách hay hỏi tiến độ",
      "Muốn tăng sự chuyên nghiệp"
    ],
    notSuitableFor: [
      "Chỉ có 1-2 khách hàng cố định",
      "Dịch vụ đơn giản, không cần theo dõi tiến độ"
    ],
    ctaQuestion: "Team của bạn có mất nhiều thời gian trả lời khách hàng?"
  },
  {
    id: "20",
    slug: "dich-vu-phong-kham-lich-hen",
    industry: "service",
    industryLabel: "Dịch vụ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Phòng khám tư nhân: Lịch hẹn chồng chéo, bệnh nhân phải chờ đợi lâu",
    summary: "Phòng khám 12 nhân sự, lịch hẹn được ghi sổ tay dẫn đến trùng lịch, bệnh nhân phàn nàn phải chờ đợi.",
    context: {
      businessType: "Phòng khám đa khoa tư nhân",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự",
      situation: "Phòng khám có 3 bác sĩ, lượng bệnh nhân đông nhưng quản lý lịch hẹn thủ công."
    },
    painPoints: [
      "Ghi lịch hẹn vào sổ, hay bị trùng giờ",
      "Bệnh nhân đến khám phải chờ đợi lâu",
      "Không biết bác sĩ nào rảnh để phân bổ",
      "Nhân viên phải gọi điện xác nhận từng bệnh nhân"
    ],
    previousAttempts: [
      "Ghi sổ cẩn thận hơn",
      "Phân công người quản lý lịch",
      "Dùng file Excel để sắp xếp"
    ],
    previousAttemptsResult: "Vẫn bị trùng lịch. Mất thời gian gọi điện xác nhận. Bệnh nhân không hài lòng.",
    rootCauses: [
      {
        title: "Quản lý lịch hẹn thủ công",
        description: "Ghi sổ tay hoặc Excel dễ bị sai sót, không cập nhật realtime.",
        consequence: "Trùng lịch, khó phân bổ bệnh nhân."
      },
      {
        title: "Không có cơ chế nhắc lịch tự động",
        description: "Phải gọi điện xác nhận từng bệnh nhân, tốn nhân lực.",
        consequence: "Bệnh nhân quên lịch, đến muộn hoặc không đến."
      }
    ],
    solution: {
      approach: "Số hoá lịch hẹn với khả năng nhắc nhở tự động.",
      steps: [
        {
          title: "Tạo hệ thống lịch hẹn online",
          description: "Tất cả lịch hẹn được quản lý trên một hệ thống, không dùng sổ tay."
        },
        {
          title: "Phân bổ lịch theo bác sĩ",
          description: "Mỗi bác sĩ có lịch riêng, hệ thống cảnh báo khi trùng."
        },
        {
          title: "Tự động nhắc lịch cho bệnh nhân",
          description: "Gửi tin nhắn nhắc lịch trước 1 ngày và trước 1 giờ."
        }
      ],
      dailyChanges: {
        before: "Tra sổ, gọi điện xác nhận, bệnh nhân chờ đợi",
        after: "Xem lịch online, tự động nhắc, bệnh nhân đến đúng giờ"
      }
    },
    results: [
      {
        metric: "Tỷ lệ trùng lịch",
        value: "Giảm 95%",
        description: "Hệ thống cảnh báo tự động"
      },
      {
        metric: "Thời gian chờ đợi",
        value: "Giảm 50%",
        description: "Phân bổ lịch hợp lý hơn"
      }
    ],
    keyInsight: "Số hoá lịch hẹn giúp phục vụ nhiều bệnh nhân hơn với ít sai sót hơn.",
    suitableFor: [
      "Phòng khám có từ 2 bác sĩ trở lên",
      "Lượng bệnh nhân đông",
      "Đang gặp vấn đề trùng lịch"
    ],
    notSuitableFor: [
      "Phòng khám 1 bác sĩ, ít bệnh nhân",
      "Bệnh nhân đến khám không cần hẹn trước"
    ],
    ctaQuestion: "Phòng khám của bạn có hay bị trùng lịch hẹn?"
  },
  {
    id: "21",
    slug: "dich-vu-luat-su-ho-so-khach-hang",
    industry: "service",
    industryLabel: "Dịch vụ",
    scale: "under10",
    scaleLabel: "< 10 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Văn phòng luật: Hồ sơ khách hàng nằm rải rác, khó tìm khi cần",
    summary: "Văn phòng luật 5 nhân sự, hồ sơ khách hàng lưu ở nhiều nơi (giấy, máy tính, email), mất thời gian tìm kiếm.",
    context: {
      businessType: "Văn phòng luật sư tư vấn",
      industry: "Dịch vụ",
      scale: "Dưới 10 nhân sự",
      situation: "Văn phòng xử lý 30+ hồ sơ khách hàng, mỗi hồ sơ có nhiều tài liệu liên quan."
    },
    painPoints: [
      "Hồ sơ giấy lẫn file điện tử, không biết đâu là bản mới nhất",
      "Khách hàng hỏi, mất thời gian tìm hồ sơ",
      "Luật sư khác không biết hồ sơ nằm ở đâu khi cần hỗ trợ",
      "Một số hồ sơ bị quên deadline"
    ],
    previousAttempts: [
      "Lưu file theo thư mục khách hàng",
      "Ghi sổ theo dõi hồ sơ",
      "Nhờ trợ lý nhắc deadline"
    ],
    previousAttemptsResult: "File rải rác ở nhiều nơi. Sổ không cập nhật đầy đủ. Vẫn bị quên deadline.",
    rootCauses: [
      {
        title: "Không có hệ thống quản lý hồ sơ tập trung",
        description: "Tài liệu nằm ở nhiều nơi: giấy, máy tính cá nhân, email.",
        consequence: "Mất thời gian tìm kiếm, dễ bị thất lạc."
      },
      {
        title: "Không có cơ chế nhắc deadline",
        description: "Phụ thuộc vào con người để nhớ deadline.",
        consequence: "Một số hồ sơ bị quên, ảnh hưởng uy tín."
      }
    ],
    solution: {
      approach: "Tạo hệ thống lưu trữ hồ sơ tập trung với nhắc deadline tự động.",
      steps: [
        {
          title: "Thiết kế cấu trúc lưu trữ hồ sơ",
          description: "Mỗi khách hàng có folder riêng, các loại tài liệu được phân loại rõ ràng."
        },
        {
          title: "Số hoá hồ sơ giấy",
          description: "Scan và lưu trữ hồ sơ giấy vào hệ thống."
        },
        {
          title: "Thiết lập nhắc deadline",
          description: "Mỗi hồ sơ có deadline, tự động nhắc trước 7 ngày và 1 ngày."
        }
      ],
      dailyChanges: {
        before: "Tìm hồ sơ trong đống giấy và email, quên deadline",
        after: "Search tên khách là có hồ sơ, deadline được nhắc tự động"
      }
    },
    results: [
      {
        metric: "Thời gian tìm hồ sơ",
        value: "Giảm 80%",
        description: "Tìm kiếm nhanh trên hệ thống"
      },
      {
        metric: "Hồ sơ quên deadline",
        value: "Giảm 100%",
        description: "Nhắc nhở tự động"
      }
    ],
    keyInsight: "Quản lý hồ sơ tập trung giúp phục vụ khách hàng tốt hơn và không bỏ sót việc.",
    suitableFor: [
      "Văn phòng luật có từ 20 hồ sơ trở lên",
      "Đang gặp vấn đề tìm hồ sơ",
      "Muốn tăng sự chuyên nghiệp"
    ],
    notSuitableFor: [
      "Luật sư độc lập, ít hồ sơ",
      "Hồ sơ đơn giản, không cần theo dõi deadline"
    ],
    ctaQuestion: "Bạn có mất thời gian tìm hồ sơ khách hàng?"
  },
  {
    id: "22",
    slug: "dich-vu-spa-nhan-vien-khong-nho-khach",
    industry: "service",
    industryLabel: "Dịch vụ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "task-management",
    mainProblemLabel: "Quản lý công việc",
    title: "Spa: Nhân viên không nhớ sở thích khách, chăm sóc không cá nhân hoá",
    summary: "Spa 20 nhân sự, khách hàng VIP than phiền vì nhân viên không nhớ họ thích dịch vụ gì, mỗi lần đến phải nói lại.",
    context: {
      businessType: "Spa chăm sóc da và thư giãn",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự",
      situation: "Spa có nhiều khách VIP, muốn chăm sóc cá nhân hoá nhưng nhân viên không nhớ được."
    },
    painPoints: [
      "Nhân viên không nhớ khách thích dịch vụ gì",
      "Khách VIP phải nói lại sở thích mỗi lần đến",
      "Không biết khi nào khách hay đến để gợi ý hẹn lịch",
      "Khách quan trọng không được chăm sóc đặc biệt"
    ],
    previousAttempts: [
      "Nhờ nhân viên nhớ khách quen",
      "Ghi sổ tay thông tin khách",
      "Dán note vào thẻ khách hàng"
    ],
    previousAttemptsResult: "Nhân viên nghỉ là mất thông tin. Sổ tay không ai cập nhật. Note bị mất.",
    rootCauses: [
      {
        title: "Thông tin khách hàng không được lưu trữ có hệ thống",
        description: "Mỗi nhân viên nhớ khách theo cách riêng, không chia sẻ được.",
        consequence: "Khi nhân viên nghỉ, thông tin khách cũng mất theo."
      },
      {
        title: "Không có cơ chế cá nhân hoá dịch vụ",
        description: "Không biết khách thích gì để gợi ý phù hợp.",
        consequence: "Khách cảm thấy không được quan tâm."
      }
    ],
    solution: {
      approach: "Xây dựng hồ sơ khách hàng với sở thích và lịch sử sử dụng dịch vụ.",
      steps: [
        {
          title: "Tạo hồ sơ khách hàng chi tiết",
          description: "Ghi nhận thông tin: sở thích, dị ứng, dịch vụ hay dùng, nhân viên ưa thích."
        },
        {
          title: "Cập nhật sau mỗi lần đến",
          description: "Nhân viên ghi nhận phản hồi của khách sau mỗi buổi."
        },
        {
          title: "Xem hồ sơ trước khi phục vụ",
          description: "Nhân viên đọc hồ sơ khách trước khi bắt đầu dịch vụ."
        }
      ],
      dailyChanges: {
        before: "Hỏi khách muốn gì, khách phải nói lại",
        after: "Chào khách bằng tên, gợi ý dịch vụ khách thích"
      }
    },
    results: [
      {
        metric: "Sự hài lòng của khách VIP",
        value: "Tăng 50%",
        description: "Cảm thấy được quan tâm cá nhân"
      },
      {
        metric: "Tỷ lệ khách quay lại",
        value: "Tăng 30%",
        description: "Trải nghiệm cá nhân hoá tốt hơn"
      }
    ],
    keyInsight: "Cá nhân hoá dịch vụ không cần nhớ, cần hệ thống.",
    suitableFor: [
      "Spa có khách hàng VIP",
      "Muốn nâng cao trải nghiệm khách",
      "Đang mất khách vì dịch vụ không khác biệt"
    ],
    notSuitableFor: [
      "Spa giá rẻ, khách vãng lai",
      "Không có thời gian ghi nhận thông tin khách"
    ],
    ctaQuestion: "Bạn có muốn chăm sóc khách hàng cá nhân hoá hơn?"
  },
  {
    id: "23",
    slug: "dich-vu-ke-toan-bao-cao-khach-hang",
    industry: "service",
    industryLabel: "Dịch vụ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "department-coordination",
    mainProblemLabel: "Phối hợp phòng ban",
    title: "Công ty kế toán: Mỗi kế toán viên làm một kiểu, chất lượng không đồng đều",
    summary: "Công ty kế toán 18 nhân sự phục vụ 50+ khách hàng, mỗi kế toán viên làm theo cách riêng, khó kiểm soát chất lượng.",
    context: {
      businessType: "Công ty dịch vụ kế toán",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự",
      situation: "Công ty phục vụ nhiều khách hàng SME, mỗi kế toán viên phụ trách 5-7 khách."
    },
    painPoints: [
      "Mỗi kế toán viên có cách làm việc khác nhau",
      "Khi kế toán nghỉ, người khác không tiếp quản được",
      "Một số khách được phục vụ tốt, một số thì không",
      "Khó đánh giá hiệu quả của từng người"
    ],
    previousAttempts: [
      "Để mỗi người tự quản lý khách của mình",
      "Họp hàng tuần để chia sẻ kinh nghiệm",
      "Kiểm tra báo cáo trước khi gửi khách"
    ],
    previousAttemptsResult: "Chất lượng phụ thuộc vào từng người. Khi kế toán nghỉ, khách bị gián đoạn.",
    rootCauses: [
      {
        title: "Không có quy trình làm việc chuẩn",
        description: "Mỗi người làm theo cách riêng, không có checklist chung.",
        consequence: "Chất lượng không đồng đều, khó kiểm soát."
      },
      {
        title: "Thông tin khách hàng không được chia sẻ",
        description: "Mỗi kế toán viên giữ thông tin khách riêng.",
        consequence: "Khi nghỉ việc, người khác không tiếp quản được."
      }
    ],
    solution: {
      approach: "Chuẩn hoá quy trình làm việc và tập trung thông tin khách hàng.",
      steps: [
        {
          title: "Xây dựng quy trình chuẩn cho từng loại công việc",
          description: "Tạo checklist cho: khai thuế, báo cáo tài chính, quyết toán."
        },
        {
          title: "Tập trung thông tin khách hàng",
          description: "Mỗi khách có hồ sơ chung, ai cũng có thể truy cập khi cần."
        },
        {
          title: "Đánh giá chất lượng theo tiêu chuẩn",
          description: "Review công việc dựa trên checklist, đánh giá công bằng."
        }
      ],
      dailyChanges: {
        before: "Mỗi người làm một kiểu, khó kiểm soát",
        after: "Cùng quy trình, cùng tiêu chuẩn, dễ đánh giá và cải tiến"
      }
    },
    results: [
      {
        metric: "Chất lượng dịch vụ",
        value: "Đồng đều hơn",
        description: "Cùng tiêu chuẩn cho mọi khách hàng"
      },
      {
        metric: "Thời gian tiếp quản khách mới",
        value: "Giảm 70%",
        description: "Có hồ sơ và quy trình sẵn"
      }
    ],
    keyInsight: "Chuẩn hoá quy trình giúp chất lượng không phụ thuộc vào từng cá nhân.",
    suitableFor: [
      "Công ty dịch vụ có nhiều nhân viên",
      "Phục vụ nhiều khách hàng cùng loại",
      "Muốn đảm bảo chất lượng đồng đều"
    ],
    notSuitableFor: [
      "Làm việc solo hoặc 2-3 người",
      "Mỗi khách hàng hoàn toàn khác nhau"
    ],
    ctaQuestion: "Công ty của bạn có gặp vấn đề chất lượng không đồng đều?"
  },
  {
    id: "24",
    slug: "dich-vu-tu-van-quan-ly-du-an",
    industry: "service",
    industryLabel: "Dịch vụ",
    scale: "10to30",
    scaleLabel: "10-30 nhân sự",
    mainProblem: "department-coordination",
    mainProblemLabel: "Phối hợp phòng ban",
    title: "Công ty tư vấn: Dự án chậm tiến độ vì đợi nhau giữa các team",
    summary: "Công ty tư vấn 25 nhân sự, dự án hay bị chậm vì các team không biết ai đang đợi ai, thông tin không đồng bộ.",
    context: {
      businessType: "Công ty tư vấn chiến lược",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự",
      situation: "Mỗi dự án có nhiều team tham gia: research, strategy, design. Phối hợp phức tạp."
    },
    painPoints: [
      "Không biết team nào đang block ai",
      "Deadline dự án hay bị trễ",
      "Họp nhiều nhưng vẫn không rõ ai làm gì",
      "Khách hàng phàn nàn về tiến độ"
    ],
    previousAttempts: [
      "Họp sync hàng ngày",
      "Dùng Slack/Teams để trao đổi",
      "Giao việc qua email"
    ],
    previousAttemptsResult: "Họp nhiều nhưng vẫn miss thông tin. Message bị trôi. Email không ai đọc.",
    rootCauses: [
      {
        title: "Không có tầm nhìn tổng thể về tiến độ dự án",
        description: "Mỗi team chỉ biết việc của mình, không biết tổng thể.",
        consequence: "Không phát hiện được bottleneck kịp thời."
      },
      {
        title: "Dependency giữa các team không được quản lý",
        description: "Không biết ai đang đợi ai, ai cần deliver trước.",
        consequence: "Dự án bị chậm vì đợi nhau."
      }
    ],
    solution: {
      approach: "Thiết lập hệ thống quản lý dự án với tầm nhìn tổng thể và dependency rõ ràng.",
      steps: [
        {
          title: "Vẽ lại luồng dự án với dependency",
          description: "Xác định rõ việc nào cần hoàn thành trước khi việc khác bắt đầu."
        },
        {
          title: "Tạo board quản lý tổng thể",
          description: "Mọi người đều thấy tiến độ tất cả các phần của dự án."
        },
        {
          title: "Cảnh báo khi có bottleneck",
          description: "Tự động thông báo khi có việc bị block hoặc sắp trễ deadline."
        }
      ],
      dailyChanges: {
        before: "Họp sync để hỏi ai đang làm gì, vẫn bị miss",
        after: "Mở board thấy ngay tiến độ, chỉ họp khi có vấn đề cần giải quyết"
      }
    },
    results: [
      {
        metric: "Thời gian họp",
        value: "Giảm 50%",
        description: "Thông tin minh bạch, không cần hỏi"
      },
      {
        metric: "Dự án trễ deadline",
        value: "Giảm 60%",
        description: "Phát hiện bottleneck sớm"
      }
    ],
    keyInsight: "Minh bạch thông tin giúp phối hợp hiệu quả hơn mà không cần họp nhiều.",
    suitableFor: [
      "Công ty có dự án nhiều team tham gia",
      "Hay bị trễ deadline vì đợi nhau",
      "Muốn giảm thời gian họp"
    ],
    notSuitableFor: [
      "Dự án nhỏ, 1-2 người làm",
      "Công việc độc lập, không phụ thuộc nhau"
    ],
    ctaQuestion: "Dự án của bạn có hay bị chậm vì đợi nhau?"
  }
];
