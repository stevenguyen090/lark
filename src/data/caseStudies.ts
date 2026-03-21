// Case Study data types và sample data
// Tuân thủ quy chuẩn Solution Mapping của Lark Consult
// v2 — đã làm rõ: số liệu cụ thể, bối cảnh rõ ràng hơn, pain dễ nhận ra hơn với CEO

export interface CaseStudy {
  id: string;
  slug: string;
  industry: "retail" | "manufacturing" | "service" | "fitness" | "other";
  industryLabel: string;
  scale: "under10" | "10to30" | "30to100" | "over100";
  scaleLabel: string;
  mainProblem: "task-management" | "department-coordination" | "ceo-reporting" | "onboarding";
  mainProblemLabel: string;
  title: string;
  summary: string;
  context: {
    businessType: string;
    industry: string;
    scale: string;
    situation: string;
  };
  painPoints: string[];
  previousAttempts: string[];
  previousAttemptsResult: string;
  rootCauses: {
    title: string;
    description: string;
    consequence: string;
  }[];
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
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  keyInsight: string;
  suitableFor: string[];
  notSuitableFor: string[];
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
    title: "Chủ phòng tập có phần mềm quản lý — nhưng vẫn phải xử lý lịch PT thủ công mỗi ngày",
    summary: "Phòng tập 15 nhân sự đang dùng phần mềm quản lý hội viên, nhưng chủ phòng vẫn mất 1–2 tiếng mỗi ngày để sắp xếp lịch PT, xử lý yêu cầu đổi ca và trả lời câu hỏi từ nhân viên — vì phần mềm không kết nối với cách vận hành thực tế.",
    context: {
      businessType: "Phòng tập thể hình – yoga – PT",
      industry: "Fitness",
      scale: "10–30 nhân sự (PT, lễ tân, quản lý ca)",
      situation: "Phòng tập đã vượt giai đoạn khởi nghiệp, có lượng hội viên ổn định 200–400 người, nhưng chưa có hệ thống vận hành nội bộ đủ để chủ phòng tập thoát khỏi công việc hàng ngày."
    },
    painPoints: [
      "PT và lễ tân vẫn hỏi lịch qua Zalo — trung bình 8–12 tin nhắn/ngày chỉ để xác nhận ca làm",
      "Chủ phòng tập phải trả lời trực tiếp vì không có quy trình nào tự động hóa việc này",
      "Cuối tháng không biết PT nào dạy bao nhiêu buổi để tính thưởng — phải đếm lại thủ công",
      "Đi vắng 3 ngày là lịch rối: 2–3 buổi bị trùng, 1–2 buổi bị bỏ quên"
    ],
    previousAttempts: [
      "Phần mềm quản lý hội viên (chủ yếu dùng để thu phí, không dùng cho lịch PT nội bộ)",
      "File Excel theo dõi lịch ca — nhưng chỉ chủ phòng tập mới cập nhật được",
      "Nhóm Zalo để thông báo lịch — thông tin bị trôi, nhân viên hay bỏ sót"
    ],
    previousAttemptsResult: "Mỗi công cụ giải quyết một mảnh nhỏ nhưng không kết nối với nhau. Nhân viên vẫn phải hỏi lại chủ phòng tập vì không có nơi nào chứa đủ thông tin. Sau 1–2 tháng thử, mọi thứ quay về cũ vì chỉ có chủ phòng tập dùng, nhân viên không có lý do để vào hệ thống.",
    rootCauses: [
      {
        title: "Dữ liệu vận hành bị phân mảnh ở 3–4 nơi khác nhau",
        description: "Lịch PT nằm ở Excel của chủ phòng. Yêu cầu đổi ca nằm trong Zalo. Thông tin hội viên nằm ở phần mềm. Không có nơi nào chứa đủ để nhân viên tự tra cứu.",
        consequence: "Mọi câu hỏi đều phải hỏi chủ phòng tập — người duy nhất biết toàn bộ thông tin. Chủ phòng tập trở thành nút cổ chai của chính doanh nghiệp mình."
      },
      {
        title: "Quy trình làm việc chưa được định nghĩa rõ — mỗi người tự hiểu theo cách riêng",
        description: "Không có định nghĩa cụ thể: khi hội viên muốn đổi lịch thì ai xử lý, theo bước nào, đầu ra là gì. PT làm khác lễ tân, lễ tân làm khác chủ phòng tập.",
        consequence: "Khi có vấn đề, không ai biết đây là việc của ai. Mọi thứ đổ về chủ phòng tập."
      }
    ],
    solution: {
      approach: "Thay vì thêm công cụ mới, Lark Consult tập trung vào việc định nghĩa lại 3 luồng vận hành cốt lõi — rồi mới kết nối công cụ vào đúng chỗ.",
      steps: [
        {
          title: "Định nghĩa 3 luồng vận hành cốt lõi",
          description: "Luồng 1: Quản lý lịch PT và ca làm. Luồng 2: Chăm sóc và theo dõi hội viên. Luồng 3: Báo cáo vận hành hàng ngày cho chủ phòng tập. Mỗi luồng có người chịu trách nhiệm rõ, bước thực hiện cụ thể, đầu ra có thể kiểm tra được."
        },
        {
          title: "Kết nối công cụ vào đúng luồng",
          description: "Lịch PT được tập trung vào một hệ thống — tất cả PT và lễ tân đều thấy, không cần hỏi lại. Thông báo ca làm được gửi tự động trước 24 giờ. Hội viên sắp hết gói tập được đánh dấu để lễ tân chủ động liên hệ."
        },
        {
          title: "Đo hiệu quả sau 4 tuần đầu",
          description: "Theo dõi: số lần nhân viên phải nhắn hỏi chủ phòng tập trong ngày, số buổi bị trùng hoặc bị bỏ quên, thời gian chủ phòng tập dành cho việc điều phối lịch."
        }
      ],
      dailyChanges: {
        before: "Chủ phòng tập mở điện thoại buổi sáng: 6 tin nhắn Zalo từ PT và lễ tân hỏi lịch hôm nay. Phải trả lời từng người trước 9 giờ.",
        after: "PT và lễ tân mở app thấy lịch hôm nay của mình. Chủ phòng tập mở dashboard thấy ngay ca nào đủ người, ca nào cần xử lý — không cần ai hỏi."
      }
    },
    results: [
      {
        metric: "Số tin nhắn hỏi lịch mỗi ngày",
        value: "Giảm từ ~10 xuống còn 1–2",
        description: "Nhân viên tự tra cứu được thay vì hỏi chủ phòng tập"
      },
      {
        metric: "Thời gian chủ phòng tập dành cho điều phối lịch",
        value: "Giảm 60–70%",
        description: "Từ 1–2 tiếng/ngày xuống còn 20–30 phút để xử lý ngoại lệ"
      },
      {
        metric: "Buổi bị trùng hoặc bỏ quên",
        value: "Giảm xuống gần 0",
        description: "Hệ thống cảnh báo tự động khi có xung đột lịch"
      }
    ],
    keyInsight: "Vấn đề không phải là thiếu phần mềm. Vấn đề là thông tin vận hành chỉ tồn tại trong đầu một người — và người đó là chủ phòng tập. Khi thông tin được đưa ra hệ thống chung, nhân viên tự làm được mà không cần hỏi.",
    suitableFor: [
      "Phòng tập 10–30 nhân sự, có lượng hội viên ổn định từ 150 người trở lên",
      "Chủ phòng tập đang dành hơn 1 tiếng/ngày để xử lý lịch và điều phối nội bộ",
      "Đã có công cụ nhưng công cụ không giảm được tải cho chủ phòng tập"
    ],
    notSuitableFor: [
      "Phòng tập mới mở, chưa có quy trình vận hành nào để chuẩn hóa",
      "Chủ phòng tập muốn có kết quả ngay mà không tham gia vào giai đoạn thiết kế quy trình"
    ],
    ctaQuestion: "Trong một ngày làm việc bình thường, bạn nhận bao nhiêu tin nhắn từ nhân viên hỏi về lịch và công việc?"
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
    title: "Chuỗi 3 phòng tập: Mỗi cơ sở vận hành theo cách riêng — chủ chuỗi không so sánh được hiệu quả",
    summary: "Chuỗi 3 phòng tập với 40 nhân sự, doanh thu tổng ổn định nhưng chủ chuỗi không biết cơ sở nào đang hoạt động tốt, cơ sở nào đang có vấn đề — vì mỗi nơi báo cáo theo format khác nhau và không có chuẩn chung.",
    context: {
      businessType: "Chuỗi phòng tập gym – yoga",
      industry: "Fitness",
      scale: "30–100 nhân sự, 3 cơ sở",
      situation: "Chủ chuỗi muốn mở thêm cơ sở thứ 4, nhưng nhận ra rằng mình không thực sự kiểm soát được 3 cơ sở hiện tại — chỉ biết mọi thứ đang 'ổn' vì chưa có sự cố nghiêm trọng."
    },
    painPoints: [
      "Mỗi quản lý cơ sở xếp lịch PT theo cách riêng — không thể so sánh năng suất giữa các cơ sở",
      "Muốn biết cơ sở nào đang kém hơn phải đến tận nơi hoặc gọi điện hỏi — mất nửa ngày",
      "Khi một PT giỏi nghỉ, kiến thức và cách làm việc của họ biến mất theo — không có tài liệu nào",
      "Mở cơ sở mới đồng nghĩa với việc phải đào tạo lại từ đầu — không có chuẩn nào để nhân rộng"
    ],
    previousAttempts: [
      "Mỗi cơ sở dùng phần mềm quản lý hội viên riêng — dữ liệu không thể tổng hợp",
      "Họp online hàng tuần — chủ yếu là nghe báo cáo miệng, không có số liệu cụ thể",
      "Yêu cầu mỗi cơ sở gửi file Excel tổng hợp cuối tháng — format khác nhau, mất 2–3 tiếng để so sánh"
    ],
    previousAttemptsResult: "Chủ chuỗi có dữ liệu nhưng không so sánh được vì không đồng nhất. Không biết cơ sở nào đang dưới chuẩn cho đến khi hội viên phàn nàn hoặc doanh thu giảm rõ rệt — lúc đó thường đã chậm 1–2 tháng.",
    rootCauses: [
      {
        title: "Không có quy trình chuẩn chung — mỗi quản lý xây dựng cách làm riêng",
        description: "Khi mở cơ sở mới, chủ chuỗi giao quyền cho quản lý tự vận hành. Không có playbook, không có checklist chuẩn — mỗi người làm theo kinh nghiệm cá nhân.",
        consequence: "Không thể so sánh hiệu quả giữa các cơ sở. Không nhận ra vấn đề cho đến khi nó đã nghiêm trọng."
      },
      {
        title: "Dữ liệu không liên thông — không có bức tranh tổng thể",
        description: "Ba cơ sở là ba ốc đảo thông tin riêng biệt. Muốn biết tổng hợp phải làm thủ công.",
        consequence: "Chủ chuỗi quản lý bằng cảm giác, không bằng số liệu. Quyết định đầu tư thiếu căn cứ."
      }
    ],
    solution: {
      approach: "Chuẩn hóa quy trình trước — bắt đầu từ cơ sở vận hành tốt nhất, đo hiệu quả, rồi mới nhân rộng sang các cơ sở còn lại.",
      steps: [
        {
          title: "Xây dựng quy trình chuẩn dựa trên cơ sở tốt nhất",
          description: "Ghi lại cách vận hành của cơ sở đang cho kết quả tốt nhất — lịch PT, quy trình chăm sóc hội viên, cách báo cáo. Đây là chuẩn để nhân rộng, không phải tự sáng tác."
        },
        {
          title: "Triển khai thử tại 1 cơ sở yếu hơn trong 4 tuần",
          description: "Chọn cơ sở đang có vấn đề rõ nhất, áp dụng quy trình chuẩn, đo kết quả cụ thể: tỷ lệ hội viên gia hạn, số buổi PT hoàn thành, phản hồi của nhân viên."
        },
        {
          title: "Kết nối dữ liệu về một dashboard tổng hợp",
          description: "Sau khi 3 cơ sở dùng cùng quy trình và format, dữ liệu có thể so sánh được. Chủ chuỗi nhìn vào một màn hình thấy ngay cơ sở nào đang tốt, cơ sở nào cần can thiệp."
        }
      ],
      dailyChanges: {
        before: "Thứ Hai. Chủ chuỗi gọi điện cho 3 quản lý hỏi tuần qua thế nào. Nghe 3 báo cáo theo kiểu khác nhau, không so sánh được, không biết nên tập trung vào đâu.",
        after: "Mở dashboard lúc 8 giờ sáng: cơ sở 2 có tỷ lệ gia hạn giảm 8% so với tuần trước. Gọi thẳng cho quản lý cơ sở 2 để hỏi nguyên nhân — không cần hỏi 3 nơi."
      }
    },
    results: [
      {
        metric: "Thời gian chủ chuỗi dành để nắm tình hình 3 cơ sở",
        value: "Giảm từ 4–5 tiếng/tuần xuống còn 1 tiếng",
        description: "Không cần họp báo cáo — chỉ can thiệp khi dashboard báo có vấn đề"
      },
      {
        metric: "Tỷ lệ gia hạn hội viên sau khi chuẩn hóa quy trình chăm sóc",
        value: "Tăng 12–15%",
        description: "Hội viên sắp hết hạn được nhắc đúng thời điểm, không bị bỏ sót"
      }
    ],
    keyInsight: "Muốn quản lý chuỗi từ xa, trước tiên phải làm cho 3 cơ sở nói cùng một ngôn ngữ — cùng quy trình, cùng format số liệu. Sau đó mới kết nối công cụ có ý nghĩa.",
    suitableFor: [
      "Chuỗi phòng tập 2–5 cơ sở đang vận hành ổn định nhưng chủ chuỗi chưa so sánh được hiệu quả giữa các cơ sở",
      "Đang lên kế hoạch mở thêm cơ sở mới và muốn có mô hình để nhân rộng"
    ],
    notSuitableFor: [
      "Chỉ có 1 cơ sở hoặc chuỗi chưa đủ ổn định để chuẩn hóa quy trình",
      "Các cơ sở hoạt động hoàn toàn độc lập, không có thương hiệu chung"
    ],
    ctaQuestion: "Nếu cơ sở kém nhất của bạn đang hoạt động dưới chuẩn 20% — bạn sẽ biết vào lúc nào?"
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
    title: "Studio yoga 8 người: Mỗi lần tuyển nhân viên mới, chủ studio mất 2–3 tuần kèm cặp trực tiếp",
    summary: "Studio yoga 8 nhân sự, mỗi khi có người mới chủ studio phải kèm trực tiếp từ 2 đến 3 tuần. Vấn đề không phải là nhân viên mới không giỏi — mà là không có tài liệu nào để họ tự học được.",
    context: {
      businessType: "Studio yoga chuyên biệt",
      industry: "Fitness",
      scale: "Dưới 10 nhân sự (2–3 HLV, 1–2 lễ tân, chủ studio)",
      situation: "Chủ studio kiêm nhiệm HLV chính, quản lý vận hành và chăm sóc hội viên. Không có thời gian để đào tạo bài bản, nhưng cũng không thể để nhân viên mới tự bơi."
    },
    painPoints: [
      "Mỗi đợt tuyển người mới, chủ studio mất 2–3 tuần dành 2–3 tiếng/ngày để kèm cặp — lịch dạy bị ảnh hưởng",
      "Nhân viên mới vẫn hỏi lại những câu giống nhau sau 2 tuần: giờ mở cửa, quy trình đón khách, cách xử lý thanh toán",
      "Khi nhân viên cũ nghỉ, kiến thức của họ về khách quen, quy trình đặc biệt biến mất theo — không được ghi lại ở đâu",
      "Chất lượng phục vụ phụ thuộc vào từng người: nhân viên cũ phục vụ tốt, nhân viên mới hay sai sót trong tháng đầu"
    ],
    previousAttempts: [
      "Kèm cặp trực tiếp 1-1 — tốn thời gian nhất nhưng vẫn là cách duy nhất đang dùng",
      "Viết ghi chú trong sổ tay — nhân viên không đọc, hoặc đọc xong không nhớ",
      "Nhắn Zalo khi cần hướng dẫn — thông tin bị trôi, lần sau vẫn hỏi lại câu đó"
    ],
    previousAttemptsResult: "Cách nào cũng phụ thuộc vào chủ studio phải có mặt và phản hồi. Không có hệ thống nào để nhân viên mới tự tra cứu được khi cần. Sau khi kèm xong, nếu gặp tình huống lạ lại phải hỏi lại từ đầu.",
    rootCauses: [
      {
        title: "Kiến thức vận hành chỉ tồn tại trong đầu người — không được tài liệu hóa",
        description: "Chủ studio biết hết mọi thứ: khách nào hay đổi lịch, quy trình xử lý gói dùng thử, cách nói chuyện với khách khó. Nhưng không có gì được viết ra.",
        consequence: "Mỗi nhân viên mới phải học lại từ đầu qua kèm cặp. Khi chủ studio vắng mặt, chất lượng phục vụ giảm."
      },
      {
        title: "Không có lộ trình đào tạo rõ ràng — nhân viên mới không biết mình đang học đến đâu",
        description: "Không có checklist tuần 1 làm gì, tuần 2 học gì, bao giờ thì được tự xử lý. Nhân viên mới không biết mình đang tiến bộ hay không.",
        consequence: "Thiếu động lực, cảm giác mơ hồ, tỷ lệ nghỉ việc trong 60 ngày đầu cao hơn bình thường."
      }
    ],
    solution: {
      approach: "Tài liệu hóa cách làm việc hiện tại trước — không cần phức tạp, chỉ cần nhân viên mới tự tra cứu được mà không phải hỏi.",
      steps: [
        {
          title: "Ghi lại 10 tình huống thường gặp nhất trong tuần đầu",
          description: "Phỏng vấn nhân viên kỳ cựu: những câu hỏi nào nhân viên mới hay hỏi nhất? Ghi lại câu trả lời theo dạng checklist và hướng dẫn từng bước — ảnh hoặc video ngắn nếu cần."
        },
        {
          title: "Tạo lộ trình onboarding 10 ngày",
          description: "Ngày 1–3: đọc tài liệu và quan sát. Ngày 4–6: thực hành có người hỗ trợ. Ngày 7–10: tự làm, chỉ hỏi khi thật sự cần. Mỗi ngày có checklist rõ ràng — nhân viên tự biết hôm nay cần làm gì."
        },
        {
          title: "Cập nhật tài liệu khi có tình huống mới",
          description: "Mỗi lần chủ studio giải quyết một tình huống không có trong tài liệu, bổ sung luôn. Dần dần tài liệu ngày càng đầy đủ, kèm cặp ngày càng ít đi."
        }
      ],
      dailyChanges: {
        before: "Nhân viên mới vào studio — chủ studio phải sát cánh cả ngày, dạy từng việc nhỏ, buổi tối trả lời thêm 3–4 tin nhắn hỏi về ngày mai.",
        after: "Nhân viên mới có tài liệu tự đọc trước. Ngày đầu quan sát, ngày thứ 3 bắt đầu thực hành. Chủ studio chỉ cần kiểm tra cuối ngày — không cần theo sát từng bước."
      }
    },
    results: [
      {
        metric: "Thời gian chủ studio dành để kèm cặp nhân viên mới",
        value: "Giảm từ 2–3 tiếng/ngày xuống còn 30 phút",
        description: "Nhân viên tự học từ tài liệu, chỉ hỏi khi thật sự cần giải thích thêm"
      },
      {
        metric: "Thời gian để nhân viên mới làm việc độc lập",
        value: "Giảm từ 3 tuần xuống còn 10 ngày",
        description: "Lộ trình rõ ràng giúp nhân viên mới tự tin hơn và tiến bộ nhanh hơn"
      }
    ],
    keyInsight: "Vấn đề không phải là nhân viên mới chậm học. Vấn đề là không có gì để học từ — ngoài việc hỏi trực tiếp chủ studio. Khi có tài liệu, nhân viên mới không cần được dạy lại những thứ đã có sẵn.",
    suitableFor: [
      "Studio nhỏ dưới 10 người, chủ studio đang phải kèm cặp trực tiếp mỗi khi tuyển người mới",
      "Tuyển nhân viên tương đối thường xuyên — 2 lần/năm trở lên"
    ],
    notSuitableFor: [
      "Studio có nhân sự cực kỳ ổn định, ít khi tuyển người mới",
      "Công việc không có quy trình chuẩn — mỗi buổi học hoàn toàn khác nhau tùy HLV"
    ],
    ctaQuestion: "Nếu bạn nghỉ 1 tuần không liên lạc được — nhân viên mới có đủ thông tin để tự vận hành không?"
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
    title: "Gym 20 nhân sự: Chủ gym chỉ biết doanh thu thực tế vào cuối tháng — khi đã quá muộn để can thiệp",
    summary: "Phòng gym 20 nhân sự, có lượng hội viên ổn định, nhưng số liệu kinh doanh chỉ xuất hiện khi kế toán tổng hợp vào cuối tháng. Đến khi biết tháng đó đang thấp hơn kỳ vọng — đã hết cơ hội để điều chỉnh.",
    context: {
      businessType: "Phòng gym kết hợp PT cá nhân",
      industry: "Fitness",
      scale: "10–30 nhân sự, 300–500 hội viên đang hoạt động",
      situation: "Gym đã vận hành được 3 năm, có dòng tiền ổn định. Chủ gym muốn phát triển tiếp nhưng không nắm được đủ thông tin để ra quyết định đúng lúc."
    },
    painPoints: [
      "Hỏi lễ tân 'hôm nay bán được gì?' — lễ tân nói miệng, không có số liệu chính xác",
      "Gói tập nào đang bán chạy, gói nào ế — chỉ biết được sau khi kế toán làm báo cáo tháng",
      "Hội viên sắp hết gói không ai theo dõi — đến khi biết thì đã nghỉ 2–3 tuần",
      "Không có cách nào biết hiệu suất của từng PT: ai đang dạy nhiều, ai đang ít, ai có hội viên quay lại"
    ],
    previousAttempts: [
      "Nhờ lễ tân ghi sổ bán hàng — hay bị bỏ qua khi bận, số liệu thiếu và không đáng tin",
      "File Excel kế toán tổng hợp cuối tháng — đầy đủ nhưng luôn chậm 30 ngày",
      "Hỏi miệng nhân viên cuối ngày — mỗi người nhớ một kiểu, không nhất quán"
    ],
    previousAttemptsResult: "Chủ gym có số liệu nhưng luôn là số liệu của quá khứ. Không có cách nào phát hiện xu hướng đang xảy ra — chỉ biết khi kết quả đã hiện ra rõ ràng.",
    rootCauses: [
      {
        title: "Không có quy trình ghi nhận doanh thu chuẩn — mỗi người ghi theo cách riêng",
        description: "Lễ tân A ghi vào sổ, lễ tân B ghi vào điện thoại, lễ tân C nhớ trong đầu. Không có format chung, không có thời điểm ghi cố định.",
        consequence: "Số liệu không đủ và không nhất quán. Kế toán phải đi gom từng nguồn, mất 2–3 ngày mới ra được báo cáo tháng."
      },
      {
        title: "Không có báo cáo tự động — phụ thuộc hoàn toàn vào con người để tổng hợp",
        description: "Muốn biết doanh thu hôm qua phải gọi điện hoặc chờ kế toán. Không có gì tự động gửi thông tin về cho chủ gym.",
        consequence: "Chủ gym không có thông tin kịp thời. Phát hiện vấn đề chậm 3–4 tuần."
      }
    ],
    solution: {
      approach: "Chuẩn hóa điểm ghi nhận doanh thu (ai ghi, khi nào, ghi gì) — sau đó tự động tổng hợp thành báo cáo gửi về cho chủ gym mỗi ngày.",
      steps: [
        {
          title: "Xác định 3 chỉ số chủ gym cần biết hàng ngày",
          description: "Doanh thu trong ngày (gói tập mới + gia hạn + PT), số hội viên sắp hết gói trong 7 ngày tới, số buổi PT đã diễn ra. Chỉ 3 con số — đủ để ra quyết định, không quá nhiều để nhân viên ngại nhập."
        },
        {
          title: "Thiết lập điểm nhập liệu cố định cho lễ tân",
          description: "Cuối mỗi ca, lễ tân nhập số liệu vào form chuẩn — mất 3–5 phút. Không cần phần mềm phức tạp, chỉ cần nhất quán về thời điểm và format."
        },
        {
          title: "Tự động tổng hợp và gửi báo cáo cho chủ gym",
          description: "Mỗi sáng chủ gym nhận tin nhắn tóm tắt: doanh thu hôm qua, so sánh với tuần trước, danh sách hội viên cần liên hệ hôm nay. Không cần mở Excel, không cần gọi hỏi ai."
        }
      ],
      dailyChanges: {
        before: "28 tháng. Kế toán gõ cửa: 'Báo cáo tháng này xong rồi anh ơi.' Chủ gym nhìn vào số — tháng này doanh thu thấp hơn tháng trước 18%. Không còn cơ hội làm gì được nữa.",
        after: "Ngày 10 tháng. Báo cáo tự động gửi về: tuần này doanh thu thấp hơn tuần trước 12%, có 23 hội viên sắp hết gói chưa liên hệ. Chủ gym gọi cho lễ tân: 'Ưu tiên liên hệ danh sách này trước cuối tuần.'"
      }
    },
    results: [
      {
        metric: "Độ trễ thông tin từ lúc có giao dịch đến khi chủ gym biết",
        value: "Từ 28 ngày xuống còn 1 ngày",
        description: "Báo cáo tự động tổng hợp và gửi mỗi sáng"
      },
      {
        metric: "Tỷ lệ hội viên gia hạn gói tập",
        value: "Tăng 10–18%",
        description: "Hội viên sắp hết gói được chủ động liên hệ đúng thời điểm, không để họ tự nghỉ"
      }
    ],
    keyInsight: "Khi biết sớm, còn kịp xử lý. Khi biết muộn, chỉ còn ghi nhận. Chủ gym không cần phần mềm phức tạp — chỉ cần 3 con số đúng, gửi đúng lúc, để ra được quyết định đúng ngày hôm đó.",
    suitableFor: [
      "Gym 10–30 nhân sự, doanh thu từ nhiều nguồn (gói tập, PT, dịch vụ phụ)",
      "Chủ gym đang phụ thuộc vào báo cáo cuối tháng để biết tình hình kinh doanh"
    ],
    notSuitableFor: [
      "Gym mới mở, chưa có dòng tiền ổn định để theo dõi xu hướng",
      "Chỉ có 1–2 nguồn doanh thu đơn giản, chủ gym có thể tự theo dõi hàng ngày"
    ],
    ctaQuestion: "Nếu doanh thu tháng này đang thấp hơn 15% so với tháng trước — bạn muốn biết vào ngày nào?"
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
    title: "PT freelance: Nhận lịch qua Zalo, dạy 6–8 học viên/ngày — và vẫn thường xuyên bị trùng hoặc quên",
    summary: "PT tự do đang dạy 6–8 học viên mỗi ngày, nhận lịch qua Zalo và ghi vào điện thoại. Trùng lịch xảy ra 2–3 lần/tháng, học viên quên buổi tập 4–5 lần/tháng — mỗi sự cố nhỏ đều ảnh hưởng đến uy tín.",
    context: {
      businessType: "Personal Trainer tự do, dạy tại phòng tập hoặc nhà học viên",
      industry: "Fitness",
      scale: "Cá nhân, 20–35 học viên đang hoạt động",
      situation: "PT đã có lượng khách ổn định và muốn tăng thêm, nhưng đang cảm thấy quản lý lịch ngày càng phức tạp và mất thời gian."
    },
    painPoints: [
      "Học viên nhắn Zalo đặt lịch — PT đang dạy không thể xem ngay, đến khi thấy đã nhận nhầm",
      "Trùng lịch xảy ra trung bình 2–3 lần/tháng: phải gọi điện xin lỗi, dời lịch — học viên không hài lòng",
      "Học viên quên buổi tập 4–5 lần/tháng — PT chờ 15–20 phút rồi mới biết học viên không đến",
      "Cuối tháng muốn tính số buổi đã dạy để lập hóa đơn — phải ngồi đếm lại từng tin nhắn Zalo"
    ],
    previousAttempts: [
      "Ghi lịch vào ứng dụng Calendar trên điện thoại — nhưng học viên không thấy được, vẫn phải nhắn tin xác nhận",
      "Nhờ học viên nhắc trước 1 ngày — một số nhớ, một số quên, vẫn không đủ",
      "Ghi vào sổ tay — quên mang theo khi đi dạy ở nơi khác"
    ],
    previousAttemptsResult: "Không có giải pháp nào giải quyết được gốc rễ: học viên đặt lịch qua kênh PT không theo dõi được liên tục, và không có ai nhắc cả hai bên trước buổi tập.",
    rootCauses: [
      {
        title: "Lịch tập nằm rải rác ở nhiều kênh — không có nguồn dữ liệu duy nhất",
        description: "Tin nhắn Zalo, ghi chú điện thoại, sổ tay — mỗi nơi có một phần thông tin. Khi muốn biết ngày mai có mấy buổi phải kiểm tra 3–4 nơi.",
        consequence: "Dễ bỏ sót, dễ trùng. PT luôn trong trạng thái lo lắng không chắc lịch có chính xác không."
      },
      {
        title: "Không có cơ chế nhắc lịch tự động cho cả hai bên",
        description: "PT phải tự nhớ hoặc chủ động nhắn nhắc từng học viên — việc này mất 20–30 phút mỗi ngày và vẫn hay bị bỏ sót.",
        consequence: "Học viên quên buổi tập, PT chờ lãng phí thời gian. Uy tín bị ảnh hưởng dù lỗi không hoàn toàn của PT."
      }
    ],
    solution: {
      approach: "Tập trung toàn bộ lịch về một hệ thống, học viên tự xác nhận lịch, cả hai bên đều được nhắc tự động.",
      steps: [
        {
          title: "Chuyển toàn bộ lịch về một nơi — không nhận lịch qua Zalo nữa",
          description: "PT gửi link đặt lịch cho học viên. Học viên chọn khung giờ trống và xác nhận — PT không cần kiểm tra Zalo liên tục."
        },
        {
          title: "Thiết lập nhắc lịch tự động cho cả hai bên",
          description: "Trước buổi tập 24 giờ và 1 giờ, học viên nhận tin nhắn nhắc. PT nhận danh sách buổi ngày hôm đó vào mỗi sáng. Không cần ai nhớ hoặc nhắn thủ công."
        },
        {
          title: "Tự động ghi nhận số buổi đã dạy",
          description: "Mỗi buổi tập được ghi nhận tự động — cuối tháng PT có báo cáo đầy đủ: tổng buổi, từng học viên, doanh thu. Không cần ngồi đếm lại."
        }
      ],
      dailyChanges: {
        before: "8 giờ tối. Một học viên nhắn Zalo hỏi 'Mai PT có rảnh 7 giờ sáng không?' PT đang dạy, không thấy tin nhắn. Học viên không nhận được trả lời, tự hiểu là không có — hôm sau không đến.",
        after: "Học viên mở link, thấy khung 7 giờ sáng còn trống, chọn và xác nhận. Cả hai bên nhận nhắc vào 7 giờ tối hôm trước. Không cần nhắn tin qua lại."
      }
    },
    results: [
      {
        metric: "Số lần trùng lịch mỗi tháng",
        value: "Từ 2–3 lần xuống còn 0",
        description: "Hệ thống tự cảnh báo khi khung giờ đã có người đặt"
      },
      {
        metric: "Số lần học viên quên buổi tập",
        value: "Giảm 80–90%",
        description: "Học viên nhận nhắc tự động trước 24 giờ và 1 giờ"
      },
      {
        metric: "Thời gian PT dành để quản lý lịch và nhắn tin",
        value: "Tiết kiệm 30–45 phút/ngày",
        description: "Không còn phải kiểm tra Zalo liên tục và nhắc lịch thủ công"
      }
    ],
    keyInsight: "PT không mất khách vì dạy kém — mà mất uy tín vì những sự cố nhỏ có thể tránh được. Trùng lịch và quên buổi là vấn đề của hệ thống, không phải vấn đề của con người.",
    suitableFor: [
      "PT freelance đang dạy từ 5 học viên/ngày trở lên",
      "Đang nhận lịch qua Zalo hoặc tin nhắn và thường xuyên bị trùng hoặc quên"
    ],
    notSuitableFor: [
      "PT chỉ có 1–2 học viên cố định, lịch tập không thay đổi",
      "PT làm việc tại một phòng tập cố định với lịch do phòng tập sắp xếp"
    ],
    ctaQuestion: "Tháng vừa rồi bạn mất bao nhiêu buổi vì học viên quên hoặc lịch bị trùng?"
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
    title: "Chuỗi 5 phòng tập: Hội viên dùng gói liên thông nhưng thông tin không đồng bộ — lễ tân mất 5 phút xác nhận mỗi lượt đến",
    summary: "Chuỗi 5 phòng tập với hơn 100 nhân sự, bán gói tập liên thông giữa các cơ sở. Khi hội viên đến cơ sở không phải nơi đăng ký, lễ tân phải gọi điện sang cơ sở kia để xác nhận — trung bình 5 phút/lượt, gây khó chịu cho cả hai bên.",
    context: {
      businessType: "Chuỗi phòng tập gym cao cấp, bán gói liên thông",
      industry: "Fitness",
      scale: "Hơn 100 nhân sự, 5 cơ sở, khoảng 2.000–3.000 hội viên",
      situation: "Chuỗi đang phát triển tốt, gói liên thông là lợi thế cạnh tranh — nhưng quy trình xác nhận thủ công đang làm mất đi trải nghiệm mà sản phẩm này hứa hẹn."
    },
    painPoints: [
      "Hội viên đến cơ sở B (không phải nơi đăng ký gói ở cơ sở A) — lễ tân phải gọi điện sang A để xác nhận: mất 3–5 phút, đôi khi không gọi được",
      "Có 15–20 lượt xác nhận chéo như vậy mỗi ngày trên toàn chuỗi — lễ tân mất 1–2 tiếng/ngày chỉ để xác nhận qua điện thoại",
      "Khi lễ tân của cơ sở A đang bận, cuộc gọi xác nhận không được bắt máy — hội viên phải đứng chờ",
      "Hội viên phàn nàn: 'Tôi trả tiền gói liên thông nhưng mỗi lần đến cơ sở khác lại phải chứng minh mình là hội viên'"
    ],
    previousAttempts: [
      "Mỗi cơ sở dùng phần mềm quản lý hội viên riêng — không kết nối được với nhau",
      "Đồng bộ dữ liệu thủ công cuối ngày qua file Excel — luôn chậm 24 giờ, thường có sai sót",
      "Yêu cầu hội viên mang thẻ thành viên vật lý — một số không mang theo, vấn đề không được giải quyết"
    ],
    previousAttemptsResult: "Vấn đề gốc rễ chưa được xử lý: dữ liệu hội viên vẫn nằm ở từng cơ sở riêng lẻ, không có cơ sở nào nhìn thấy dữ liệu của cơ sở kia theo thời gian thực.",
    rootCauses: [
      {
        title: "Hệ thống dữ liệu không liên thông — mỗi cơ sở là một ốc đảo riêng biệt",
        description: "Phần mềm của cơ sở A không nói chuyện được với phần mềm của cơ sở B. Không có database chung. Khi hội viên đến cơ sở B, lễ tân không có cách nào tra cứu gói tập của họ.",
        consequence: "Phải xác nhận thủ công qua điện thoại. Trải nghiệm kém, lãng phí nhân lực."
      },
      {
        title: "Không theo dõi được số buổi còn lại của hội viên liên thông",
        description: "Hội viên tập ở 3 cơ sở khác nhau — không cơ sở nào biết tổng số buổi đã dùng. Dễ xảy ra tình trạng hội viên dùng quá số buổi mà không ai phát hiện.",
        consequence: "Thất thoát doanh thu, tranh chấp với hội viên khi gói hết nhưng họ không biết."
      }
    ],
    solution: {
      approach: "Kết nối dữ liệu hội viên về một hệ thống trung tâm — tất cả cơ sở đọc từ cùng một nguồn, cập nhật realtime.",
      steps: [
        {
          title: "Audit và chọn hệ thống trung tâm",
          description: "Đánh giá 5 phần mềm hiện tại — chọn 1 làm master database hoặc triển khai hệ thống mới có API để kết nối. Xác định dữ liệu cần đồng bộ: thông tin hội viên, số buổi còn lại, lịch sử check-in."
        },
        {
          title: "Kết nối check-in về trung tâm",
          description: "Khi hội viên check-in ở bất kỳ cơ sở nào, thông tin được ghi nhận vào database chung ngay lập tức. Lễ tân cơ sở khác có thể tra cứu trong vòng vài giây."
        },
        {
          title: "Đào tạo lễ tân và truyền thông với hội viên",
          description: "Lễ tân tất cả 5 cơ sở được đào tạo quy trình mới. Hội viên được thông báo: từ nay chỉ cần thẻ app hoặc số điện thoại, không cần xác nhận thêm."
        }
      ],
      dailyChanges: {
        before: "Hội viên quét thẻ ở cơ sở B. Lễ tân: 'Xin lỗi anh, gói của anh đăng ký bên cơ sở A, em cần gọi xác nhận một chút.' Hội viên đứng chờ 5 phút trong khi đã muộn giờ tập.",
        after: "Hội viên quét thẻ. Màn hình hiện: '35 buổi còn lại. Lần check-in gần nhất: hôm qua tại cơ sở A.' Lễ tân: 'Mời anh vào, phòng tập ở tầng 2.'"
      }
    },
    results: [
      {
        metric: "Thời gian xác nhận hội viên liên thông",
        value: "Từ 3–5 phút xuống còn dưới 10 giây",
        description: "Thông tin có sẵn realtime, không cần gọi điện xác nhận"
      },
      {
        metric: "Số cuộc gọi xác nhận chéo mỗi ngày",
        value: "Từ 15–20 cuộc xuống còn 0",
        description: "Lễ tân tiết kiệm 1–2 tiếng/ngày, tập trung vào chăm sóc hội viên"
      },
      {
        metric: "Khiếu nại về trải nghiệm check-in",
        value: "Giảm hơn 90%",
        description: "Hội viên không còn phải chứng minh tư cách thành viên mỗi lần đến cơ sở khác"
      }
    ],
    keyInsight: "Gói liên thông là lợi thế bán hàng — nhưng nếu trải nghiệm sử dụng kém hơn gói thường, hội viên sẽ không gia hạn. Kết nối dữ liệu không chỉ giải quyết vấn đề vận hành, mà còn bảo vệ giá trị của sản phẩm đang bán.",
    suitableFor: [
      "Chuỗi phòng tập từ 3 cơ sở trở lên đang bán gói liên thông",
      "Đang có khiếu nại từ hội viên về trải nghiệm check-in hoặc xác nhận thông tin"
    ],
    notSuitableFor: [
      "Mỗi cơ sở hoạt động hoàn toàn độc lập, không có gói liên thông",
      "Chưa có ngân sách để tích hợp hệ thống — cần giải quyết ưu tiên khác trước"
    ],
    ctaQuestion: "Mỗi ngày lễ tân của bạn mất bao nhiêu thời gian để xác nhận thông tin hội viên qua điện thoại giữa các cơ sở?"
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
    title: "Chuỗi 5 cửa hàng bán lẻ: CEO vẫn phải gọi điện hỏi doanh số mỗi sáng vì không có báo cáo tổng hợp tự động",
    summary: "Chuỗi bán lẻ 5 cửa hàng, mỗi cửa hàng có quản lý riêng và phần mềm POS riêng. CEO muốn biết tình hình kinh doanh tổng thể nhưng phải tự gọi điện từng nơi — mất 45–60 phút mỗi sáng chỉ để có con số hôm qua.",
    context: {
      businessType: "Chuỗi bán lẻ thời trang, 5 cửa hàng tại 3 thành phố",
      industry: "Bán lẻ",
      scale: "30–100 nhân sự, doanh thu tổng 3–8 tỷ/tháng",
      situation: "CEO đang mở rộng chuỗi, cần ra quyết định nhanh về tồn kho, khuyến mãi và nhân sự — nhưng luôn thiếu dữ liệu kịp thời."
    },
    painPoints: [
      "Mỗi sáng CEO gọi điện cho 5 quản lý để hỏi doanh số hôm qua — mất 45–60 phút, đôi khi không gọi được hết",
      "5 cửa hàng dùng 5 file Excel khác nhau — tổng hợp tốn 2–3 tiếng, số liệu thường không khớp nhau",
      "Không biết cửa hàng nào đang dưới target cho đến khi đã trễ 1–2 tuần",
      "Ra quyết định bổ sung hàng dựa trên cảm giác — không có dữ liệu tồn kho thực tế"
    ],
    previousAttempts: [
      "Yêu cầu mỗi cửa hàng gửi file Excel tổng hợp mỗi tối — hay bị quên hoặc gửi chậm",
      "Nhóm Zalo báo cáo doanh số hàng ngày — thông tin bị trôi, không thể so sánh theo thời gian",
      "Phần mềm POS của từng cửa hàng — có số liệu nhưng không kết nối được với nhau"
    ],
    previousAttemptsResult: "Dữ liệu tồn tại nhưng nằm rải rác ở 5 hệ thống riêng lẻ. CEO có thể tổng hợp được nhưng mất thời gian và luôn chậm ít nhất 1 ngày. Không có cách nào phát hiện sớm cửa hàng nào đang có vấn đề.",
    rootCauses: [
      {
        title: "Không có nguồn dữ liệu thống nhất — 5 cửa hàng là 5 ốc đảo thông tin riêng",
        description: "Mỗi cửa hàng dùng phần mềm POS khác nhau, báo cáo theo format khác nhau. Không có hệ thống nào tự động tổng hợp dữ liệu từ tất cả cửa hàng.",
        consequence: "CEO muốn có bức tranh tổng thể phải làm thủ công mỗi ngày — mất thời gian và vẫn không thể realtime."
      },
      {
        title: "Quy trình báo cáo phụ thuộc vào ý thức của từng quản lý",
        description: "Không có quy trình cứng — ai nhớ thì gửi, ai bận thì không. CEO phải chạy theo để đòi số liệu.",
        consequence: "Thông tin đến không đều, không đầy đủ, không kịp thời để ra quyết định."
      }
    ],
    solution: {
      approach: "Chuẩn hóa format báo cáo và điểm nhập liệu — sau đó tự động tổng hợp và gửi về cho CEO mỗi ngày mà không cần ai nhớ.",
      steps: [
        {
          title: "Xác định 5 chỉ số CEO cần biết hàng ngày",
          description: "Doanh thu từng cửa hàng và tổng chuỗi, so sánh với cùng ngày tuần trước, tốp sản phẩm bán chạy, tồn kho các mã hàng đang thấp. Chỉ 5 con số — đủ để ra quyết định trong ngày."
        },
        {
          title: "Thiết lập điểm nhập liệu chuẩn cho quản lý cửa hàng",
          description: "Cuối ngày, quản lý nhập số liệu vào form chung — mất 5 phút. Form tự động tổng hợp về dashboard CEO ngay lập tức."
        },
        {
          title: "CEO nhận báo cáo tự động mỗi sáng",
          description: "7 giờ sáng, CEO nhận tin nhắn tóm tắt: cửa hàng nào đang trên target, cửa hàng nào đang dưới, vấn đề tồn kho cần xử lý hôm nay. Không cần gọi điện."
        }
      ],
      dailyChanges: {
        before: "8 giờ sáng. CEO bắt đầu gọi điện cho quản lý cửa hàng 1, 2, 3 — người bắt máy, người không bắt. Đến 9 giờ mới gom được số liệu của 4/5 cửa hàng. Cửa hàng 5 gửi Excel lúc 10 giờ theo format khác. Mất buổi sáng.",
        after: "7 giờ sáng. Điện thoại báo tin nhắn: 'Hôm qua: cửa hàng 3 đạt 92% target, cửa hàng 5 đạt 78% — thấp nhất tuần. Tồn kho mã SKU-234 còn 3 ngày.' CEO gọi 1 cuộc cho quản lý cửa hàng 5 — đúng vấn đề."
      }
    },
    results: [
      {
        metric: "Thời gian CEO dành để thu thập số liệu hàng ngày",
        value: "Từ 45–60 phút xuống còn 5–10 phút",
        description: "Báo cáo tổng hợp tự động, CEO chỉ xử lý ngoại lệ"
      },
      {
        metric: "Độ trễ phát hiện cửa hàng dưới target",
        value: "Từ 1–2 tuần xuống còn 1 ngày",
        description: "Can thiệp sớm trước khi vấn đề trở nên nghiêm trọng"
      }
    ],
    keyInsight: "CEO của chuỗi bán lẻ không cần nhiều dữ liệu — cần đúng dữ liệu, đúng lúc. 5 con số quan trọng được gửi vào 7 giờ sáng có giá trị hơn 50 con số gửi lúc 10 giờ.",
    suitableFor: [
      "Chuỗi bán lẻ 3–10 cửa hàng, CEO không thể đến từng nơi hàng ngày",
      "Đang có báo cáo nhưng báo cáo đến chậm hoặc không đồng nhất"
    ],
    notSuitableFor: [
      "Chỉ có 1 cửa hàng, CEO hiện diện trực tiếp hàng ngày",
      "Doanh thu quá đơn giản để cần hệ thống báo cáo"
    ],
    ctaQuestion: "Sáng nay bạn mất bao nhiêu thời gian để biết hôm qua toàn chuỗi bán được bao nhiêu?"
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
    title: "Cửa hàng bán lẻ 15 người: Kiểm kê cuối tháng luôn lệch 5–10% — nhưng không ai biết vì sao",
    summary: "Cửa hàng bán lẻ 15 nhân sự, mỗi tháng kiểm kê đều có sai lệch 5–10% giữa sổ sách và thực tế. Đã thắt chặt kiểm tra, đã lắp camera — vẫn lệch. Vấn đề không phải là nhân viên gian lận, mà là không ai biết quy trình đúng phải như thế nào.",
    context: {
      businessType: "Cửa hàng bán lẻ đồ gia dụng, 500–800 mã hàng",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự, doanh thu 800 triệu – 2 tỷ/tháng",
      situation: "Chủ cửa hàng lo ngại về thất thoát nhưng không xác định được nguyên nhân. Mỗi tháng sai lệch tương đương 40–200 triệu đồng giá trị hàng hóa."
    },
    painPoints: [
      "Kiểm kê cuối tháng: số trên hệ thống là 1.000 đơn vị, đếm thực tế còn 920 — không ai giải thích được 80 đơn vị đi đâu",
      "Nhân viên đổ lỗi cho nhau: kho đổ cho bán lẻ, bán lẻ đổ cho kho — không có cách nào truy xuất",
      "Tốn 2 ngày mỗi tháng để kiểm kê — toàn bộ nhân viên phải tham gia, cửa hàng hoạt động cầm chừng",
      "Đã lắp camera, đã yêu cầu ký xác nhận — vẫn lệch, chi phí kiểm soát ngày càng tăng mà không giải quyết được gốc"
    ],
    previousAttempts: [
      "Kiểm kê thường xuyên hơn — tốn thêm thời gian nhân viên, không giảm được sai lệch",
      "Yêu cầu nhân viên ký xác nhận khi lấy hàng — giấy tờ nhiều nhưng không được kiểm tra lại",
      "Lắp camera giám sát — giảm một phần thất thoát do cố ý, không giải quyết được sai sót vô tình"
    ],
    previousAttemptsResult: "Các biện pháp kiểm soát thêm chi phí mà không giải quyết nguyên nhân gốc: hàng vào ra không được ghi nhận đúng lúc và đúng người chịu trách nhiệm.",
    rootCauses: [
      {
        title: "Không có quy trình ghi nhận hàng vào/ra chặt chẽ theo thời gian thực",
        description: "Hàng xuất kho ra bán không được ghi nhận ngay — nhân viên bán xong mới nhớ cập nhật (hoặc quên luôn). Hàng nhập từ nhà cung cấp đôi khi ghi nhận thiếu.",
        consequence: "Dữ liệu tồn kho luôn không phản ánh thực tế. Không thể biết sai lệch xảy ra lúc nào, ở đâu."
      },
      {
        title: "Không ai chịu trách nhiệm rõ ràng cho từng mã hàng",
        description: "Bất kỳ ai cũng có thể lấy hàng từ kho. Không có người chịu trách nhiệm cụ thể cho việc ghi nhận.",
        consequence: "Khi lệch không biết truy về ai. Không có dữ liệu để phân tích nguyên nhân."
      }
    ],
    solution: {
      approach: "Thiết lập quy trình nhập/xuất kho với điểm ghi nhận cố định và người chịu trách nhiệm rõ ràng — trước khi nghĩ đến phần mềm.",
      steps: [
        {
          title: "Xác định 3 điểm ghi nhận bắt buộc",
          description: "Điểm 1: khi hàng về từ nhà cung cấp — ai nhận, ghi ngay. Điểm 2: khi xuất hàng ra sàn bán — ai lấy, ghi ngay. Điểm 3: khi hàng được trả lại — ai nhận, ghi ngay. Không có ngoại lệ."
        },
        {
          title: "Phân trách nhiệm cụ thể cho từng khu vực hàng",
          description: "Mỗi khu vực kho hoặc danh mục hàng có 1 người chịu trách nhiệm. Khi lệch, biết ngay nên hỏi ai. Không còn đổ lỗi qua lại."
        },
        {
          title: "Đối soát nhanh hàng ngày thay vì chờ cuối tháng",
          description: "5 phút cuối ngày: đếm nhanh 10–15 mã hàng bán chạy nhất. Phát hiện sai lệch ngay trong ngày, trước khi nó tích lũy thành 80 đơn vị sau 1 tháng."
        }
      ],
      dailyChanges: {
        before: "Hàng xuất kho. Nhân viên lấy và đi bán. Cuối ca nhớ thì cập nhật hệ thống, không nhớ thì thôi. Cuối tháng: sai lệch 7%, không ai biết mất từ ngày nào.",
        after: "Nhân viên lấy hàng từ kho: quét mã, hệ thống ghi nhận tự động — mất 5 giây. Cuối ngày manager thấy ngay hôm nay xuất bao nhiêu, nhập bao nhiêu, có gì không khớp không."
      }
    },
    results: [
      {
        metric: "Độ lệch tồn kho so với thực tế",
        value: "Từ 5–10% xuống còn dưới 1%",
        description: "Ghi nhận đúng thời điểm, đúng người chịu trách nhiệm"
      },
      {
        metric: "Thời gian kiểm kê cuối tháng",
        value: "Từ 2 ngày xuống còn 4 giờ",
        description: "Dữ liệu hàng ngày chính xác nên kiểm kê chỉ cần xác nhận lại"
      }
    ],
    keyInsight: "Tồn kho lệch không phải vì nhân viên trộm cắp — phần lớn là do quy trình ghi nhận không đủ chặt. Khi biết chính xác hàng đi đâu từng ngày, sai lệch tự nhiên giảm về gần 0.",
    suitableFor: [
      "Cửa hàng có từ 200 mã hàng trở lên, đang kiểm kê thấy sai lệch thường xuyên",
      "Có kho riêng và quy trình xuất nhập hàng rõ ràng"
    ],
    notSuitableFor: [
      "Cửa hàng không có kho (dropship hoặc giao thẳng từ nhà cung cấp)",
      "Chỉ có 1–2 loại sản phẩm, dễ đếm bằng mắt"
    ],
    ctaQuestion: "Lần kiểm kê gần nhất, con số lệch bao nhiêu — và bạn có giải thích được không?"
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
    title: "Cửa hàng thời trang: 70% khách mua một lần rồi không quay lại — nhưng không có hệ thống để biết tại sao",
    summary: "Cửa hàng thời trang 12 nhân sự, doanh thu ổn định nhờ khách mới từ quảng cáo. Nhưng tỷ lệ khách quay lại chỉ 30% — thấp hơn trung bình ngành 15–20 điểm. Không có dữ liệu khách hàng nên không biết phải bắt đầu từ đâu.",
    context: {
      businessType: "Cửa hàng thời trang nữ, phân khúc trung cấp",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự, 1.500–2.500 lượt khách/tháng",
      situation: "Chủ cửa hàng đang chi 20–30 triệu/tháng cho quảng cáo để tìm khách mới, trong khi hàng nghìn khách cũ không được chăm sóc để quay lại."
    },
    painPoints: [
      "Không biết khách nào đã mua bao nhiêu lần — không có dữ liệu lịch sử mua hàng",
      "Không có cách liên hệ lại với khách cũ khi về hàng mới hoặc có khuyến mãi",
      "Gửi tin nhắn khuyến mãi cho tất cả số điện thoại đã xin — phần lớn bị block vì không liên quan",
      "Chi 25 triệu/tháng cho quảng cáo để tìm khách mới, trong khi không tốn đồng nào để giữ khách cũ"
    ],
    previousAttempts: [
      "Xin số điện thoại khách khi mua — ghi vào sổ, không làm gì tiếp theo",
      "Lập fanpage Facebook và đăng bài đều đặn — reach giảm dần, không biết ai là khách cũ ai là khách mới",
      "Gửi SMS khuyến mãi hàng tháng cho toàn bộ danh sách — tỷ lệ đọc thấp, một số khách than phiền bị làm phiền"
    ],
    previousAttemptsResult: "Có danh sách số điện thoại nhưng không biết gửi gì cho ai — vì không có thông tin về sở thích và lịch sử mua hàng. Gửi đại trà không hiệu quả, thậm chí gây phản tác dụng.",
    rootCauses: [
      {
        title: "Không có hệ thống lưu trữ thông tin khách hàng — chỉ có số điện thoại, không có ngữ cảnh",
        description: "Biết số điện thoại của 3.000 khách, nhưng không biết ai mua gì, bao giờ, bao nhiêu lần. Không thể phân loại để gửi đúng thông điệp.",
        consequence: "Tiếp thị lại không hiệu quả vì không cá nhân hóa được. Chi phí marketing cao vì phải liên tục tìm khách mới."
      },
      {
        title: "Không có quy trình chăm sóc khách sau khi mua — giao dịch xong là hết",
        description: "Nhân viên không được hướng dẫn làm gì sau khi khách ra khỏi cửa. Không có bước nào trong quy trình để tạo lý do khách quay lại.",
        consequence: "Khách không có lý do để nhớ đến cửa hàng cho đến khi thấy quảng cáo lại."
      }
    ],
    solution: {
      approach: "Xây dựng profile khách hàng đơn giản — không cần phần mềm CRM phức tạp, chỉ cần ghi nhận đúng thông tin khi mua — rồi mới nghĩ đến chăm sóc.",
      steps: [
        {
          title: "Thu thập 3 thông tin cốt lõi tại điểm mua",
          description: "Số điện thoại (đã có), ngày sinh, và 1–2 sở thích phong cách (casual/formal/sporty). Nhân viên hỏi tự nhiên khi thanh toán — không cảm giác như đang điền form."
        },
        {
          title: "Ghi lại lịch sử mua hàng theo từng khách",
          description: "Mỗi giao dịch được gắn với khách hàng. Sau 3 tháng, có đủ dữ liệu để biết: ai mua thường xuyên, ai mua 1 lần rồi thôi, ai thích phong cách gì."
        },
        {
          title: "Tạo quy trình chăm sóc dựa trên sở thích",
          description: "Khi về hàng phong cách A: chỉ nhắn cho khách thích phong cách A. Khi đến ngày sinh: gửi ưu đãi cá nhân. Khi khách không quay lại 60 ngày: nhắn tin hỏi thăm. Mỗi tin nhắn đều có lý do cụ thể để gửi."
        }
      ],
      dailyChanges: {
        before: "Khách rời cửa hàng. Nhân viên không có hành động gì tiếp theo. Tháng sau khách có thể quay lại, có thể không — không ai biết.",
        after: "Khách rời cửa hàng. Hệ thống ghi nhận: chị Lan, thích phong cách casual, mua lần đầu hôm nay. Khi về hàng mới phong cách casual: chị Lan nằm trong danh sách 120 khách được nhắn tin đầu tiên."
      }
    },
    results: [
      {
        metric: "Tỷ lệ khách quay lại trong vòng 90 ngày",
        value: "Tăng từ 30% lên 42–45%",
        description: "Được nhắn đúng thông điệp, đúng thời điểm"
      },
      {
        metric: "Chi phí để có 1 lượt mua từ khách cũ so với khách mới",
        value: "Thấp hơn 5–7 lần",
        description: "Khách cũ đã tin tưởng, chi phí tiếp cận gần bằng 0"
      }
    ],
    keyInsight: "Cửa hàng đang trả tiền để tìm khách mới trong khi hàng nghìn khách cũ đang bị bỏ quên. Không cần CRM phức tạp — chỉ cần biết khách thích gì và nhắn đúng lúc.",
    suitableFor: [
      "Cửa hàng đang chi nhiều cho quảng cáo tìm khách mới nhưng tỷ lệ khách quay lại thấp",
      "Bán sản phẩm mà khách có thể mua lại nhiều lần (không phải sản phẩm mua 1 lần)"
    ],
    notSuitableFor: [
      "Cửa hàng mới mở, chưa có lượng khách đủ để phân tích",
      "Bán sản phẩm mua 1 lần (thiết bị điện, đồ nội thất cao cấp)"
    ],
    ctaQuestion: "Trong 3.000 khách đã mua hàng của bạn, bạn có thể liên hệ bao nhiêu người ngay hôm nay với một lý do cụ thể để họ quay lại?"
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
    title: "Cửa hàng 20 nhân viên: Xếp ca mỗi tuần mất 3–4 tiếng vì nhân viên liên tục xin đổi sau khi lịch đã ra",
    summary: "Cửa hàng bán lẻ 20 nhân sự làm ca, quản lý mất 3–4 tiếng mỗi tuần để xếp lịch. Nhưng sau khi lịch ra, vẫn nhận 5–8 tin nhắn xin đổi ca trong 2 ngày tiếp theo — vì nhân viên không được xem lịch trước để sắp xếp.",
    context: {
      businessType: "Cửa hàng bán lẻ mỹ phẩm, 2 ca/ngày, 7 ngày/tuần",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự, chia thành 3 tổ ca",
      situation: "Quản lý kiêm nhiệm cả bán hàng và sắp xếp nhân sự. Việc xếp ca đang chiếm một phần đáng kể thời gian trong khi còn nhiều việc quan trọng hơn cần làm."
    },
    painPoints: [
      "Thứ Hai xếp xong lịch tuần, thứ Ba–Tư đã nhận 5–8 tin nhắn Zalo xin đổi ca",
      "Mỗi yêu cầu đổi ca phải xử lý thủ công: kiểm tra ai đang rảnh ca đó, liên hệ, xác nhận, cập nhật lịch — mỗi lần mất 10–15 phút",
      "Cuối tháng muốn tính giờ làm thêm để lập bảng lương — phải đối chiếu lịch gốc với tất cả thay đổi, hay sai sót",
      "Giờ cao điểm cuối tuần vẫn hay bị thiếu người vì một ca bị đổi không ai cập nhật đầy đủ"
    ],
    previousAttempts: [
      "Gửi lịch ca bằng ảnh chụp bảng qua Zalo — nhân viên không thể tra cứu lịch cả tháng, cũng không tự tìm được người đổi",
      "Bảng xếp ca Excel chia sẻ qua Google Drive — ít nhân viên chủ động vào xem, vẫn nhắn tin hỏi",
      "Họp đầu tuần để xác nhận lịch — mất thêm 30 phút, vẫn có đổi ca sau đó"
    ],
    previousAttemptsResult: "Nhân viên không có đủ thông tin để tự giải quyết việc đổi ca với nhau — không biết ai đang làm ca nào, không biết liên hệ ai. Mọi yêu cầu đều phải đi qua quản lý.",
    rootCauses: [
      {
        title: "Nhân viên không có cách xem lịch của nhau — không thể tự tìm người đổi",
        description: "Lịch ca chỉ mỗi người biết lịch của mình. Khi cần đổi ca phải nhờ quản lý tìm người — vì chỉ quản lý biết ai đang rảnh.",
        consequence: "Quản lý trở thành người trung gian bắt buộc cho mọi yêu cầu đổi ca, dù chỉ là việc giữa 2 nhân viên với nhau."
      },
      {
        title: "Không có quy tắc đổi ca rõ ràng — mỗi trường hợp phải xét riêng",
        description: "Không có quy định: đổi ca cần báo trước bao lâu, ai có thể đổi với ai, có giới hạn đổi bao nhiêu lần/tháng không.",
        consequence: "Quản lý không thể delegate — phải tự xử lý từng trường hợp vì không có quy tắc để nhân viên tự áp dụng."
      }
    ],
    solution: {
      approach: "Đặt quy tắc đổi ca rõ ràng và cho nhân viên nhìn thấy lịch của nhau — để họ tự giải quyết, quản lý chỉ duyệt.",
      steps: [
        {
          title: "Ban hành 3 quy tắc đổi ca cụ thể",
          description: "1) Xin đổi trước 48 tiếng. 2) Tự tìm người đổi — không được yêu cầu quản lý tìm hộ. 3) Tối đa 3 lần đổi ca/tháng. Quy tắc này áp dụng cho tất cả, không có ngoại lệ."
        },
        {
          title: "Đăng lịch ca lên hệ thống chung — nhân viên tự xem được",
          description: "Tất cả nhân viên thấy lịch của nhau. Khi cần đổi, tự liên hệ trực tiếp với người muốn đổi. Quản lý chỉ nhận yêu cầu đã có người đồng ý, chỉ cần duyệt."
        },
        {
          title: "Tự động tổng hợp giờ làm thêm theo tháng",
          description: "Hệ thống ghi nhận tất cả thay đổi ca. Cuối tháng xuất báo cáo giờ làm của từng người — không cần đối chiếu thủ công."
        }
      ],
      dailyChanges: {
        before: "Thứ Tư 11 giờ trưa. Nhân viên A nhắn Zalo: 'Chị ơi thứ 7 này em có việc không đi làm ca chiều được không?' Quản lý phải nhớ ca thứ 7 chiều còn ai, liên hệ B hỏi B có đổi không, B đồng ý, cập nhật lịch. Mất 20 phút.",
        after: "Nhân viên A mở app, thấy thứ 7 ca chiều có B và C. Nhắn trực tiếp cho B: 'B ơi đổi ca thứ 7 với tao không?' B đồng ý. Cả hai gửi yêu cầu lên hệ thống. Quản lý nhận thông báo: 'A và B xin đổi ca thứ 7 chiều.' Bấm duyệt. Xong."
      }
    },
    results: [
      {
        metric: "Thời gian quản lý dành để xử lý xếp ca và đổi ca",
        value: "Từ 3–4 tiếng/tuần xuống còn 45 phút",
        description: "Nhân viên tự xử lý với nhau, quản lý chỉ duyệt"
      },
      {
        metric: "Số lần thiếu người do đổi ca không được cập nhật",
        value: "Giảm 85–90%",
        description: "Thay đổi được ghi nhận ngay trên hệ thống, không bị bỏ sót"
      }
    ],
    keyInsight: "Quản lý không cần xếp ca ít đi — cần bớt là người trung gian trong mọi thay đổi. Khi nhân viên có đủ thông tin và quy tắc rõ ràng, họ tự giải quyết được hầu hết các trường hợp.",
    suitableFor: [
      "Cửa hàng có nhân viên làm ca, hay có yêu cầu đổi ca",
      "Quản lý đang mất nhiều hơn 2 tiếng/tuần để xử lý lịch nhân sự"
    ],
    notSuitableFor: [
      "Ít hơn 5 nhân viên, lịch ít phức tạp",
      "Lịch làm việc cố định, không có ca và ít khi thay đổi"
    ],
    ctaQuestion: "Tuần vừa rồi bạn nhận bao nhiêu tin nhắn từ nhân viên liên quan đến lịch ca?"
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
    title: "Cửa hàng điện thoại 18 người: Nhân viên mới cần 2 tuần kèm cặp trước khi dám tư vấn khách — nhân viên cũ mất năng suất",
    summary: "Cửa hàng bán lẻ điện thoại 18 nhân sự, đang mở thêm chi nhánh. Mỗi nhân viên mới cần 2 tuần được kèm 1-1 mới đủ tự tin tư vấn — trong 2 tuần đó nhân viên kèm giảm 30–40% năng suất bán hàng.",
    context: {
      businessType: "Cửa hàng bán lẻ điện thoại và phụ kiện",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự, đang mở thêm 1–2 chi nhánh",
      situation: "Tuyển nhân viên mới liên tục để phủ chi nhánh, nhưng đào tạo theo kiểu kèm cặp 1-1 không thể scale — cứ mỗi nhân viên mới là 1 nhân viên cũ bị ảnh hưởng năng suất 2 tuần."
    },
    painPoints: [
      "Nhân viên mới không biết thông số kỹ thuật sản phẩm — khách hỏi là phải gọi nhân viên cũ đến hỗ trợ",
      "Mỗi nhân viên kèm nhân viên mới theo cách riêng — người này dạy thứ A, người kia dạy thứ B, kiến thức không nhất quán",
      "Tỷ lệ nhân viên nghỉ trong 60 ngày đầu cao (30–40%) vì cảm thấy không được hỗ trợ đầy đủ và áp lực khi chưa biết việc",
      "Mở thêm chi nhánh nhưng không có đủ nhân viên giỏi để điều qua — ai cũng đang kèm người mới"
    ],
    previousAttempts: [
      "Kèm cặp 1-1 — cách duy nhất đang dùng, không có hệ thống nào thay thế",
      "Cho xem catalogue sản phẩm — thông tin không đủ để tư vấn, khách hỏi sâu hơn là bí",
      "Nhân viên mới ngồi quan sát 3–5 ngày trước khi thực hành — mất thời gian nhưng hiệu quả thấp"
    ],
    previousAttemptsResult: "Không có tài liệu đào tạo nào đủ để nhân viên mới tự học. Mọi kiến thức đều chỉ có ở nhân viên kỳ cựu — và kiến thức đó không được ghi lại.",
    rootCauses: [
      {
        title: "Kiến thức sản phẩm và kỹ năng tư vấn chỉ tồn tại trong đầu nhân viên giỏi — không được tài liệu hóa",
        description: "Nhân viên bán tốt nhất biết cách so sánh sản phẩm, biết câu hỏi nào khách hay hỏi và trả lời thế nào. Nhưng không có gì được viết ra để người khác học.",
        consequence: "Muốn học phải học từ người — không thể scale khi mở nhiều chi nhánh."
      },
      {
        title: "Không có mốc rõ ràng để nhân viên mới biết mình đã sẵn sàng chưa",
        description: "Nhân viên mới không biết cần học gì, bao giờ thì được thả ra tự làm. Nhân viên kèm cũng không biết khi nào dừng được.",
        consequence: "Kèm quá lâu vì không ai dám 'thả ra'. Nhân viên mới thiếu tự tin vì không có cột mốc để thấy tiến bộ."
      }
    ],
    solution: {
      approach: "Tài liệu hóa kiến thức từ nhân viên giỏi nhất, tạo lộ trình 5 ngày có mốc rõ ràng, và bài kiểm tra cuối để xác nhận sẵn sàng.",
      steps: [
        {
          title: "Ghi lại 50 câu hỏi khách hay hỏi nhất và cách trả lời tốt nhất",
          description: "Yêu cầu 2–3 nhân viên bán tốt nhất liệt kê câu hỏi thường gặp và cách họ trả lời. Đây là nền tảng của toàn bộ tài liệu đào tạo."
        },
        {
          title: "Tạo lộ trình 5 ngày với mốc cụ thể",
          description: "Ngày 1–2: đọc tài liệu sản phẩm + quan sát. Ngày 3: tự tư vấn 5 khách có nhân viên cũ đứng cạnh. Ngày 4–5: tự làm độc lập, ghi lại câu nào không trả lời được. Cuối ngày 5: bài kiểm tra 20 câu — đạt 80% mới được làm độc lập."
        },
        {
          title: "Nhân viên cũ chỉ cần hỗ trợ ngày 3",
          description: "Ngày 1–2 và ngày 4–5 nhân viên mới tự làm. Chỉ ngày 3 cần nhân viên cũ đứng cạnh — giảm từ 10 ngày kèm xuống còn 1 ngày kèm thực sự."
        }
      ],
      dailyChanges: {
        before: "Nhân viên mới đứng cạnh nhân viên cũ suốt 2 tuần. Khách hỏi — nhân viên cũ trả lời, nhân viên mới nghe. Sau 2 tuần, nhân viên cũ 'thả ra' — nhân viên mới vẫn hay gọi hỏi.",
        after: "Nhân viên mới nhận tài liệu, đọc 2 ngày. Ngày 3 có nhân viên cũ đứng cạnh hỗ trợ. Ngày 4 tự làm — nhân viên cũ làm việc bình thường. Cuối ngày 5 làm bài test, đạt là làm độc lập."
      }
    },
    results: [
      {
        metric: "Thời gian nhân viên cũ phải dành để kèm người mới",
        value: "Từ 10 ngày xuống còn 1 ngày (ngày 3)",
        description: "Nhân viên cũ phục hồi 90% năng suất ngay từ ngày 4"
      },
      {
        metric: "Thời gian nhân viên mới bắt đầu tư vấn độc lập",
        value: "Từ 2 tuần xuống còn 5–6 ngày",
        description: "Lộ trình rõ ràng + tài liệu tự học thay cho kèm cặp liên tục"
      }
    ],
    keyInsight: "Kèm cặp 1-1 không scale. Khi có tài liệu đủ tốt, nhân viên mới tự học được phần lớn — chỉ cần 1 ngày kèm thực hành thay vì 10 ngày theo sát.",
    suitableFor: [
      "Cửa hàng đang tuyển nhân viên mới liên tục hoặc mở thêm chi nhánh",
      "Sản phẩm đòi hỏi kiến thức để tư vấn, không phải hàng tiêu dùng đơn giản"
    ],
    notSuitableFor: [
      "Nhân sự ổn định, ít tuyển mới",
      "Sản phẩm đơn giản, khách tự chọn không cần tư vấn"
    ],
    ctaQuestion: "Nếu tuyển 3 nhân viên mới cùng lúc để mở chi nhánh — bạn có đủ nhân viên cũ để kèm cả 3 mà không ảnh hưởng doanh số không?"
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
    title: "Cửa hàng thực phẩm sạch: Đặt hàng nhà cung cấp theo cảm giác — dẫn đến hết hàng bán 2 lần/tháng hoặc hàng tồn quá hạn",
    summary: "Cửa hàng thực phẩm sạch 15 nhân sự với 200+ mã hàng từ 20+ nhà cung cấp. Không có hệ thống dự báo nhu cầu — đặt hàng dựa trên ước lượng và cảm giác. Kết quả: hết hàng bán 2 lần/tháng, hàng tươi sống tồn quá hạn mỗi tuần.",
    context: {
      businessType: "Cửa hàng thực phẩm sạch, bán lẻ và B2B nhỏ",
      industry: "Bán lẻ",
      scale: "10–30 nhân sự, 200+ SKU, đặt hàng từ 20+ nhà cung cấp",
      situation: "Chủ cửa hàng tự quản lý việc đặt hàng, mất 2–3 tiếng mỗi tuần nhưng vẫn không tránh được hết hàng và tồn kho."
    },
    painPoints: [
      "Hết rau cải hữu cơ vào thứ Tư dù vừa nhập thứ Hai — không biết thứ Ba có đơn B2B lớn bất thường",
      "Hàng tươi sống tồn quá hạn mỗi tuần: trung bình 3–5% giá trị hàng nhập bị bỏ đi",
      "Có 20+ nhà cung cấp, mỗi người có MOQ và thời gian giao khác nhau — không nhớ hết được",
      "Khách hàng B2B than phiền về việc hết hàng đột xuất — 2 đơn hàng lớn bị hủy trong quý vừa rồi"
    ],
    previousAttempts: [
      "Đặt hàng qua Zalo — tiện nhưng không lưu lịch sử, không so sánh được đơn nào bán chạy",
      "Ghi sổ tay đơn hàng — thông tin không đầy đủ, hay bị bỏ sót số lượng hoặc nhà cung cấp",
      "Đặt dự phòng nhiều hơn — giải quyết hết hàng nhưng tăng tỷ lệ hàng tồn quá hạn"
    ],
    previousAttemptsResult: "Hai vấn đề đối lập nhau: đặt ít thì hết hàng, đặt nhiều thì tồn quá hạn. Không có cách nào giải quyết cả hai cùng lúc mà không có dữ liệu bán hàng thực tế.",
    rootCauses: [
      {
        title: "Đặt hàng không dựa trên dữ liệu bán thực tế — dựa trên ước lượng",
        description: "Không có báo cáo nào cho biết tuần trước bán được bao nhiêu kg của từng mã hàng. Chủ cửa hàng đặt hàng theo kinh nghiệm và cảm giác.",
        consequence: "Không thể dự báo chính xác — dẫn đến cả hai tình trạng hết hàng và tồn kho cùng tồn tại."
      },
      {
        title: "Không theo dõi tồn kho thực tế theo từng mã hàng",
        description: "Không biết hiện tại còn bao nhiêu kg rau cải — chỉ biết khi ra kho đếm. Không có cảnh báo khi sắp hết.",
        consequence: "Phát hiện hết hàng khi khách đã hỏi mua — quá muộn để đặt kịp trong ngày."
      }
    ],
    solution: {
      approach: "Ghi nhận tồn kho thực tế và lịch sử bán hàng — chỉ với 2 dữ liệu này là đủ để đặt hàng có cơ sở.",
      steps: [
        {
          title: "Thiết lập mức tồn kho tối thiểu cho 30 mã hàng quan trọng nhất",
          description: "Không cần 200 mã — 30 mã hàng bán chạy nhất chiếm 70–80% doanh thu. Với mỗi mã: xác định số ngày tồn kho an toàn và thời gian đặt hàng đến khi giao. Ví dụ: rau cải tươi — tối thiểu 2 ngày tồn, thời gian giao 1 ngày → khi còn dưới 3 ngày thì đặt."
        },
        {
          title: "Ghi nhận số lượng bán ra mỗi ngày cho 30 mã này",
          description: "Nhân viên ghi số lượng xuất kho mỗi ca — 5 phút/ca. Sau 4 tuần có đủ dữ liệu để thấy pattern: thứ Hai bán nhiều hơn thứ Tư, tuần đầu tháng nhiều hơn tuần cuối."
        },
        {
          title: "Cảnh báo tự động khi sắp hết, gợi ý số lượng đặt dựa trên lịch sử",
          description: "Mỗi sáng hệ thống báo: '3 mã hàng sẽ hết trong 2 ngày.' Kèm gợi ý số lượng đặt dựa trên trung bình 4 tuần qua. Chủ cửa hàng xem và điều chỉnh — không cần tính toán từ đầu."
        }
      ],
      dailyChanges: {
        before: "Thứ Hai sáng sớm. Chủ cửa hàng đi qua kho, nhìn lướt qua các kệ và ước lượng cần đặt gì. Gọi điện/nhắn Zalo cho từng nhà cung cấp. Thứ Tư: hết rau cải — vừa nhập thứ Hai không đủ. Khách hỏi, nhân viên phải xin lỗi.",
        after: "Thứ Hai sáng nhận báo cáo: '4 mã hàng sắp hết, đề xuất đặt: rau cải 15kg (trung bình 4 tuần = 18kg/tuần).' Chủ cửa hàng chỉnh sửa 15kg lên 20kg vì tuần này có sự kiện. Xác nhận đặt hàng — xong trong 10 phút."
      }
    },
    results: [
      {
        metric: "Số lần hết hàng bán trong tháng",
        value: "Từ 6–8 lần/tháng xuống còn 1–2 lần",
        description: "Đặt hàng dựa trên dữ liệu, không còn ước lượng"
      },
      {
        metric: "Tỷ lệ hàng tồn quá hạn phải bỏ",
        value: "Từ 3–5% xuống còn dưới 1% giá trị hàng nhập",
        description: "Đặt đúng số lượng cần, không đặt dư"
      }
    ],
    keyInsight: "Hết hàng và tồn kho quá hạn là 2 triệu chứng của cùng 1 vấn đề: đặt hàng không có dữ liệu. Khi biết thực tế bán bao nhiêu, đặt đúng số lượng không còn là may rủi nữa.",
    suitableFor: [
      "Cửa hàng thực phẩm hoặc bán lẻ có hàng hóa dễ hỏng, cần đặt thường xuyên",
      "Đang gặp cả 2 vấn đề: hết hàng và tồn kho quá hạn"
    ],
    notSuitableFor: [
      "Sản phẩm không có hạn sử dụng, tồn kho lâu không sao",
      "Ít hơn 20 mã hàng, đơn giản đến mức đếm bằng mắt"
    ],
    ctaQuestion: "Tháng vừa rồi bạn bỏ bao nhiêu hàng tươi vì tồn quá hạn — và bao nhiêu lần phải xin lỗi khách vì hết hàng?"
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
    title: "Xưởng gỗ nội thất 15 người: 40% đơn hàng giao trễ — không phải vì làm chậm, mà vì thông tin không đến đúng nơi đúng lúc",
    summary: "Xưởng sản xuất đồ gỗ nội thất 15 nhân sự, đủ năng lực sản xuất đúng hạn, nhưng cứ 10 đơn thì 4 đơn giao trễ. Khi truy nguyên nhân: không phải xưởng làm chậm — mà là thông tin về đơn hàng, nguyên vật liệu và tiến độ không chạy đúng giữa sale, kho và xưởng.",
    context: {
      businessType: "Xưởng sản xuất đồ gỗ nội thất theo đơn, B2B và B2C",
      industry: "Sản xuất",
      scale: "10–30 nhân sự, 30–60 đơn hàng đang xử lý đồng thời",
      situation: "Chủ xưởng trực tiếp điều hành, kiêm luôn theo dõi tiến độ sản xuất. Đơn hàng tăng nhưng tỷ lệ giao trễ không giảm."
    },
    painPoints: [
      "Sale nhận đơn nhưng không thông báo cho xưởng ngay — xưởng biết muộn 1–2 ngày, lịch sản xuất bị lệch",
      "Kho hết nguyên liệu phát hiện khi đơn đã vào sản xuất — phải dừng chờ nhập hàng mới, mất 2–3 ngày",
      "Khách hỏi tiến độ: chủ xưởng phải chạy xuống xưởng hỏi thợ, gọi điện cho sale, mất 30 phút mới có câu trả lời",
      "Khi giao trễ, không truy được đơn bị trễ từ bước nào — mỗi bộ phận đổ lỗi cho bộ phận khác"
    ],
    previousAttempts: [
      "Ghi đơn hàng vào sổ ở bàn sale — xưởng không thấy sổ đó cho đến khi có người đưa xuống",
      "Nhóm Zalo thông báo đơn mới — hay bị bỏ sót trong lúc bận, đôi khi xưởng không nhận được thông báo",
      "File Excel theo dõi tiến độ — chỉ chủ xưởng cập nhật, người khác không có cách nhập"
    ],
    previousAttemptsResult: "Thông tin luôn chậm hơn thực tế 1–2 ngày. Chủ xưởng là người duy nhất biết toàn bộ tình hình — nhưng không thể xử lý kịp khi có nhiều đơn cùng lúc.",
    rootCauses: [
      {
        title: "Không có luồng bàn giao thông tin rõ ràng từ sale → kho → xưởng",
        description: "Đơn hàng mới: sale nhập vào đâu? Ai thông báo cho kho kiểm tra nguyên liệu? Ai thông báo cho xưởng bắt đầu lên lịch sản xuất? Không có bước nào được định nghĩa rõ — mỗi người tự hiểu theo cách riêng.",
        consequence: "Thông tin bị mất hoặc trễ ở điểm bàn giao giữa các bộ phận. Đơn bị trễ trước khi bước vào xưởng."
      },
      {
        title: "Không theo dõi tiến độ từng đơn theo thời gian thực",
        description: "Không có cách nào biết đơn hàng đang ở giai đoạn nào mà không hỏi trực tiếp. Phát hiện đơn có vấn đề khi đã gần đến hạn giao.",
        consequence: "Xử lý theo kiểu chữa cháy — vấn đề được phát hiện quá muộn để can thiệp hiệu quả."
      }
    ],
    solution: {
      approach: "Định nghĩa luồng đơn hàng từ đầu đến cuối — ai làm gì ở mỗi bước, thông tin đi đến đâu — trước khi cài bất kỳ công cụ nào.",
      steps: [
        {
          title: "Vẽ lại luồng đơn hàng với 5 bước rõ ràng",
          description: "1) Sale nhận đơn → nhập vào hệ thống, kho và xưởng tự động được thông báo. 2) Kho xác nhận nguyên liệu (có đủ hay cần đặt thêm) trong 2 tiếng. 3) Xưởng lên lịch sản xuất sau khi kho xác nhận. 4) Xưởng cập nhật tiến độ hàng ngày. 5) Khi hoàn thành, sale và khách được thông báo. Không có bước nào được bỏ qua."
        },
        {
          title: "Mỗi đơn hàng có trạng thái cụ thể và người chịu trách nhiệm",
          description: "Đơn đang ở bước nào, ai chịu trách nhiệm bước đó, deadline của bước đó là khi nào. Khi trễ deadline, hệ thống cảnh báo ngay — không chờ đến khi trễ giao hàng."
        },
        {
          title: "Chủ xưởng xem dashboard thay vì chạy hỏi",
          description: "Mỗi sáng chủ xưởng mở dashboard thấy: đơn nào đúng tiến độ, đơn nào đang chậm, đơn nào cần can thiệp ngay. Chỉ gọi điện hoặc đến xưởng khi cần xử lý vấn đề cụ thể."
        }
      ],
      dailyChanges: {
        before: "Khách gọi hỏi tiến độ đơn hàng 3 tuần trước. Chủ xưởng đi xuống xưởng hỏi tổ trưởng: 'Đơn của anh A đến đâu rồi?' Tổ trưởng nhớ lại: 'Hình như đang đánh nhẵn, chưa sơn.' Chủ xưởng gọi cho sale báo lại khách. Mất 30–40 phút.",
        after: "Chủ xưởng mở app: 'Đơn A — Giai đoạn: đánh nhẵn — 85% hoàn thành — Dự kiến sơn: 2 ngày nữa — Giao đúng hạn.' Trả lời khách trong 30 giây."
      }
    },
    results: [
      {
        metric: "Tỷ lệ đơn hàng giao đúng hạn",
        value: "Từ 60% lên 88–92%",
        description: "Phát hiện vấn đề sớm hơn, can thiệp kịp thời"
      },
      {
        metric: "Thời gian chủ xưởng dành để điều phối và trả lời câu hỏi tiến độ",
        value: "Giảm 50–60%",
        description: "Không còn phải làm trung gian thông tin giữa các bộ phận"
      }
    ],
    keyInsight: "Đơn hàng không trễ vì thợ làm chậm — trễ vì thông tin chậm. Khi thông tin chạy đúng giữa sale, kho và xưởng, năng lực sản xuất sẵn có là đủ để giao đúng hạn.",
    suitableFor: [
      "Xưởng sản xuất theo đơn với 3 bộ phận trở lên (sale, kho, xưởng)",
      "Đang có tỷ lệ giao trễ cao nhưng năng lực sản xuất không phải vấn đề"
    ],
    notSuitableFor: [
      "Xưởng 1–5 người, chủ xưởng trực tiếp làm mọi việc",
      "Sản xuất hàng loạt theo dây chuyền cố định, không theo đơn"
    ],
    ctaQuestion: "10 đơn hàng gần nhất của bạn, bao nhiêu đơn giao đúng hạn — và đơn nào trễ, trễ từ bước nào?"
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
    title: "Xưởng bao bì nhựa 50 người: Dây chuyền dừng 2–3 lần/tháng vì thiếu nguyên liệu — bộ phận kho không cảnh báo kịp",
    summary: "Xưởng sản xuất bao bì nhựa 50 nhân sự, vận hành 2 ca/ngày. Trung bình 2–3 lần/tháng phải dừng dây chuyền vì hết nguyên liệu. Mỗi lần dừng mất 4–8 tiếng sản xuất và thường dẫn đến giao hàng trễ cho khách B2B.",
    context: {
      businessType: "Xưởng sản xuất bao bì nhựa, khách hàng B2B",
      industry: "Sản xuất",
      scale: "30–100 nhân sự, 2 ca/ngày",
      situation: "Xưởng đang hoạt động ở công suất cao, không có thời gian dừng. Mỗi lần dừng dây chuyền ảnh hưởng trực tiếp đến cam kết giao hàng cho khách B2B."
    },
    painPoints: [
      "Sáng vào ca: thợ phát hiện hết hạt nhựa — không thể chạy máy. Phải chờ đặt hàng khẩn cấp, thêm 20–30% chi phí nguyên liệu",
      "Bộ phận kho không thông báo khi sắp hết — vì không có ai được giao nhiệm vụ theo dõi và cảnh báo",
      "Khi dừng 4–8 tiếng, ảnh hưởng 2–3 đơn hàng giao trong ngày đó — phải gọi điện xin lỗi khách",
      "Không dự báo được nhu cầu nguyên liệu theo kế hoạch sản xuất — đặt hàng theo kinh nghiệm"
    ],
    previousAttempts: [
      "Nhờ nhân viên kho báo khi thấy sắp hết — hay bị quên, không có thời điểm kiểm tra cố định",
      "Kiểm kê kho mỗi tuần thứ Hai — phát hiện sắp hết thứ Hai nhưng hết thứ Tư, không kịp",
      "Đặt hàng dự phòng nhiều hơn — giải quyết vấn đề nhưng đọng vốn 15–25% ở tồn kho"
    ],
    previousAttemptsResult: "Không có giải pháp nào giải quyết được đồng thời: không thiếu nguyên liệu VÀ không đọng vốn tồn kho. Cần dữ liệu tiêu thụ thực tế để đặt đúng lúc, đúng lượng.",
    rootCauses: [
      {
        title: "Không có hệ thống theo dõi tồn kho theo thời gian thực",
        description: "Tồn kho nguyên liệu chỉ được kiểm tra theo lịch cố định (thứ Hai), không được cập nhật khi xuất dùng. Khoảng cách giữa 2 lần kiểm tra đủ để hết sạch.",
        consequence: "Phát hiện hết hàng khi dây chuyền đã dừng — quá muộn."
      },
      {
        title: "Đặt hàng không kết nối với kế hoạch sản xuất",
        description: "Biết tuần tới sản xuất bao nhiêu sản phẩm, nhưng không tính ra cần bao nhiêu nguyên liệu, không so sánh với tồn kho hiện tại để biết cần đặt thêm bao nhiêu.",
        consequence: "Đặt hàng theo cảm tính, không theo nhu cầu thực."
      }
    ],
    solution: {
      approach: "Kết nối 3 dữ liệu: tồn kho thực tế, kế hoạch sản xuất tuần tới, và thời gian giao hàng của nhà cung cấp — để tính ra khi nào cần đặt và đặt bao nhiêu.",
      steps: [
        {
          title: "Ghi nhận xuất kho nguyên liệu theo ca",
          description: "Mỗi ca ghi lại số lượng nguyên liệu đã dùng — mất 5 phút, nhưng tồn kho luôn chính xác theo thời gian thực."
        },
        {
          title: "Thiết lập ngưỡng cảnh báo cho từng nguyên liệu",
          description: "Ví dụ hạt nhựa: tiêu thụ 200kg/ngày, thời gian giao hàng 3 ngày → cần cảnh báo khi còn dưới 700kg (3.5 ngày). Khi xuống ngưỡng, bộ phận mua hàng tự động nhận cảnh báo."
        },
        {
          title: "Tính toán số lượng đặt hàng theo kế hoạch sản xuất",
          description: "Mỗi tuần: nhập kế hoạch sản xuất, hệ thống tính ra nguyên liệu cần có, so sánh với tồn kho, gợi ý số lượng cần đặt. Không còn đặt theo cảm tính."
        }
      ],
      dailyChanges: {
        before: "Thứ Tư 6 giờ sáng. Ca trưởng vào kho: 'Hạt nhựa còn khoảng 100kg, chiều hết.' Gọi cho giám đốc. Giám đốc gọi cho nhà cung cấp đặt khẩn cấp. Nhà cung cấp giao chiều muộn, nhưng ca buổi sáng đã dừng 4 tiếng.",
        after: "Thứ Hai. Hệ thống cảnh báo: 'Hạt nhựa còn 650kg, dự kiến hết thứ Tư — cần đặt hàng hôm nay.' Bộ phận mua hàng đặt ngay, hàng về thứ Ba, không gián đoạn sản xuất."
      }
    },
    results: [
      {
        metric: "Số lần dừng dây chuyền do thiếu nguyên liệu",
        value: "Từ 2–3 lần/tháng xuống còn gần 0",
        description: "Cảnh báo trước 2–3 ngày, đủ thời gian đặt hàng bình thường"
      },
      {
        metric: "Chi phí nguyên liệu khẩn cấp (giá cao hơn 20–30%)",
        value: "Giảm 90–95%",
        description: "Không còn phải đặt khẩn cấp với giá premium"
      }
    ],
    keyInsight: "Đặt hàng khẩn cấp không chỉ tốn kém hơn — nó còn là dấu hiệu hệ thống không có dữ liệu. Khi tồn kho được theo dõi thực tế và kết nối với kế hoạch sản xuất, nguyên liệu không bao giờ hết đột xuất.",
    suitableFor: [
      "Xưởng sản xuất liên tục với nhiều loại nguyên liệu, không thể dừng dây chuyền",
      "Đang tốn chi phí cao cho đặt hàng khẩn cấp mỗi tháng"
    ],
    notSuitableFor: [
      "Sản xuất theo đơn, không có kho nguyên liệu",
      "Chỉ 1–2 loại nguyên liệu, đơn giản"
    ],
    ctaQuestion: "Tháng vừa rồi bạn phải dừng sản xuất bao nhiêu tiếng vì thiếu nguyên liệu — và chi phí phụ trội là bao nhiêu?"
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
    title: "Xưởng cơ khí 40 người: Tỷ lệ sản phẩm lỗi 8% — chỉ phát hiện ở khâu cuối, không biết lỗi từ công đoạn nào",
    summary: "Xưởng sản xuất linh kiện cơ khí 40 nhân sự, 5 công đoạn. Tỷ lệ sản phẩm lỗi là 8% — cao hơn chuẩn ngành 2–3 điểm. Vấn đề là tất cả lỗi đều được phát hiện ở khâu kiểm tra cuối cùng, không ai biết lỗi phát sinh ở công đoạn nào, và các tổ cứ đổ lỗi cho nhau.",
    context: {
      businessType: "Xưởng gia công linh kiện cơ khí cho khách B2B",
      industry: "Sản xuất",
      scale: "30–100 nhân sự, 5 công đoạn sản xuất",
      situation: "Khách B2B đang yêu cầu tỷ lệ lỗi dưới 3% — hiện tại 8% không đáp ứng được. Nếu không cải thiện, có nguy cơ mất hợp đồng lớn."
    },
    painPoints: [
      "8% sản phẩm lỗi phát hiện ở kiểm tra cuối — phải làm lại hoặc bỏ, tốn 8% chi phí sản xuất vô ích",
      "Không biết lỗi từ công đoạn nào — mỗi tổ nói lỗi không phải từ mình, không ai có bằng chứng",
      "Khi khách khiếu nại lô hàng lỗi, không truy xuất được: lô này sản xuất ngày nào, công đoạn nào, ai làm",
      "Đã phạt tổ nào đó nhưng không chắc đúng — tạo ra bầu không khí làm việc tiêu cực mà lỗi không giảm"
    ],
    previousAttempts: [
      "Tập trung kiểm tra chặt hơn ở khâu cuối — phát hiện thêm lỗi, không giảm tỷ lệ lỗi",
      "Họp rút kinh nghiệm sau mỗi lô hàng lỗi — thiếu dữ liệu để phân tích nguyên nhân cụ thể",
      "Phạt tổ có lỗi — không giải quyết gốc vì không biết chính xác lỗi từ đâu"
    ],
    previousAttemptsResult: "Kiểm tra cuối chỉ xác nhận có lỗi, không giải thích lỗi từ đâu. Không có dữ liệu theo công đoạn nên không thể cải tiến đúng chỗ.",
    rootCauses: [
      {
        title: "Kiểm soát chất lượng chỉ ở một điểm cuối — không phân tán theo công đoạn",
        description: "Sản phẩm qua 5 công đoạn mà không được kiểm tra ở điểm chuyển giao. Lỗi từ công đoạn 2 không được phát hiện cho đến khi qua hết 5 công đoạn.",
        consequence: "Khi phát hiện ở cuối, đã tốn công xử lý 3–4 công đoạn sau đó. Không biết lỗi từ đâu."
      },
      {
        title: "Không ghi nhận dữ liệu sản xuất — không có cơ sở để phân tích",
        description: "Không biết: công đoạn nào làm ca nào, ai làm, thông số máy khi đó thế nào. Khi có lỗi không có dữ liệu để tìm nguyên nhân.",
        consequence: "Cải tiến chất lượng chỉ dựa trên cảm giác và kinh nghiệm, không dựa trên dữ liệu thực tế."
      }
    ],
    solution: {
      approach: "Chuyển kiểm soát chất lượng từ 1 điểm cuối sang 5 điểm — tại mỗi điểm chuyển giao công đoạn, ghi nhận kết quả kiểm tra.",
      steps: [
        {
          title: "Xác định tiêu chuẩn đầu ra cho từng công đoạn",
          description: "Công đoạn 1 khi nào thì đạt chuẩn để chuyển sang công đoạn 2? Tiêu chuẩn cụ thể, có thể đo được — không phải cảm tính. Tổ trưởng mỗi công đoạn xác nhận trước khi chuyển."
        },
        {
          title: "Ghi nhận kết quả kiểm tra tại mỗi điểm chuyển giao",
          description: "Ai chuyển, ai nhận, kết quả kiểm tra là gì, thời điểm nào. Mất 2–3 phút/lần chuyển giao, nhưng có đủ dữ liệu để truy xuất."
        },
        {
          title: "Phân tích lỗi theo công đoạn sau 4 tuần",
          description: "Sau 4 tuần có đủ dữ liệu: công đoạn nào xuất hiện lỗi nhiều nhất, loại lỗi nào, ca nào. Tập trung cải tiến đúng chỗ — không phân tán."
        }
      ],
      dailyChanges: {
        before: "Kiểm tra cuối ngày: 12/150 sản phẩm lỗi — 8%. Họp tổng kết: 'Lỗi do công đoạn mài.' Tổ mài: 'Lỗi do phôi đầu vào không chuẩn.' Không ai có bằng chứng. Cuộc họp kết thúc không có kết luận.",
        after: "Kiểm tra cuối: 6/150 lỗi — 4%, giảm từ 8%. Mở báo cáo: 5/6 lỗi phát sinh tại điểm kiểm tra sau công đoạn 2, ca chiều, nhóm B. Tổ trưởng công đoạn 2 được gặp riêng — có dữ liệu cụ thể để thảo luận."
      }
    },
    results: [
      {
        metric: "Tỷ lệ sản phẩm lỗi",
        value: "Từ 8% xuống 3–4% sau 8 tuần",
        description: "Phát hiện và xử lý lỗi tại đúng công đoạn gây ra"
      },
      {
        metric: "Thời gian truy xuất nguồn gốc khi khách khiếu nại",
        value: "Từ không truy xuất được xuống còn 15 phút",
        description: "Dữ liệu đầy đủ theo công đoạn, ca, người làm"
      }
    ],
    keyInsight: "Kiểm tra chất lượng chỉ ở cuối giống như chỉ kiểm tra hóa đơn sau khi đã ký hợp đồng — phát hiện được vấn đề nhưng không ngăn chặn được. Kiểm soát theo từng công đoạn mới có thể cải thiện thực sự.",
    suitableFor: [
      "Xưởng có nhiều công đoạn sản xuất liên tiếp, tỷ lệ lỗi cần cải thiện để giữ khách B2B",
      "Khách hàng yêu cầu khả năng truy xuất nguồn gốc lỗi"
    ],
    notSuitableFor: [
      "Sản xuất 1–2 công đoạn đơn giản",
      "Sản phẩm không yêu cầu tiêu chuẩn chất lượng cao"
    ],
    ctaQuestion: "Khi khách hàng khiếu nại lô hàng lỗi — bạn có thể chỉ ra lỗi phát sinh từ công đoạn nào, ca nào, và ai đã làm không?"
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
    title: "Xưởng in ấn 25 người: Máy hỏng đột xuất 3–4 lần/tháng, mỗi lần mất cả ngày sản xuất và chi phí sửa khẩn cấp",
    summary: "Xưởng in ấn 25 nhân sự với 5 máy in chính. Trung bình 3–4 lần/tháng máy hỏng đột xuất, mỗi lần dừng 6–8 tiếng. Chi phí sửa chữa khẩn cấp cao hơn 40–60% so với bảo trì định kỳ. Chưa bao giờ có lịch bảo trì — máy nào hỏng thì sửa.",
    context: {
      businessType: "Xưởng in ấn thương mại, nhận đơn gấp từ khách B2B",
      industry: "Sản xuất",
      scale: "10–30 nhân sự, 5 máy in chính, khách B2B yêu cầu giao đúng giờ",
      situation: "Khách B2B có sự kiện, deadline cố định — không thể giao trễ. Mỗi lần máy hỏng đột xuất là mất khách hoặc phải thuê ngoài với giá cao."
    },
    painPoints: [
      "Thứ Sáu 2 giờ chiều: máy in 3 ngừng giữa lô hàng 5.000 tờ cần giao thứ Bảy. Phải gọi kỹ thuật khẩn cấp, giá gấp đôi bình thường",
      "Trung bình 3–4 lần/tháng, mỗi lần mất 6–8 tiếng sản xuất = 18–32 tiếng/tháng chạy không hết công suất",
      "Không nhớ lần nào bảo dưỡng cuối, không biết máy nào đang 'sắp' hỏng",
      "Chi phí sửa chữa khẩn cấp chiếm 25–35% tổng chi phí bảo dưỡng — cao hơn 3–4 lần so với nếu bảo trì định kỳ"
    ],
    previousAttempts: [
      "Nhờ thợ vận hành nhớ và báo khi máy có dấu hiệu bất thường — nhớ được 50%, còn lại báo muộn",
      "Ghi sổ tay lịch bảo trì — sổ không có ai xem và không có ai nhắc, hay bị quên",
      "Sửa chữa ngay khi máy hỏng — cách đang làm, không có dự phòng"
    ],
    previousAttemptsResult: "Không có hệ thống nào nhắc đến kỳ bảo trì và không ai được giao nhiệm vụ theo dõi. Kết quả: bảo trì chỉ xảy ra sau khi máy đã hỏng.",
    rootCauses: [
      {
        title: "Không có kế hoạch bảo trì định kỳ — chỉ bảo trì theo sự cố",
        description: "Chưa bao giờ lập lịch bảo trì cho từng máy theo giờ chạy hoặc theo thời gian. Không có quy trình kiểm tra định kỳ.",
        consequence: "Máy chạy đến khi hỏng — không có can thiệp phòng ngừa nào."
      },
      {
        title: "Không theo dõi lịch sử máy móc — không dự đoán được sự cố",
        description: "Không biết: máy nào hay hỏng, hỏng vì nguyên nhân gì, chu kỳ hỏng bao lâu một lần. Mỗi sự cố xử lý độc lập, không rút ra bài học.",
        consequence: "Không thể dự đoán máy nào sắp hỏng để bảo trì trước."
      }
    ],
    solution: {
      approach: "Lập lịch bảo trì định kỳ dựa trên khuyến cáo nhà sản xuất và ghi lại lịch sử sự cố để học từ dữ liệu thực.",
      steps: [
        {
          title: "Lập danh sách 5 máy và lịch bảo trì khuyến cáo",
          description: "Tra cứu manual hoặc liên hệ nhà cung cấp: mỗi máy cần bảo trì gì, bao lâu một lần, ai có thể làm. Ví dụ: máy in 3 — vệ sinh đầu in mỗi 200 giờ chạy, thay dầu mỗi 500 giờ."
        },
        {
          title: "Thiết lập nhắc bảo trì tự động",
          description: "Khi máy sắp đến kỳ bảo trì (còn 20 giờ), tổ trưởng nhận thông báo. Lên lịch bảo trì vào thời điểm ít đơn nhất, không để đến khi hỏng mới xử lý."
        },
        {
          title: "Ghi lại mọi sự cố: nguyên nhân, thời gian sửa, chi phí",
          description: "Mỗi lần máy hỏng: ghi lại nguyên nhân, đã làm gì để sửa, mất bao lâu, tốn bao nhiêu. Sau 3 tháng có dữ liệu để phân tích: máy nào hay hỏng nhất, hỏng vì lý do gì — ưu tiên bảo trì đúng chỗ."
        }
      ],
      dailyChanges: {
        before: "Thứ Năm. Thợ vận hành nghe tiếng lạ từ máy in 2. Không báo vì 'chắc không sao'. Thứ Sáu 10 giờ: máy dừng. Gọi kỹ thuật khẩn cấp, phí gấp đôi. Đơn khách trễ.",
        after: "Thứ Hai. Hệ thống nhắc: 'Máy in 2 đã chạy 190 giờ, đến kỳ bảo trì vệ sinh đầu in vào cuối tuần.' Tổ trưởng lên lịch bảo trì thứ Bảy khi ít đơn. Thứ Sáu máy vẫn chạy bình thường."
      }
    },
    results: [
      {
        metric: "Số lần máy hỏng đột xuất mỗi tháng",
        value: "Từ 3–4 lần xuống còn 0–1 lần",
        description: "Bảo trì định kỳ ngăn chặn phần lớn sự cố"
      },
      {
        metric: "Chi phí bảo dưỡng tổng mỗi tháng",
        value: "Giảm 30–40%",
        description: "Bảo trì định kỳ rẻ hơn 3–4 lần so với sửa chữa khẩn cấp"
      }
    ],
    keyInsight: "Bảo trì định kỳ không tốn nhiều tiền — tốn một ít thời gian có kế hoạch. Sửa chữa khẩn cấp mới tốn tiền, và còn kéo theo mất đơn hàng. Kế hoạch hóa bảo trì là đầu tư, không phải chi phí.",
    suitableFor: [
      "Xưởng phụ thuộc vào máy móc chính, không thể dừng sản xuất",
      "Đang chi nhiều cho sửa chữa khẩn cấp hoặc hay bị trễ đơn vì máy hỏng"
    ],
    notSuitableFor: [
      "Sản xuất thủ công, máy móc chỉ hỗ trợ nhỏ",
      "Máy móc đơn giản, rẻ, thay thế dễ dàng"
    ],
    ctaQuestion: "Tháng vừa rồi bạn mất bao nhiêu tiếng sản xuất vì máy hỏng đột xuất — và chi phí sửa chữa khẩn cấp là bao nhiêu?"
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
    title: "Xưởng thực phẩm 60 người: Chủ xưởng chỉ biết sản lượng thực tế vào cuối tuần — 4 ngày không đủ để can thiệp",
    summary: "Xưởng sản xuất thực phẩm 60 nhân sự chạy 2 ca. Báo cáo sản lượng chỉ có vào cuối tuần sau khi kế toán tổng hợp. Khi phát hiện ca nào đang dưới năng suất, đã trễ 3–4 ngày — không kịp điều chỉnh trong tuần đó.",
    context: {
      businessType: "Xưởng sản xuất thực phẩm, 2 ca/ngày, giao hàng theo tuần",
      industry: "Sản xuất",
      scale: "30–100 nhân sự, kế hoạch sản xuất theo tuần",
      situation: "Chủ xưởng cần biết mỗi ca đang đạt bao nhiêu phần trăm kế hoạch để điều chỉnh kịp thời — nhưng số liệu luôn đến chậm."
    },
    painPoints: [
      "Thứ Sáu nhận báo cáo: ca sáng thứ Ba chỉ đạt 72% kế hoạch. Đã trễ 3 ngày, không làm gì được nữa",
      "Không so sánh được năng suất giữa ca sáng và ca chiều — không biết ca nào đang có vấn đề",
      "Tổ trưởng hay quên báo cáo cuối ca — khi nhắc thì số liệu không chính xác vì đã quên một phần",
      "Không biết nguyên nhân sản lượng thấp: do máy chậm, do thiếu nguyên liệu, hay do nhân viên vắng?"
    ],
    previousAttempts: [
      "Nhờ tổ trưởng gửi báo cáo qua Zalo cuối mỗi ca — gửi được 60% số ca, 40% còn lại phải nhắc hoặc bị bỏ",
      "File Excel tổng hợp cuối ngày — phụ thuộc vào tổ trưởng nhập đúng và đủ",
      "Họp review tuần thứ Hai — biết tuần trước ra sao, không giúp điều chỉnh kịp thời"
    ],
    previousAttemptsResult: "Báo cáo phụ thuộc vào ý thức và trí nhớ của tổ trưởng. Khi tổ trưởng bận hoặc quên, chủ xưởng mất thông tin. Số liệu không đủ để phân tích nguyên nhân.",
    rootCauses: [
      {
        title: "Ghi nhận sản lượng phụ thuộc vào con người — không có quy trình cứng",
        description: "Không có thời điểm cố định, không có format chuẩn, không có ai kiểm tra xem đã báo cáo chưa. Mỗi tổ trưởng tự quyết định khi nào báo và báo những gì.",
        consequence: "Dữ liệu không đủ và không nhất quán để phân tích."
      },
      {
        title: "Báo cáo chỉ cho biết 'sản lượng là bao nhiêu' — không giải thích 'tại sao'",
        description: "Biết ca sáng đạt 72% nhưng không biết lý do: máy có vấn đề, thiếu nguyên liệu, hay 3 người vắng mặt. Không đủ thông tin để can thiệp đúng.",
        consequence: "Dù có số liệu sớm hơn cũng khó hành động vì thiếu ngữ cảnh."
      }
    ],
    solution: {
      approach: "Tạo form báo cáo cuối ca đơn giản gồm 4 trường bắt buộc — 3 phút điền, tự động tổng hợp lên dashboard của chủ xưởng.",
      steps: [
        {
          title: "Thiết kế form báo cáo cuối ca: 4 trường, 3 phút",
          description: "Trường 1: Sản lượng thực tế (số lượng). Trường 2: So với kế hoạch ca (%). Trường 3: Nếu dưới 90% — nguyên nhân chính (chọn từ 5 lý do có sẵn: máy, nguyên liệu, nhân sự, chất lượng, khác). Trường 4: Ghi chú nếu cần. Không hơn 4 trường."
        },
        {
          title: "Tổ trưởng điền form ngay trước khi bàn giao ca",
          description: "Quy tắc cứng: chưa điền form thì chưa bàn giao ca được. Không phải nhắc, không phải nhớ — nằm trong quy trình bàn giao ca."
        },
        {
          title: "Chủ xưởng nhận cảnh báo khi có ca dưới 85% kế hoạch",
          description: "Khi tổ trưởng điền '72%' và nguyên nhân 'máy' — chủ xưởng nhận thông báo ngay, không phải chờ đến cuối tuần. Còn đủ thời gian điều chỉnh ca tiếp theo."
        }
      ],
      dailyChanges: {
        before: "Ca sáng thứ Ba kết thúc. Tổ trưởng bàn giao cho ca chiều, đi về. Không báo cáo vì bận. Cuối tuần chủ xưởng nhận file Excel: ca sáng thứ Ba đạt 72%. Đã trễ 3 ngày.",
        after: "Ca sáng thứ Ba kết thúc. Tổ trưởng điền form 3 phút trước khi bàn giao: '72%, nguyên nhân: máy đóng gói chạy chậm 20%.' 5 phút sau chủ xưởng nhận thông báo. Gọi bộ phận kỹ thuật kiểm tra ngay — ca chiều máy đã được điều chỉnh, đạt 94%."
      }
    },
    results: [
      {
        metric: "Thời gian từ khi xảy ra vấn đề đến khi chủ xưởng biết",
        value: "Từ 3–4 ngày xuống còn dưới 1 tiếng",
        description: "Cảnh báo ngay khi tổ trưởng điền form cuối ca"
      },
      {
        metric: "Tỷ lệ ca đạt kế hoạch sản lượng",
        value: "Tăng từ 78% lên 88%",
        description: "Can thiệp kịp thời khi ca dưới chuẩn, không để vấn đề kéo dài"
      }
    ],
    keyInsight: "Thông tin sản lượng cuối tuần chỉ dùng để review — không dùng để điều chỉnh được nữa. Thông tin cuối ca mới có giá trị vận hành thực sự.",
    suitableFor: [
      "Xưởng sản xuất nhiều ca, cần theo dõi sản lượng theo từng ca để can thiệp kịp thời",
      "Kế hoạch sản xuất theo tuần và cần đảm bảo tiến độ từng ngày"
    ],
    notSuitableFor: [
      "Sản xuất theo đơn lẻ, sản lượng không đủ để phân tích",
      "Chỉ có 1 ca/ngày, chủ xưởng trực tiếp theo dõi"
    ],
    ctaQuestion: "Tuần vừa rồi, ca nào trong xưởng bạn có sản lượng thấp nhất — và bạn biết điều đó vào ngày nào?"
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
    title: "Xưởng may 45 người: Công nhân mới cần 3–4 tuần kèm cặp — tỷ lệ nghỉ việc trong 60 ngày đầu lên đến 35%",
    summary: "Xưởng may 45 nhân sự, tuyển công nhân mới liên tục do đơn hàng tăng. Mỗi công nhân mới cần 3–4 tuần được kèm 1-1, trong thời gian đó tổ trưởng giảm 30–40% sản lượng. Sau khi đào tạo xong, 35% công nhân nghỉ việc trong 60 ngày đầu — đầu tư đào tạo bị mất.",
    context: {
      businessType: "Xưởng may gia công, 6–8 công đoạn, sản lượng tính theo sản phẩm hoàn chỉnh",
      industry: "Sản xuất",
      scale: "30–100 nhân sự, tuyển thêm 3–5 công nhân/tháng khi đơn hàng tăng",
      situation: "Xưởng trong chu kỳ tuyển dụng liên tục: mỗi tháng tuyển, đào tạo, rồi một phần nghỉ việc và lại tuyển."
    },
    painPoints: [
      "Mỗi công nhân mới cần tổ trưởng kèm 3–4 tuần — mỗi ngày tổ trưởng dừng làm việc 1–2 tiếng để hướng dẫn",
      "Tổ trưởng nào kèm thì công nhân mới học theo cách đó — 3 tổ trưởng dạy 3 cách khác nhau",
      "35% công nhân mới nghỉ trong 60 ngày đầu — phần lớn nói 'không biết mình làm đúng không' và cảm thấy cô đơn trong giai đoạn đầu",
      "Chất lượng công đoạn đầu tiên không đồng đều: công nhân do tổ trưởng A kèm khác với công nhân do tổ trưởng B kèm"
    ],
    previousAttempts: [
      "Kèm cặp 1-1 trong 3–4 tuần — đang dùng, không có lựa chọn khác",
      "Cho xem thợ làm mẫu trong 3–5 ngày trước — giúp một phần nhưng không đủ",
      "Giao việc đơn giản nhất trước, tăng dần độ khó — hướng đúng nhưng không có lộ trình cụ thể"
    ],
    previousAttemptsResult: "Không có tài liệu chuẩn hóa nào. Mỗi tổ trưởng truyền đạt kiến thức theo cách riêng, không nhất quán. Công nhân mới không có chuẩn để đánh giá mình đang tiến bộ hay không.",
    rootCauses: [
      {
        title: "Không có tài liệu thao tác chuẩn — kiến thức chỉ trong đầu tổ trưởng",
        description: "Mỗi công đoạn có cách làm đúng, tốc độ chuẩn, lỗi hay gặp. Nhưng không được ghi lại. Công nhân mới phải học từ người — không thể tự tra cứu.",
        consequence: "Không thể scale đào tạo. Mỗi tổ trưởng chỉ kèm được 1 người tại một thời điểm."
      },
      {
        title: "Công nhân mới không có cột mốc rõ ràng — không biết mình đang ở đâu trong lộ trình",
        description: "Không có định nghĩa: tuần 1 cần đạt gì, tuần 2 đạt gì, bao giờ thì được làm độc lập. Công nhân mới cảm thấy mơ hồ và thiếu tự tin.",
        consequence: "Tỷ lệ nghỉ việc sớm cao — nhiều người nghỉ không phải vì không làm được, mà vì không biết mình có đang làm đúng không."
      }
    ],
    solution: {
      approach: "Quay video hướng dẫn từng thao tác từ tổ trưởng giỏi nhất, tạo lộ trình 10 ngày với cột mốc đo được.",
      steps: [
        {
          title: "Quay video thao tác chuẩn cho mỗi công đoạn",
          description: "Tổ trưởng giỏi nhất thực hiện từng thao tác, quay video ngắn 3–5 phút/thao tác. Ghi chú: lỗi hay gặp và cách tránh. Video một lần, dùng mãi — không cần tổ trưởng dạy lại từ đầu."
        },
        {
          title: "Tạo lộ trình 10 ngày với cột mốc đo được",
          description: "Ngày 1–3: xem video, thực hành chậm, tổ trưởng kiểm tra kỹ thuật cơ bản. Ngày 4–6: thực hành với tốc độ 70% chuẩn, tổ trưởng chỉ hỗ trợ khi cần. Ngày 7–10: đạt 90% tốc độ chuẩn, làm độc lập, tổ trưởng check cuối ngày. Mỗi ngày có tiêu chí rõ: đạt hay chưa đạt."
        },
        {
          title: "Tổ trưởng chỉ cần kiểm tra — không cần kèm liên tục",
          description: "Công nhân mới xem video tự học, tổ trưởng kiểm tra 2 lần/ngày thay vì theo sát 8 tiếng. Tiết kiệm 80% thời gian tổ trưởng."
        }
      ],
      dailyChanges: {
        before: "Công nhân mới ngày đầu. Tổ trưởng dừng làm việc của mình, đứng cạnh và dạy từng bước. 8 tiếng. Ngày tiếp theo làm lại. Trong 3 tuần, cứ có công nhân mới là tổ trưởng giảm sản lượng.",
        after: "Công nhân mới ngày đầu. Xem video 3 tiếng buổi sáng, thực hành buổi chiều. Tổ trưởng kiểm tra 2 lần — sáng và chiều, mỗi lần 15 phút. Sản lượng của tổ không bị ảnh hưởng đáng kể."
      }
    },
    results: [
      {
        metric: "Thời gian tổ trưởng dành để kèm 1 công nhân mới",
        value: "Từ 40–50 tiếng (3–4 tuần) xuống còn 8–10 tiếng",
        description: "Video thay thế phần lớn việc dạy lý thuyết và thao tác cơ bản"
      },
      {
        metric: "Tỷ lệ công nhân mới nghỉ việc trong 60 ngày đầu",
        value: "Từ 35% xuống còn 15–18%",
        description: "Lộ trình rõ ràng giúp công nhân thấy tiến bộ và tự tin hơn"
      }
    ],
    keyInsight: "Công nhân nghỉ việc sớm không phải vì công việc khó — mà vì không biết mình đang làm đúng hay sai, đang tiến bộ hay thụt lùi. Lộ trình rõ ràng với cột mốc đo được giải quyết cả vấn đề đào tạo lẫn giữ chân nhân sự.",
    suitableFor: [
      "Xưởng tuyển công nhân mới thường xuyên (từ 2–3 người/tháng trở lên)",
      "Công việc đòi hỏi kỹ năng tay nghề cụ thể, có thể đo được tốc độ và chất lượng"
    ],
    notSuitableFor: [
      "Nhân sự ổn định, ít tuyển mới",
      "Công việc đơn giản, không đòi hỏi kỹ năng đặc biệt"
    ],
    ctaQuestion: "Trong 3 tháng qua, bạn đào tạo được bao nhiêu công nhân mới — và bao nhiêu người trong số đó vẫn còn làm đến hôm nay?"
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
    title: "Agency 15 người: Team mất 2 tiếng/ngày trả lời khách hàng hỏi tiến độ — trong khi đang cần tập trung làm việc",
    summary: "Agency marketing 15 nhân sự đang quản lý 20+ khách hàng. Không có nơi nào để khách tự theo dõi tiến độ, nên mỗi ngày team nhận 15–20 tin nhắn hỏi qua Zalo — xử lý mất 1,5–2 tiếng và làm gián đoạn công việc đang làm.",
    context: {
      businessType: "Agency marketing và quảng cáo, dịch vụ theo tháng và theo dự án",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự, 20–30 khách hàng đang hoạt động",
      situation: "Agency đang phát triển tốt, khách hàng hài lòng với kết quả — nhưng trải nghiệm làm việc hàng ngày đang làm cả team và khách đều mệt mỏi."
    },
    painPoints: [
      "15–20 tin nhắn Zalo/ngày từ khách hỏi: 'Bài tuần này đã có chưa?', 'Campaign đang chạy kết quả thế nào?'",
      "Account manager dừng công việc đang làm để trả lời — trung bình 8–10 lần/ngày, mỗi lần mất 5–10 phút để tra cứu rồi trả lời",
      "Không có nơi nào để khách tự kiểm tra — mọi thứ nằm trong hệ thống nội bộ agency, khách không có access",
      "Một số việc bị quên vì thiếu hệ thống tracking — khách phàn nàn về sự bỏ sót, không phải về chất lượng"
    ],
    previousAttempts: [
      "Gửi báo cáo tuần qua email — khách nhận nhưng vẫn hỏi Zalo vào giữa tuần vì không nhớ nội dung email",
      "Tạo nhóm Zalo riêng cho từng khách — tiện liên lạc nhưng không giải quyết được việc khách muốn tự tra cứu",
      "Yêu cầu team trả lời nhanh hơn — giải quyết triệu chứng, không giải quyết nguyên nhân"
    ],
    previousAttemptsResult: "Khách hỏi vì không có cách nào tự kiểm tra. Khi không thể tự kiểm tra, cách duy nhất là hỏi — và team phải trả lời. Đây là vấn đề của hệ thống, không phải vấn đề của con người.",
    rootCauses: [
      {
        title: "Không có hệ thống để khách tự theo dõi tiến độ dự án của mình",
        description: "Tất cả thông tin tiến độ nằm trong hệ thống nội bộ. Khách không có access. Khi muốn biết phải hỏi — không có lựa chọn nào khác.",
        consequence: "Team bị gián đoạn liên tục. Khách cảm thấy thiếu minh bạch dù công việc đang tốt."
      },
      {
        title: "Không có hệ thống quản lý công việc đủ chặt — dễ bỏ sót",
        description: "Công việc nằm ở Zalo, email, họp — không có nơi tập trung với deadline và người chịu trách nhiệm rõ ràng.",
        consequence: "Một số task bị quên. Phát hiện khi khách nhắc — quá muộn để tránh được sự cố."
      }
    ],
    solution: {
      approach: "Tập trung quản lý công việc vào một hệ thống và cho khách access để tự theo dõi — thay vì phải hỏi team.",
      steps: [
        {
          title: "Chuẩn hóa quy trình quản lý công việc nội bộ",
          description: "Mỗi task có: tên rõ ràng, người thực hiện, deadline, trạng thái (chưa bắt đầu/đang làm/hoàn thành/cần review). Tất cả task của 1 khách nằm trong 1 không gian."
        },
        {
          title: "Cấp quyền cho khách xem tiến độ của dự án mình",
          description: "Khách đăng nhập, thấy ngay: tuần này có những task gì, task nào đang làm, task nào đã xong, task nào đang chờ review. Không cần nhắn hỏi nữa."
        },
        {
          title: "Tự động thông báo milestone quan trọng",
          description: "Khi team hoàn thành một deliverable lớn (bài content, báo cáo tháng, asset thiết kế), khách tự động nhận thông báo. Khách biết trước khi kịp hỏi."
        }
      ],
      dailyChanges: {
        before: "2 giờ chiều. Account đang soạn brief cho chiến dịch tuần sau. Zalo báo tin: 'Bạn ơi campaign tháng này kết quả thế nào rồi?' Dừng việc đang làm, mở Google Analytics, tổng hợp số, soạn tin nhắn trả lời. Mất 15 phút. 20 phút sau: thêm 2 tin nhắn khác từ 2 khách khác.",
        after: "Khách mở link dashboard của mình: thấy ngay campaign tháng này reach 450K, CPC giảm 12% so với tháng trước, đang chạy 3 ad set. Không cần nhắn hỏi. Account tiếp tục soạn brief không bị gián đoạn."
      }
    },
    results: [
      {
        metric: "Số tin nhắn hỏi tiến độ từ khách mỗi ngày",
        value: "Từ 15–20 tin/ngày xuống còn 3–5 tin",
        description: "Khách tự tra cứu được hầu hết thông tin mình cần"
      },
      {
        metric: "Thời gian team dành để trả lời câu hỏi tiến độ",
        value: "Từ 1,5–2 tiếng/ngày xuống còn 20–30 phút",
        description: "Tiết kiệm 1–1,5 tiếng/ngày = tương đương gần 1 ngày công/tuần"
      }
    ],
    keyInsight: "Khách hỏi tiến độ không phải vì họ lo lắng — họ hỏi vì không có cách nào tự kiểm tra. Khi có cách tự kiểm tra, 70–80% câu hỏi biến mất mà không cần team làm gì thêm.",
    suitableFor: [
      "Agency hoặc công ty dịch vụ đang quản lý 10+ dự án/khách hàng cùng lúc",
      "Team đang bị gián đoạn thường xuyên bởi câu hỏi tiến độ từ khách"
    ],
    notSuitableFor: [
      "Chỉ có 2–3 khách hàng, dễ quản lý cá nhân",
      "Dịch vụ đơn giản, không có nhiều đầu việc cần theo dõi"
    ],
    ctaQuestion: "Hôm nay team bạn sẽ dành bao nhiêu thời gian để trả lời câu hỏi tiến độ từ khách — thay vì làm công việc thực sự?"
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
    title: "Phòng khám 3 bác sĩ: Mỗi tuần có 3–4 ca trùng lịch hẹn, bệnh nhân phải chờ 45–60 phút",
    summary: "Phòng khám tư nhân 12 nhân sự với 3 bác sĩ, đặt lịch hẹn bằng sổ tay. Mỗi tuần xảy ra 3–4 ca trùng lịch — bệnh nhân phải chờ 45–60 phút ngoài dự kiến. Đây là nguyên nhân chính dẫn đến review 1–2 sao trên Google.",
    context: {
      businessType: "Phòng khám đa khoa tư nhân, 3 bác sĩ chuyên khoa khác nhau",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự, 60–90 lượt bệnh nhân/ngày",
      situation: "Phòng khám đang phát triển tốt về chất lượng chuyên môn, nhưng trải nghiệm chờ đợi đang ảnh hưởng đến uy tín."
    },
    painPoints: [
      "Trung bình 3–4 lần/tuần trùng lịch: 2 bệnh nhân cùng đặt hẹn 9 giờ với bác sĩ A — một người phải chờ",
      "Bệnh nhân quên lịch hẹn: 5–8 bệnh nhân/tuần không đến, phòng khám không được thông báo — lãng phí slot khám",
      "Lễ tân phải gọi điện nhắc lịch cho 30–40 bệnh nhân mỗi ngày — mất 1,5–2 tiếng chỉ để nhắc lịch",
      "Không biết bác sĩ nào đang rảnh lịch để điều phối khi có bệnh nhân walk-in"
    ],
    previousAttempts: [
      "Ghi sổ cẩn thận hơn — vẫn bị trùng khi 2 lễ tân cùng ghi vào lúc bận, không thấy nhau",
      "Phân công 1 người quản lý lịch — đỡ hơn nhưng vẫn trùng khi người đó đang xử lý việc khác",
      "Ghi vào file Excel chia sẻ — tốt hơn sổ tay, nhưng không có cảnh báo khi trùng và không nhắc tự động"
    ],
    previousAttemptsResult: "Sổ tay và Excel giải quyết được phần ghi nhận, nhưng không giải quyết được 2 vấn đề cốt lõi: cảnh báo khi trùng lịch và nhắc tự động cho bệnh nhân.",
    rootCauses: [
      {
        title: "Không có cảnh báo tự động khi 2 người đặt cùng khung giờ",
        description: "Dù dùng sổ hay Excel, khi 2 lễ tân cùng ghi vào 1 khung giờ gần như cùng lúc — không có gì ngăn cả. Phát hiện khi bệnh nhân đã đến.",
        consequence: "Trùng lịch xảy ra 3–4 lần/tuần, mỗi lần gây khó chịu cho cả bệnh nhân và bác sĩ."
      },
      {
        title: "Không có nhắc lịch tự động — lễ tân phải gọi điện thủ công",
        description: "Mỗi ngày phải gọi điện nhắc 30–40 bệnh nhân. Nếu bận không gọi được — bệnh nhân quên, không đến, slot bị lãng phí.",
        consequence: "Lễ tân mất 1,5–2 tiếng/ngày để nhắc lịch. Vẫn có 5–8 bệnh nhân/tuần quên vì không được nhắc đúng lúc."
      }
    ],
    solution: {
      approach: "Chuyển sang hệ thống đặt lịch có cảnh báo trùng tự động và nhắc bệnh nhân qua tin nhắn — không cần lễ tân gọi điện.",
      steps: [
        {
          title: "Chuyển toàn bộ lịch hẹn lên hệ thống số",
          description: "Mỗi bác sĩ có lịch riêng. Khi đặt lịch cho bệnh nhân vào khung giờ đã có người, hệ thống cảnh báo ngay — không thể đặt tiếp mà không xác nhận."
        },
        {
          title: "Bệnh nhân tự đặt lịch hoặc lễ tân đặt hộ — đều qua cùng hệ thống",
          description: "Bệnh nhân có thể tự đặt qua link trên Zalo OA hoặc website. Lễ tân đặt hộ khi bệnh nhân gọi điện. Tất cả đều vào cùng 1 database, không bao giờ trùng."
        },
        {
          title: "Tự động nhắc lịch qua Zalo 24 giờ và 1 giờ trước",
          description: "Bệnh nhân nhận nhắc tự động — không cần lễ tân gọi điện. Lễ tân tiết kiệm 1,5 tiếng/ngày và dùng thời gian đó để chăm sóc bệnh nhân đang có mặt."
        }
      ],
      dailyChanges: {
        before: "8h30. Bệnh nhân đến gặp lễ tân: 'Tôi hẹn 9 giờ với bác sĩ A.' Lễ tân tra sổ: đã có người 9 giờ. 'Xin lỗi anh, có lẫn lộn gì đó, anh đợi một lúc nhé.' Bệnh nhân chờ 45 phút. Ra về với review 2 sao.",
        after: "Đặt lịch online: chọn bác sĩ A, ngày và giờ — hệ thống chỉ cho chọn khung giờ còn trống. Hôm sau nhận Zalo nhắc: 'Bạn có lịch hẹn ngày mai lúc 9 giờ với bác sĩ A.' Đến đúng giờ, vào khám ngay."
      }
    },
    results: [
      {
        metric: "Số ca trùng lịch hàng tuần",
        value: "Từ 3–4 ca/tuần xuống còn 0",
        description: "Hệ thống không cho phép đặt 2 bệnh nhân cùng khung giờ"
      },
      {
        metric: "Thời gian lễ tân dành để nhắc lịch",
        value: "Từ 1,5–2 tiếng/ngày xuống còn 15 phút",
        description: "Nhắc tự động qua Zalo thay cho gọi điện thủ công"
      },
      {
        metric: "Tỷ lệ bệnh nhân không đến (no-show) không báo trước",
        value: "Từ 8–10% xuống còn 3–4%",
        description: "Nhắc 2 lần giúp bệnh nhân nhớ lịch và kịp hủy nếu có việc"
      }
    ],
    keyInsight: "Trùng lịch và chờ đợi là vấn đề kỹ thuật — không phải lỗi của lễ tân hay bác sĩ. Khi hệ thống ngăn được trùng và nhắc tự động, bệnh nhân trải nghiệm tốt hơn mà không cần thêm nhân sự.",
    suitableFor: [
      "Phòng khám có từ 2 bác sĩ trở lên, lượng bệnh nhân đặt lịch hàng ngày",
      "Đang có phàn nàn về chờ đợi hoặc trùng lịch"
    ],
    notSuitableFor: [
      "Phòng khám 1 bác sĩ, ít bệnh nhân, quản lý thủ công vẫn đủ",
      "Phòng khám không cần đặt lịch trước, bệnh nhân đến trực tiếp"
    ],
    ctaQuestion: "Tuần này phòng khám của bạn có bao nhiêu ca phải xin lỗi bệnh nhân vì trùng lịch hoặc chờ đợi quá lâu?"
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
    title: "Văn phòng luật 5 người: Tìm 1 tài liệu mất 10–15 phút — và 2 lần bị lỡ deadline vì không có ai nhắc",
    summary: "Văn phòng luật 5 nhân sự đang xử lý 35+ hồ sơ đồng thời. Hồ sơ nằm rải rác: giấy tờ trong tủ, file scan trên máy tính cá nhân, email. Khi cần tài liệu gấp mất 10–15 phút tìm. Năm qua có 2 lần bỏ lỡ deadline nộp hồ sơ tòa — ảnh hưởng nghiêm trọng đến uy tín.",
    context: {
      businessType: "Văn phòng luật tư vấn và tranh tụng",
      industry: "Dịch vụ",
      scale: "Dưới 10 nhân sự, 30–40 hồ sơ đang xử lý, mỗi hồ sơ có 20–100 tài liệu",
      situation: "Văn phòng đang phát triển, nhận thêm nhiều vụ. Nhưng hệ thống quản lý hồ sơ không scale theo — vẫn là cách làm việc của khi chỉ có 10 hồ sơ."
    },
    painPoints: [
      "Khách gọi hỏi về tài liệu — luật sư phải hỏi trợ lý, trợ lý tìm trong 2–3 máy tính và tủ hồ sơ: mất 10–15 phút",
      "2 lần trong năm qua bỏ lỡ deadline nộp hồ sơ tòa — phải giải thích với khách hàng, ảnh hưởng uy tín",
      "Khi luật sư A nghỉ, luật sư B không biết hồ sơ của A ở đâu, cần làm gì tiếp theo",
      "Không biết tổng quan: hồ sơ nào đang đến hạn trong 7 ngày tới, hồ sơ nào cần hành động ngay"
    ],
    previousAttempts: [
      "Lưu file vào thư mục theo tên khách — nhưng mỗi luật sư làm theo cách riêng, không thống nhất",
      "Ghi sổ theo dõi deadline — không ai cập nhật đều đặn và không có ai nhắc",
      "Nhờ trợ lý nhắc deadline quan trọng — trợ lý không được thông báo đủ thông tin, hay bị bỏ sót"
    ],
    previousAttemptsResult: "Mỗi giải pháp giải quyết được 1 vấn đề nhỏ nhưng không có hệ thống nào đủ để quản lý 35+ hồ sơ một cách nhất quán và không bỏ sót.",
    rootCauses: [
      {
        title: "Không có hệ thống lưu trữ tập trung — hồ sơ nằm ở nhiều nơi theo thói quen cá nhân",
        description: "Mỗi luật sư tự quyết định lưu tài liệu ở đâu, theo cách nào. Không có chuẩn chung. Không ai khác có thể tìm được tài liệu của người khác khi cần.",
        consequence: "Tìm tài liệu mất thời gian. Khi người phụ trách vắng mặt, hồ sơ gần như bị đóng băng."
      },
      {
        title: "Deadline phụ thuộc vào trí nhớ con người — không có hệ thống nhắc nhở",
        description: "Không có hệ thống nào tự động theo dõi deadline của từng hồ sơ và nhắc trước đủ thời gian để chuẩn bị.",
        consequence: "Khi nhiều hồ sơ cùng có deadline gần nhau, dễ bị bỏ sót — đặc biệt trong tuần bận."
      }
    ],
    solution: {
      approach: "Xây dựng hệ thống lưu trữ hồ sơ chung với cấu trúc thống nhất và nhắc deadline tự động.",
      steps: [
        {
          title: "Thiết kế cấu trúc thư mục chuẩn cho tất cả hồ sơ",
          description: "Mỗi hồ sơ: thư mục tên khách_năm_loại vụ. Trong đó: thư mục Tài liệu gốc, Tài liệu làm việc, Văn bản tòa, Thư từ trao đổi. Tất cả luật sư dùng cùng cấu trúc này — tìm ngay không cần hỏi."
        },
        {
          title: "Chuyển toàn bộ hồ sơ lên hệ thống chung trong 2 tuần",
          description: "Trợ lý scan và upload hồ sơ giấy, các luật sư copy file từ máy cá nhân lên. Chia nhau làm theo từng batch — không cần dừng công việc hiện tại."
        },
        {
          title: "Gắn deadline cho mỗi hồ sơ và thiết lập nhắc tự động",
          description: "Mỗi hồ sơ: nhập deadline quan trọng tiếp theo. Hệ thống nhắc trước 14 ngày, 7 ngày, 2 ngày và ngày hôm trước. Nhắc qua tin nhắn trực tiếp cho luật sư phụ trách."
        }
      ],
      dailyChanges: {
        before: "Khách gọi hỏi bản hợp đồng ký tháng 3 đã nộp chưa. Luật sư hỏi trợ lý. Trợ lý mở máy tính của luật sư kia, tìm trong 3 thư mục, không thấy. Mở email tìm, thấy được. Gọi lại khách sau 15 phút.",
        after: "Khách gọi hỏi. Luật sư gõ tên khách vào hệ thống: thấy ngay thư mục hồ sơ, mở Văn bản tòa, thấy bản hợp đồng. 'Dạ rồi anh, nộp ngày 15/3, đây là bản scan.' Trong 60 giây."
      }
    },
    results: [
      {
        metric: "Thời gian tìm tài liệu khi cần",
        value: "Từ 10–15 phút xuống còn dưới 1 phút",
        description: "Cấu trúc thống nhất, biết ngay tài liệu nằm ở thư mục nào"
      },
      {
        metric: "Số lần bỏ lỡ deadline quan trọng",
        value: "Từ 2 lần/năm xuống 0",
        description: "Nhắc tự động trước 14 ngày, đủ thời gian chuẩn bị"
      }
    ],
    keyInsight: "Văn phòng luật không thiếu kỷ luật — thiếu hệ thống. Khi hồ sơ được lưu đúng cách và deadline được nhắc đúng lúc, rủi ro bỏ sót giảm về gần 0 mà không cần tốn thêm nhân sự.",
    suitableFor: [
      "Văn phòng luật hoặc tư vấn đang xử lý 20+ hồ sơ đồng thời",
      "Đang có vấn đề tìm tài liệu chậm hoặc đã từng bỏ lỡ deadline"
    ],
    notSuitableFor: [
      "Chỉ có dưới 10 hồ sơ, quản lý thủ công vẫn đủ",
      "Không có hồ sơ có deadline cứng (tư vấn thuần túy)"
    ],
    ctaQuestion: "Trong 6 tháng qua, văn phòng bạn có deadline nào quan trọng suýt bị bỏ sót — hoặc đã bị bỏ sót không?"
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
    title: "Spa 20 người: Khách VIP đến 5 lần vẫn phải tự giới thiệu sở thích — nhân viên không có cách nào nhớ được 300 khách",
    summary: "Spa 20 nhân sự với 300 khách đang hoạt động, 40–50 trong đó là khách VIP đến 2–3 lần/tháng. Khách VIP phàn nàn: mỗi lần đến phải nói lại sở thích, dị ứng, nhân viên ưa thích. Nhân viên không thể nhớ 300 khách — đây là giới hạn của con người, không phải lỗi của nhân viên.",
    context: {
      businessType: "Spa chăm sóc da và thư giãn, phân khúc trung-cao cấp",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự, 300+ khách đang hoạt động, 40–50 khách VIP",
      situation: "Spa định vị là trải nghiệm cá nhân hóa cao cấp — nhưng thực tế mỗi lần đến như lần đầu."
    },
    painPoints: [
      "Khách VIP đã đến 8 lần: lễ tân vẫn hỏi 'chị muốn dùng dịch vụ gì hôm nay?' — không nhớ chị hay dùng massage 90 phút",
      "Nhân viên mới thay ca: không biết khách này dị ứng tinh dầu gì, thích nhiệt độ phòng bao nhiêu độ",
      "Mất khách VIP khi nhân viên quen của họ nghỉ việc — kiến thức về khách theo người đi hết",
      "Không biết khách nào hay đến vào tháng nào để chủ động nhắc khi đến kỳ"
    ],
    previousAttempts: [
      "Nhờ nhân viên nhớ khách quen — giới hạn 20–30 khách/người, không đủ",
      "Ghi sổ tay thông tin khách — ai cũng ghi theo cách riêng, không tìm được khi cần",
      "Dán ghi chú vào thẻ khách hàng vật lý — thẻ mất, ghi chú bị ướt, hay bị mất"
    ],
    previousAttemptsResult: "Tất cả giải pháp đều phụ thuộc vào con người ghi nhớ hoặc ghi chép. Con người có giới hạn — khi số lượng khách vượt 50–60 người, không thể nhớ hết được.",
    rootCauses: [
      {
        title: "Thông tin khách chỉ tồn tại trong trí nhớ nhân viên — không được hệ thống hóa",
        description: "Nhân viên biết chị A thích massage Thái, không thích tinh dầu chanh. Nhưng thông tin này chỉ trong đầu họ. Khi họ nghỉ, thông tin biến mất. Khi khách gặp nhân viên khác, phải khai lại.",
        consequence: "Trải nghiệm cá nhân hóa chỉ xảy ra với nhân viên quen — không consistent, không scale."
      },
      {
        title: "Không có cơ chế nhắc khách quay lại theo chu kỳ",
        description: "Biết chị A thường đến mỗi 3 tuần, nhưng không có hệ thống nào nhắc khi đến tuần thứ 4 mà chị chưa đặt lịch.",
        consequence: "Mất cơ hội chăm sóc chủ động, phụ thuộc vào khách nhớ và tự gọi."
      }
    ],
    solution: {
      approach: "Tạo hồ sơ khách hàng số — ghi nhận sau mỗi lần đến, nhân viên nào cũng đọc được trước khi phục vụ.",
      steps: [
        {
          title: "Tạo hồ sơ khách với 5 trường cốt lõi",
          description: "Họ tên + số điện thoại, ngày sinh, sở thích dịch vụ (chọn từ danh sách), dị ứng/lưu ý sức khỏe, nhân viên ưa thích. 5 trường, điền 1 lần, dùng mãi."
        },
        {
          title: "Thêm ghi chú sau mỗi lần đến",
          description: "Nhân viên thêm 1–2 dòng sau mỗi buổi: 'Hôm nay chị nói muốn thử dịch vụ mới tháng tới' hay 'Vai trái đang đau, cần nhẹ tay.' Lần sau nhân viên khác đọc được trước khi bắt đầu."
        },
        {
          title: "Thiết lập nhắc tự động theo chu kỳ của từng khách",
          description: "Khách A đến trung bình mỗi 3 tuần — khi đến tuần thứ 4 chưa đặt, hệ thống nhắc lễ tân gọi/nhắn: 'Chị A đã 4 tuần chưa đến, hỏi thăm và đề xuất đặt lịch.'"
        }
      ],
      dailyChanges: {
        before: "Chị Lan đến. Lễ tân: 'Chào chị, chị muốn dùng dịch vụ gì hôm nay?' Chị Lan: 'Như mọi lần thôi.' Lễ tân: 'Dạ, chị cho em biết lại để em ghi nhé...' Chị Lan không nói gì, mặt khó chịu.",
        after: "Chị Lan đến. Lễ tân mở hồ sơ trong 5 giây: 'Chào chị Lan, chị vẫn dùng massage Thái 90 phút với chị Hoa như thường nhỉ? Hôm nay chị Hoa rảnh lúc 3 giờ.' Chị Lan: 'Đúng rồi, cảm ơn em nhớ.'"
      }
    },
    results: [
      {
        metric: "Tỷ lệ khách VIP quay lại đúng chu kỳ",
        value: "Tăng 25–30%",
        description: "Được nhắc chủ động thay vì chờ khách tự nhớ"
      },
      {
        metric: "Điểm hài lòng của khách VIP (khảo sát hàng quý)",
        value: "Tăng 0.8–1.2 điểm trên thang 5",
        description: "Được nhớ tên và sở thích tạo cảm giác được trân trọng"
      }
    ],
    keyInsight: "Cá nhân hóa không cần trí nhớ tốt — cần hệ thống tốt. Khi hồ sơ khách được ghi đầy đủ, bất kỳ nhân viên nào phục vụ cũng có thể làm cho khách cảm thấy được biết đến và trân trọng.",
    suitableFor: [
      "Spa, salon, hoặc dịch vụ chăm sóc có khách quay lại thường xuyên",
      "Muốn nâng cao trải nghiệm khách VIP để giữ chân và tăng giá trị đơn hàng"
    ],
    notSuitableFor: [
      "Dịch vụ một lần, khách không quay lại",
      "Spa mới mở, chưa có lượng khách đủ để cần hệ thống"
    ],
    ctaQuestion: "Nếu khách VIP đến hôm nay gặp nhân viên mới — nhân viên đó biết gì về sở thích của khách trước khi bắt đầu phục vụ?"
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
    title: "Công ty kế toán 18 người: Mỗi nhân viên làm theo kiểu riêng — khi người phụ trách nghỉ, khách hàng bị gián đoạn dịch vụ",
    summary: "Công ty dịch vụ kế toán 18 nhân sự phục vụ 55 khách hàng doanh nghiệp. Mỗi kế toán viên phụ trách 4–7 khách và làm theo cách riêng. Khi ai đó nghỉ phép hoặc nghỉ việc — khách hàng của họ không được phục vụ đúng cách trong 1–2 tuần vì không ai biết phải làm gì.",
    context: {
      businessType: "Công ty dịch vụ kế toán và tư vấn thuế cho SME",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự, 50–60 khách hàng đang hoạt động",
      situation: "Công ty đang phát triển tốt, muốn tuyển thêm nhân sự và nhận thêm khách — nhưng chất lượng dịch vụ đang phụ thuộc quá nhiều vào từng cá nhân."
    },
    painPoints: [
      "Kế toán viên A nghỉ phép 1 tuần: khách hàng của A gọi điện và phàn nàn vì không ai xử lý được yêu cầu của họ",
      "Kế toán viên B nghỉ việc: mất 2 tuần để bàn giao, khách hàng chịu đựng gián đoạn",
      "Không thể đánh giá khách quan ai đang làm tốt ai đang làm kém — tiêu chuẩn khác nhau nên không so sánh được",
      "Nhận khách mới phải assign cho người nào đó rồi để họ tự xử lý — không có chuẩn nào để đảm bảo chất lượng đồng đều"
    ],
    previousAttempts: [
      "Để mỗi người tự quản lý khách của mình — linh hoạt nhưng chất lượng không đồng đều",
      "Họp chia sẻ kinh nghiệm hàng tuần — không đủ để chuẩn hóa cách làm việc cụ thể",
      "Giám đốc review báo cáo trước khi gửi khách — phát hiện vấn đề nhưng không giải quyết nguyên nhân"
    ],
    previousAttemptsResult: "Chất lượng vẫn phụ thuộc vào cá nhân. Khi nhân sự thay đổi, khách hàng cảm nhận được sự gián đoạn ngay.",
    rootCauses: [
      {
        title: "Không có quy trình làm việc chuẩn — mỗi người có cách riêng, không ai học được từ ai",
        description: "Kế toán viên giỏi nhất có checklist trong đầu — không được viết ra. Người mới phải tự tìm cách, thường học sai từ người kèm cặp không nhất quán.",
        consequence: "Chất lượng dịch vụ phụ thuộc vào kinh nghiệm cá nhân, không phải vào hệ thống."
      },
      {
        title: "Thông tin khách hàng nằm ở từng cá nhân — không phải của công ty",
        description: "Lịch sử làm việc, ghi chú đặc biệt, mật khẩu hệ thống của khách — mỗi người lưu theo cách riêng, ở máy cá nhân. Khi nghỉ việc, phải bàn giao từng thứ một.",
        consequence: "Bàn giao khách hàng mất 1–2 tuần và vẫn hay thiếu sót thông tin."
      }
    ],
    solution: {
      approach: "Tài liệu hóa quy trình tốt nhất thành checklist và tập trung thông tin khách về hệ thống chung — để bất kỳ ai cũng có thể tiếp nhận và phục vụ được.",
      steps: [
        {
          title: "Xây dựng checklist cho 5 loại công việc phổ biến nhất",
          description: "Khai thuế VAT hàng tháng, khai thuế TNCN, báo cáo tài chính quý, quyết toán năm, đăng ký thay đổi doanh nghiệp. Mỗi checklist: các bước cụ thể, tài liệu cần có, deadline, người chịu trách nhiệm."
        },
        {
          title: "Tạo hồ sơ khách hàng tập trung",
          description: "Mỗi khách: thông tin đăng ký doanh nghiệp, lịch sử dịch vụ đã làm, ghi chú đặc biệt (khách hay trễ deadline, ưa thích liên lạc qua đâu), tài liệu quan trọng. Lưu trên hệ thống chung — không phải máy cá nhân."
        },
        {
          title: "Khi ai đó nghỉ: người khác có đủ thông tin để tiếp nhận trong 1 ngày",
          description: "Với hồ sơ đầy đủ và checklist chuẩn, không cần bàn giao 2 tuần. Người mới nhận chỉ cần đọc hồ sơ và follow checklist — bắt đầu phục vụ trong ngày đầu tiên."
        }
      ],
      dailyChanges: {
        before: "Kế toán viên A gửi email: 'Em xin nghỉ phép tuần sau.' Giám đốc lo lắng: 'Khách của A sẽ ai xử lý? A để lại ghi chú gì không?' A gửi một file Word tóm tắt. Người thay không hiểu. Khách gọi điện phàn nàn 3 ngày sau.",
        after: "Kế toán viên A báo nghỉ phép. Giám đốc assign khách của A cho B. B mở hồ sơ từng khách: lịch sử 6 tháng, ghi chú, deadline tháng này, checklist công việc còn đang dở. B bắt đầu phục vụ hôm sau. Khách không biết A đang nghỉ."
      }
    },
    results: [
      {
        metric: "Thời gian bàn giao khách hàng khi nhân viên nghỉ",
        value: "Từ 1–2 tuần xuống còn 1–2 ngày",
        description: "Hồ sơ đầy đủ + checklist chuẩn thay cho bàn giao miệng"
      },
      {
        metric: "Sai sót và bỏ sót trong công việc định kỳ",
        value: "Giảm 60–70%",
        description: "Checklist chuẩn giúp không bỏ bước nào dù ai làm"
      }
    ],
    keyInsight: "Công ty dịch vụ tốt không phải vì có nhân viên giỏi — mà vì quy trình tốt giúp người bình thường làm được việc của người giỏi. Khi quy trình được tài liệu hóa, chất lượng dịch vụ không còn phụ thuộc vào việc có ai nghỉ hay không.",
    suitableFor: [
      "Công ty dịch vụ chuyên nghiệp (kế toán, tư vấn, luật) có nhiều khách hàng dạng retainer",
      "Đang gặp vấn đề chất lượng không đồng đều hoặc gián đoạn khi nhân sự thay đổi"
    ],
    notSuitableFor: [
      "Chỉ có 2–3 nhân viên, mỗi người phụ trách ít khách và giám đốc theo sát",
      "Mỗi dự án hoàn toàn khác nhau, không có quy trình lặp lại để chuẩn hóa"
    ],
    ctaQuestion: "Nếu nhân viên phụ trách khách hàng quan trọng nhất của bạn nghỉ việc vào tuần tới — bạn mất bao lâu để có người phục vụ khách đó mà không bị gián đoạn?"
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
    title: "Công ty tư vấn 25 người: 60% dự án trễ deadline — không phải vì team làm chậm, mà vì không ai biết mình đang chờ ai",
    summary: "Công ty tư vấn chiến lược 25 nhân sự, mỗi dự án có 3–4 team tham gia. 6/10 dự án trễ deadline. Khi phỏng vấn team, phát hiện vấn đề chính: không ai có tầm nhìn tổng thể — mỗi team chỉ biết phần việc của mình, không biết mình đang block ai và đang bị ai block.",
    context: {
      businessType: "Công ty tư vấn chiến lược và chuyển đổi tổ chức",
      industry: "Dịch vụ",
      scale: "10–30 nhân sự, 5–8 dự án đang chạy song song",
      situation: "Khách hàng bắt đầu phàn nàn về tiến độ. Giám đốc đang lo ngại ảnh hưởng đến uy tín và khả năng gia hạn hợp đồng."
    },
    painPoints: [
      "Team Research hoàn thành phân tích thứ Ba, gửi cho Strategy. Strategy chờ đến thứ Năm mới biết đã nhận được — mất 2 ngày không ai biết",
      "Họp sync hàng ngày 30 phút nhưng vẫn hay miss: 'Ôi tưởng bạn đã xong rồi' — sau khi đã chờ 2 ngày",
      "Khách hỏi tiến độ dự án: giám đốc phải gọi 3 team lead mới tổng hợp được câu trả lời — mất 1 tiếng",
      "Không ai có tầm nhìn tổng thể: phần nào đang chờ phần nào, phần nào đang block toàn bộ dự án"
    ],
    previousAttempts: [
      "Họp sync hàng ngày — giúp chia sẻ thông tin nhưng không giải quyết được visibility tổng thể",
      "Slack/Teams để trao đổi — tiện lợi nhưng thông tin bị trôi, không ai nhớ ai đã cam kết gì",
      "Email giao việc — formal nhưng khó theo dõi trạng thái và ai đang block ai"
    ],
    previousAttemptsResult: "Vấn đề không phải là thiếu công cụ communication — mà là thiếu nơi mọi người thấy được tổng thể dự án: phần nào xong, phần nào đang làm, phần nào đang chờ phần nào.",
    rootCauses: [
      {
        title: "Không có tầm nhìn tổng thể về dependency giữa các team",
        description: "Mỗi team biết việc của mình. Không ai biết team mình đang block team nào, hoặc đang bị team nào block. Phụ thuộc này không được make visible.",
        consequence: "Bottleneck không được phát hiện cho đến khi deadline đã qua. Mọi người làm việc chăm chỉ nhưng không phải những việc quan trọng nhất."
      },
      {
        title: "Không có điểm tập trung theo dõi cam kết — ai hứa gì, deadline là khi nào",
        description: "Cam kết trong họp, trong Slack, trong email — nằm ở nhiều nơi. Không có nơi nào để check: ai đã hứa giao gì vào ngày nào, đã giao chưa.",
        consequence: "Dễ 'quên' cam kết. Không ai nhắc. Delay xảy ra mà không ai để ý cho đến khi đã muộn."
      }
    ],
    solution: {
      approach: "Tạo bảng theo dõi tổng thể với dependency rõ ràng — để mọi người thấy mình đang chờ ai và ai đang chờ mình.",
      steps: [
        {
          title: "Lập bản đồ dependency cho từng dự án khi kickoff",
          description: "Trước khi bắt đầu dự án: vẽ sơ đồ phần nào cần hoàn thành trước phần nào. Ai cần output của ai. Ngày deliver của từng phần. Mất 30 phút khi kickoff, tiết kiệm nhiều giờ về sau."
        },
        {
          title: "Dùng bảng Kanban với cột 'Đang chờ' rõ ràng",
          description: "Ngoài cột 'Đang làm' và 'Hoàn thành', thêm cột 'Đang chờ [team khác]'. Khi task ở cột này, mọi người thấy ngay: task này bị block bởi ai, đã bao nhiêu ngày. Không ai bị block mà không ai biết."
        },
        {
          title: "15 phút đầu tuần review bảng tổng thể thay vì họp hàng ngày",
          description: "Mỗi thứ Hai 15 phút: nhìn vào bảng, xác định task nào đang block nhiều nhất, assign người giải quyết ngay. Thay vì họp hàng ngày 30 phút nhưng không có hành động cụ thể."
        }
      ],
      dailyChanges: {
        before: "Thứ Năm họp sync: 'Team Research ơi phần phân tích đã xong chưa?' 'Ôi xong thứ Ba rồi, tưởng đã gửi cho Strategy rồi.' 'Ủa, tụi mình chờ từ thứ Ba đến giờ.' Mất 2 ngày không ai làm được gì vì chờ nhau.",
        after: "Thứ Ba 5 giờ chiều: team Research cập nhật task 'Phân tích thị trường' sang cột 'Hoàn thành'. Hệ thống tự động thông báo Strategy: 'Phân tích thị trường đã sẵn sàng — task của bạn có thể bắt đầu.' Strategy bắt đầu thứ Tư sáng, không mất 2 ngày chờ."
      }
    },
    results: [
      {
        metric: "Tỷ lệ dự án giao đúng deadline",
        value: "Từ 40% lên 72% sau 3 tháng",
        description: "Phát hiện bottleneck sớm, xử lý trước khi ảnh hưởng deadline"
      },
      {
        metric: "Thời gian họp sync hàng tuần",
        value: "Từ 30 phút/ngày xuống còn 15 phút/tuần",
        description: "Bảng tổng thể thay thế phần lớn nhu cầu cập nhật qua họp"
      }
    ],
    keyInsight: "Trễ deadline trong dự án nhiều team không phải vì ai làm chậm — mà vì thông tin không chạy đúng giữa các team. Khi dependency được make visible, mọi người tự biết cần làm gì mà không cần hỏi.",
    suitableFor: [
      "Công ty dịch vụ hoặc agency với dự án có nhiều team phối hợp",
      "Đang gặp tỷ lệ trễ deadline cao dù team làm việc chăm chỉ"
    ],
    notSuitableFor: [
      "Dự án 1–2 người, không có dependency phức tạp",
      "Công việc độc lập hoàn toàn, từng người tự quản lý tiến độ"
    ],
    ctaQuestion: "Trong dự án đang chạy của bạn — ngay lúc này có phần nào đang chờ phần khác mà người liên quan chưa biết không?"
  }
];