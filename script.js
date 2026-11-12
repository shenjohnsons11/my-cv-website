// Tự động cập nhật năm ở Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Xử lý menu trên Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Đóng menu khi click vào một link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Active menu item theo vị trí cuộn (Scrollspy)
const sections = document.querySelectorAll('header#banner, section.section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('#', '');
        if (href === current || (current === 'banner' && href === 'top')) {
            link.classList.add('active');
        }
    });

    // Nút cuộn lên đầu trang (Back to top)
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// ==========================================================================
// CHUYỂN ĐỔI NGÔN NGỮ (VIE / ENG)
// ==========================================================================
const translations = {
    vi: {
        pageTitle: 'Lợi Hoàng Nguyên - Mobile Developer (Intern / Junior) CV',
        'nav.backTopTitle': 'Về đầu trang',
        'hero.greeting': 'Xin chào, tôi là',
        'hero.name': 'Lợi Hoàng Nguyên',
        'hero.slogan': 'Intern / Junior Mobile Developer (React Native)',
        'hero.tagline': 'Tốt nghiệp chuyên ngành Lập trình Mobile đa nền tảng tại FPT Polytechnic. Đã có kinh nghiệm thực tập Front-end Mobile Developer (React Native CLI) tại ClinicPro và các đồ án thực tế với Expo, Node.js.',
        'hero.emailTitle': 'Gửi Email',
        'about.subtitle': 'Giới thiệu & Mục tiêu nghề nghiệp',
        'about.cardTitle': 'Giới thiệu ngắn',
        'about.p1': 'Tôi là <strong>Lợi Hoàng Nguyên</strong>, tốt nghiệp chuyên ngành <strong>Lập trình Mobile đa nền tảng</strong> tại <strong>FPT Polytechnic</strong> và từng thực tập vị trí <strong>Front-end Mobile Developer</strong> tại Công ty TNHH ClinicPro. Hiện tại tôi đang tìm kiếm cơ hội ở vị trí <strong>Intern hoặc Junior Mobile Developer</strong>.',
        'about.p2': 'Thế mạnh hiện tại của tôi nằm ở <strong>React Native (CLI &amp; Expo SDK)</strong> và hệ sinh thái JavaScript/TypeScript. Từ dự án thực tập đến đồ án tốt nghiệp, tôi trực tiếp xây dựng giao diện Android/iOS, cấu hình React Navigation, tối ưu FlatList, kết nối RESTful API (Axios, JWT, Socket.io) và kiểm thử trực tiếp trên thiết bị thật.',
        'about.p3': 'Trong các đồ án nhóm, tôi thường phụ trách dựng khung source code ban đầu, chia đầu việc theo từng module và review pull request cùng các bạn. Tôi thích làm sản phẩm chạy ổn định, dễ đọc code và sẵn sàng học hỏi các quy chuẩn kỹ thuật từ anh chị đi trước.',
        'about.btnContact': 'Liên hệ phỏng vấn',
        'about.btnProjects': 'Xem dự án đã làm',
        'about.btnPdf': 'Xem CV dạng PDF',
        'info.cardTitle': 'Thông tin cá nhân',
        'info.nameLabel': 'Họ và tên:',
        'info.nameVal': 'Lợi Hoàng Nguyên',
        'info.locationLabel': 'Khu vực:',
        'info.locationVal': 'TP. Hồ Chí Minh, Việt Nam',
        'info.statusLabel': 'Trạng thái:',
        'info.statusVal': 'Sẵn sàng đi làm / thực tập',
        'work.subtitle': 'Kinh nghiệm làm việc thực tế tại doanh nghiệp',
        'work.w1.role': 'Thực tập sinh Mobile Developer (Front-end)',
        'work.w1.company': 'Công ty TNHH ClinicPro',
        'work.w1.badge': 'Thực Tập Doanh Nghiệp',
        'work.w1.heading': 'Ứng Dụng Di Động Quản Lý Phòng Khám &amp; Đặt Lịch Khám (Android / iOS)',
        'work.w1.desc': 'Tham gia phát triển ứng dụng di động cho lĩnh vực y tế (đặt lịch khám, tra cứu bác sĩ, hồ sơ bệnh án EMR và giỏ thuốc) trên nền tảng React Native CLI kết nối hệ thống backend Node.js / MySQL.',
        'work.w1.t1': '<strong>Phát triển giao diện &amp; điều hướng:</strong> Xây dựng các màn hình đăng nhập/đăng ký, danh sách bác sĩ/chuyên khoa, form đặt/hủy lịch khám, giỏ thuốc và hồ sơ bệnh án bằng React Native CLI, Flexbox và React Navigation (Stack/Tab Navigator).',
        'work.w1.t2': '<strong>Tích hợp API &amp; Tối ưu hiển thị:</strong> Kết nối RESTful API (Node.js/MySQL) qua Axios, xử lý trạng thái loading/error, tìm kiếm/lọc/sắp xếp dữ liệu và tối ưu hiệu năng danh sách bằng FlatList.',
        'work.w1.t3': '<strong>Kiểm thử thiết bị thật &amp; Build APK:</strong> Kiểm thử đa thiết bị trên Android (kể cả thiết bị đời cũ và màn hình tai thỏ) và iOS, theo dõi RAM/hiệu năng, đóng gói file APK test/release và phối hợp nhóm qua Git.',
        'work.w1.t4': '<strong>Cải tiến UI/UX theo phản hồi thực tế:</strong> Tiếp nhận góp ý từ mentor và phản hồi sử dụng thực tế của bác sĩ/người dùng tại phòng khám để điều chỉnh luồng thao tác và giao diện gọn hơn.',
        'work.w1.t5': '<strong>Công nghệ:</strong> React Native CLI, React Navigation, Axios, Flexbox, FlatList, Node.js, MySQL, Postman, Git.',
        'skills.subtitle': 'Công nghệ và công cụ đã sử dụng qua các dự án',
        'skills.b1.title': 'Mobile Development (Trọng tâm)',
        'skills.b1.i1': '<strong>Framework:</strong> React Native (CLI &amp; Expo SDK), React Navigation (Stack/Tab)',
        'skills.b1.i2': '<strong>Tối ưu &amp; Thiết bị:</strong> FlatList optimization, Flexbox, Expo Camera (quét/OCR), Push Notifications',
        'skills.b1.i3': '<strong>State &amp; Mạng:</strong> Axios, Zustand, Context API, Light/Dark Theme, Lottie',
        'skills.b1.i4': '<strong>Build &amp; Test:</strong> Đóng gói APK Android, test thiết bị thật (Android / iOS), JavaScript (ES6+), TypeScript',
        'skills.b2.title': 'Web & Frontend',
        'skills.b2.i1': '<strong>Framework:</strong> Next.js (App Router), React.js',
        'skills.b2.i2': '<strong>Giao diện:</strong> HTML5, CSS3, Tailwind CSS, Responsive Layout',
        'skills.b2.i3': '<strong>Nền tảng bổ trợ:</strong> Java Core (OOP), Java Swing (đồ án desktop)',
        'skills.b2.i4': '<strong>Tiện ích trình duyệt:</strong> Chrome Extensions API (Manifest & Messaging)',
        'skills.b3.title': 'Backend, Database & API',
        'skills.b3.i1': '<strong>Backend:</strong> Node.js, Express.js (RESTful APIs), Python',
        'skills.b3.i2': '<strong>Cơ sở dữ liệu:</strong> MongoDB (Mongoose), SQLite3, MS SQL Server, MySQL',
        'skills.b3.i3': '<strong>Realtime & Thanh toán:</strong> Socket.io, VietQR API, VNPay Sandbox',
        'skills.b3.i4': '<strong>Xác thực & AI API:</strong> JWT, phân quyền Role (Chủ trọ / Người thuê), OTP, Google Gemini / OpenAI API',
        'skills.b4.title': 'Quy trình & Công cụ',
        'skills.b4.i1': '<strong>Quản lý mã nguồn:</strong> Git, GitHub (branching, Pull Request, review code cơ bản)',
        'skills.b4.i2': '<strong>Làm việc nhóm:</strong> Chia task theo module, thống nhất quy chuẩn API & đặt tên cho đồ án',
        'skills.b4.i3': '<strong>Thiết kế & Kiểm thử API:</strong> Postman, Draw.io (ERD, Use Case)',
        'skills.b4.i4': '<strong>Môi trường làm việc:</strong> VS Code, NetBeans, macOS, Terminal cơ bản',
        'projects.subtitle': 'Các dự án tốt nghiệp, cá nhân và đồ án môn học đã thực hiện',
        'projects.p1.role': 'Mobile Developer (React Native) & Điều phối nhóm',
        'projects.p1.name': 'TroHub - Ứng Dụng Quản Lý Nhà Trọ',
        'projects.p1.badge': 'Đồ Án Tốt Nghiệp',
        'projects.p1.heading': 'Mobile App (React Native / Expo), WebAdmin & Backend',
        'projects.p1.desc': 'Ứng dụng hỗ trợ chủ trọ và người thuê quản lý phòng, hợp đồng, hóa đơn điện nước và thanh toán qua VietQR trên nền tảng di động và web.',
        'projects.p1.t1': '<strong>Phát triển Mobile App:</strong> Xây dựng giao diện và luồng nghiệp vụ bằng React Native (Expo SDK), hỗ trợ Light/Dark Theme và đồng bộ 8 module chức năng với trang WebAdmin.',
        'projects.p1.t2': '<strong>Tích hợp Camera OCR & AI:</strong> Dùng Expo Camera hỗ trợ quét chỉ số công tơ điện nước và kết nối Google Gemini API làm trợ lý gợi ý thao tác cho chủ trọ.',
        'projects.p1.t3': '<strong>Backend & Realtime:</strong> Tham gia xây dựng RESTful API bằng Node.js, Express, MongoDB (Mongoose), xác thực JWT, phân quyền Chủ trọ / Người thuê, thông báo realtime qua Socket.io và tạo mã thanh toán VietQR.',
        'projects.p1.t4': '<strong>Phối hợp nhóm:</strong> Thiết kế ERD ban đầu, soạn tài liệu quy chuẩn kỹ thuật chung cho nhóm, chia đầu việc theo module và rà soát Pull Request trước khi merge.',
        'projects.p1.t5': '<strong>Công nghệ:</strong> React Native, Expo, Next.js, Node.js, Express, MongoDB, Socket.io, Gemini API, VietQR.',
        'projects.p2.role': 'Lập trình viên cá nhân (Solo Project)',
        'projects.p2.badge': 'Dự Án Cá Nhân',
        'projects.p2.heading': 'Ứng dụng Lưu Trữ, Phân Loại Bài Viết & Chrome Extension',
        'projects.p2.desc': 'Công cụ chạy cục bộ giúp lưu bài viết từ mạng xã hội (Facebook, LinkedIn, X) thông qua Chrome Extension, lưu trữ trên máy và hỗ trợ tìm kiếm, tóm tắt bằng AI.',
        'projects.p2.t1': '<strong>Backend cục bộ:</strong> Viết bằng Python và SQLite3 để lưu nội dung bài viết và tệp đính kèm trực tiếp trên máy cá nhân.',
        'projects.p2.t2': '<strong>Chrome Extension:</strong> Phát triển tiện ích trình duyệt kết nối với backend cục bộ qua mã ghép nối để lưu nhanh bài viết đang xem.',
        'projects.p2.t3': '<strong>Tích hợp AI:</strong> Hỗ trợ cấu hình OpenAI và Google Gemini (Flash & Embedding) để tóm tắt nội dung và trích xuất từ khóa tìm kiếm.',
        'projects.p2.t4': '<strong>Công nghệ:</strong> Python, SQLite3, Chrome Extensions API, OpenAI / Gemini API.',
        'projects.p3.role': 'Thành viên & Hỗ trợ nhóm môn học',
        'projects.p3.name': 'Đồ Án Lập Trình Java & Cơ Sở Dữ Liệu',
        'projects.p3.badge': 'Đồ Án Môn Học',
        'projects.p3.heading': 'Ứng dụng Quản lý Bán hàng (Java Swing & SQL Server)',
        'projects.p3.desc': 'Các đồ án môn học tại FPT Polytechnic (Java 1, Java 2, Dự án mẫu) xây dựng ứng dụng desktop kết nối cơ sở dữ liệu SQL Server.',
        'projects.p3.t1': '<strong>Thực hiện chức năng:</strong> Cùng nhóm xây dựng giao diện Java Swing và xử lý các luồng CRUD kết nối Microsoft SQL Server qua JDBC.',
        'projects.p3.t2': '<strong>Kiến thức nền tảng:</strong> Rèn luyện lập trình hướng đối tượng (OOP), mô hình MVC, thiết kế bảng quan hệ và xử lý ngoại lệ.',
        'projects.p3.t3': '<strong>Công nghệ:</strong> Java Core, Java Swing, JDBC, MS SQL Server, NetBeans.',
        'edu.subtitle': 'Quá trình học tập chuyên môn',
        'edu.e1.status': 'Đã tốt nghiệp',
        'edu.e1.degree': 'Chuyên ngành Lập trình Mobile đa nền tảng',
        'edu.e1.school': 'Trường Cao đẳng FPT Polytechnic',
        'edu.e1.d1': 'Hoàn thành chương trình đào tạo thực hành về lập trình Web, Java OOP, cơ sở dữ liệu và quy trình làm việc nhóm theo Agile/Scrum.',
        'edu.e1.d2': 'Thực hiện các đồ án môn học và đồ án tốt nghiệp với sản phẩm thực tế, tập trung vào mảng phát triển ứng dụng di động (React Native) và API.',
        'edu.e2.status': 'Từng theo học',
        'edu.e2.degree': 'Chương trình Đào tạo Quốc tế (Ngành CNTT)',
        'edu.e2.school': 'NIIE - Viện Đào Tạo Quốc Tế (ĐH Nguyễn Tất Thành)',
        'edu.e2.d1': 'Theo học giai đoạn nền tảng trong môi trường sử dụng tài liệu tiếng Anh trước khi chuyển hướng sang học thực hành chuyên sâu tại FPT Polytechnic.',
        'edu.e2.d2': 'Rèn luyện thói quen đọc hiểu tài liệu kỹ thuật tiếng Anh, làm việc nhóm và tìm hiểu các kiến thức nền tảng về công nghệ thông tin.',
        'contact.subtitle': 'Nếu anh/chị đang tìm Intern hoặc Junior Mobile Developer (React Native), rất mong có cơ hội trao đổi thêm.',
        'contact.panelTitle': 'Thông tin liên hệ',
        'contact.panelDesc': 'Tôi sẵn sàng trao đổi và phỏng vấn cho vị trí <strong>Intern / Junior Mobile Developer</strong> (React Native) hoặc các vị trí Frontend liên quan.',
        'contact.emailLabel': 'Email cá nhân',
        'contact.locationLabel': 'Địa điểm làm việc',
        'contact.locationVal': 'TP. Hồ Chí Minh (Sẵn sàng Onsite / Hybrid)',
        'form.nameLabel': 'Họ và tên / Công ty *',
        'form.namePlaceholder': 'Ví dụ: Nguyễn Văn A - Công ty ABC',
        'form.emailLabel': 'Email liên hệ *',
        'form.subjectLabel': 'Vị trí tuyển dụng / Chủ đề',
        'form.msgLabel': 'Nội dung tin nhắn *',
        'form.msgPlaceholder': 'Thông tin công việc hoặc lịch hẹn phỏng vấn...',
        'form.submit': 'Gửi tin nhắn',
        'form.alert': 'Cảm ơn bạn đã để lại lời nhắn! Nguyên sẽ phản hồi qua email trong thời gian sớm nhất.',
        'footer.name': 'Lợi Hoàng Nguyên',
        'modal.title': 'Xem CV dạng PDF',
        'modal.desc': 'Chọn phiên bản ngôn ngữ bạn muốn xem hoặc tải về (chuẩn 2 trang A4 ToiDiCodeDao):',
        'modal.viHeading': 'Bản Tiếng Việt (PDF)',
        'modal.viBadge': 'A4 • 2 trang',
        'modal.viDesc': 'Định dạng tiếng Việt, phù hợp cho nhà tuyển dụng tại Việt Nam.',
        'modal.enHeading': 'Bản Tiếng Anh (PDF)',
        'modal.enBadge': 'A4 • 2 trang',
        'modal.enDesc': 'Định dạng tiếng Anh, phù hợp cho công ty đa quốc gia.',
        'modal.btnView': 'Xem trực tuyến',
        'modal.btnDownload': 'Tải về',
        'modal.quickPrint': 'Hoặc in trực tiếp giao diện website này (Print A4)'
    },
    en: {
        pageTitle: 'Loi Hoang Nguyen - Mobile Developer (Intern / Junior) CV',
        'nav.backTopTitle': 'Back to top',
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Loi Hoang Nguyen',
        'hero.slogan': 'Intern / Junior Mobile Developer (React Native)',
        'hero.tagline': 'Cross-platform Mobile Development graduate from FPT Polytechnic. Previously interned as a Front-end Mobile Developer (React Native CLI) at ClinicPro, with hands-on projects in Expo and Node.js.',
        'hero.emailTitle': 'Send Email',
        'about.subtitle': 'Introduction & Career Goal',
        'about.cardTitle': 'About Me',
        'about.p1': "I'm <strong>Loi Hoang Nguyen</strong>, a <strong>Cross-platform Mobile Development</strong> graduate from <strong>FPT Polytechnic</strong> with internship experience as a <strong>Front-end Mobile Developer</strong> at ClinicPro. I'm currently looking for an <strong>Intern or Junior Mobile Developer</strong> role.",
        'about.p2': 'My primary stack is <strong>React Native (CLI &amp; Expo SDK)</strong> and JavaScript/TypeScript. Across my internship and capstone work, I built Android/iOS screens, configured React Navigation, optimized FlatList rendering, integrated RESTful APIs (Axios, JWT, Socket.io), and tested on physical devices.',
        'about.p3': 'In team projects, I usually helped set up the initial repository structure, break down tasks by module, and review pull requests with teammates. I care about shipping reliable features, writing readable code, and learning engineering best practices from senior developers.',
        'about.btnContact': 'Contact Me',
        'about.btnProjects': 'View Projects',
        'about.btnPdf': 'View CV as PDF',
        'info.cardTitle': 'Personal Info',
        'info.nameLabel': 'Full Name:',
        'info.nameVal': 'Loi Hoang Nguyen',
        'info.locationLabel': 'Location:',
        'info.locationVal': 'Ho Chi Minh City, Vietnam',
        'info.statusLabel': 'Availability:',
        'info.statusVal': 'Available for Intern / Junior roles',
        'work.subtitle': 'Hands-on industry experience',
        'work.w1.role': 'Front-end Mobile Developer Intern',
        'work.w1.company': 'ClinicPro Co., Ltd.',
        'work.w1.badge': 'Internship',
        'work.w1.heading': 'Clinic Management &amp; Appointment Mobile App (Android / iOS)',
        'work.w1.desc': 'Contributed to a healthcare mobile app (appointment booking, doctor directory, EMR medical records, and medicine cart) built with React Native CLI connected to a Node.js / MySQL backend.',
        'work.w1.t1': '<strong>UI &amp; Navigation:</strong> Built login/register flows, doctor and specialty directories, appointment booking/cancellation forms, medicine cart, and EMR screens using React Native CLI, Flexbox, and React Navigation (Stack/Tab).',
        'work.w1.t2': '<strong>API Integration &amp; Performance:</strong> Integrated Node.js/MySQL RESTful APIs via Axios, handled loading/error states, implemented search/filter/sort flows, and optimized list rendering with FlatList.',
        'work.w1.t3': '<strong>Real-Device Testing &amp; APK Builds:</strong> Tested across physical Android (including older devices and notch screens) and iOS devices, profiled memory usage, built test/release APKs, and collaborated via Git.',
        'work.w1.t4': '<strong>User-Feedback Iteration:</strong> Refined UI layouts and user flows based on mentor reviews and real feedback from clinic doctors and patients.',
        'work.w1.t5': '<strong>Tech Stack:</strong> React Native CLI, React Navigation, Axios, Flexbox, FlatList, Node.js, MySQL, Postman, Git.',
        'skills.subtitle': 'Technologies and tools used across my projects',
        'skills.b1.title': 'Mobile Development (Primary)',
        'skills.b1.i1': '<strong>Framework:</strong> React Native (CLI &amp; Expo SDK), React Navigation (Stack/Tab)',
        'skills.b1.i2': '<strong>Optimization &amp; Device:</strong> FlatList optimization, Flexbox, Expo Camera (scanning/OCR), Push Notifications',
        'skills.b1.i3': '<strong>State &amp; Networking:</strong> Axios, Zustand, Context API, Light/Dark Theme, Lottie',
        'skills.b1.i4': '<strong>Build &amp; Testing:</strong> Android APK builds, physical device testing (Android / iOS), JavaScript (ES6+), TypeScript',
        'skills.b2.title': 'Web & Frontend',
        'skills.b2.i1': '<strong>Framework:</strong> Next.js (App Router), React.js',
        'skills.b2.i2': '<strong>Styling:</strong> HTML5, CSS3, Tailwind CSS, Responsive Layout',
        'skills.b2.i3': '<strong>Additional:</strong> Java Core (OOP), Java Swing (desktop coursework)',
        'skills.b2.i4': '<strong>Browser Tooling:</strong> Chrome Extensions API (Manifest & Messaging)',
        'skills.b3.title': 'Backend, Database & API',
        'skills.b3.i1': '<strong>Backend:</strong> Node.js, Express.js (RESTful APIs), Python',
        'skills.b3.i2': '<strong>Databases:</strong> MongoDB (Mongoose), SQLite3, MS SQL Server, MySQL',
        'skills.b3.i3': '<strong>Realtime & Payments:</strong> Socket.io, VietQR API, VNPay Sandbox',
        'skills.b3.i4': '<strong>Auth & AI APIs:</strong> JWT, Role-based Access (Landlord / Tenant), OTP, Google Gemini / OpenAI API',
        'skills.b4.title': 'Workflow & Tools',
        'skills.b4.i1': '<strong>Version Control:</strong> Git, GitHub (branching, Pull Requests, basic code review)',
        'skills.b4.i2': '<strong>Teamwork:</strong> Module task breakdown, API conventions, and shared naming guidelines',
        'skills.b4.i3': '<strong>Design & API Testing:</strong> Postman, Draw.io (ERD, Use Case)',
        'skills.b4.i4': '<strong>Environment:</strong> VS Code, NetBeans, macOS, basic Terminal',
        'projects.subtitle': 'Capstone, personal, and coursework projects I have built',
        'projects.p1.role': 'Mobile Developer (React Native) & Team Coordinator',
        'projects.p1.name': 'TroHub - Boarding House Management App',
        'projects.p1.badge': 'Capstone Project',
        'projects.p1.heading': 'Mobile App (React Native / Expo), WebAdmin & Backend',
        'projects.p1.desc': 'A cross-platform app helping landlords and tenants manage rooms, contracts, utility billing, and VietQR payments across mobile and web.',
        'projects.p1.t1': '<strong>Mobile App Development:</strong> Built screens and core user flows with React Native (Expo SDK), supporting Light/Dark theme and aligning 8 functional modules with the WebAdmin.',
        'projects.p1.t2': '<strong>Camera OCR & AI Integration:</strong> Used Expo Camera to scan utility meter readings and integrated Google Gemini API as an assistant for common landlord actions.',
        'projects.p1.t3': '<strong>Backend & Realtime:</strong> Contributed to RESTful APIs using Node.js, Express, and MongoDB (Mongoose), with JWT auth, Landlord/Tenant roles, Socket.io notifications, and VietQR payment generation.',
        'projects.p1.t4': '<strong>Team Coordination:</strong> Drafted the initial ERD, documented shared technical conventions for teammates, split tasks by module, and reviewed Pull Requests before merging.',
        'projects.p1.t5': '<strong>Tech Stack:</strong> React Native, Expo, Next.js, Node.js, Express, MongoDB, Socket.io, Gemini API, VietQR.',
        'projects.p2.role': 'Solo Developer',
        'projects.p2.badge': 'Personal Project',
        'projects.p2.heading': 'Post Archiving, Categorization App & Chrome Extension',
        'projects.p2.desc': 'A local-first tool to save posts from social platforms (Facebook, LinkedIn, X) via a Chrome Extension, store them locally, and search or summarize them with AI.',
        'projects.p2.t1': '<strong>Local Backend:</strong> Built with Python and SQLite3 to store saved posts and attachments directly on the user machine.',
        'projects.p2.t2': '<strong>Chrome Extension:</strong> Developed a browser extension paired with the local backend via a pairing code for quick post saving.',
        'projects.p2.t3': '<strong>AI Integration:</strong> Supported configurable OpenAI and Google Gemini (Flash & Embeddings) models for summarization and keyword extraction.',
        'projects.p2.t4': '<strong>Tech Stack:</strong> Python, SQLite3, Chrome Extensions API, OpenAI / Gemini API.',
        'projects.p3.role': 'Developer & Coursework Coordinator',
        'projects.p3.name': 'Java & Database Coursework Projects',
        'projects.p3.badge': 'Coursework',
        'projects.p3.heading': 'Sales Management Desktop App (Java Swing & SQL Server)',
        'projects.p3.desc': 'Coursework projects at FPT Polytechnic (Java 1, Java 2, Sample Project) building desktop management applications connected to SQL Server.',
        'projects.p3.t1': '<strong>Feature Implementation:</strong> Collaborated with teammates to build Java Swing interfaces and CRUD workflows connected to MS SQL Server via JDBC.',
        'projects.p3.t2': '<strong>Core Fundamentals:</strong> Practiced OOP principles, MVC architecture, relational schema design, and exception handling.',
        'projects.p3.t3': '<strong>Tech Stack:</strong> Java Core, Java Swing, JDBC, MS SQL Server, NetBeans.',
        'edu.subtitle': 'Academic Background',
        'edu.e1.status': 'Graduated',
        'edu.e1.degree': 'Major in Cross-Platform Mobile Development',
        'edu.e1.school': 'FPT Polytechnic College',
        'edu.e1.d1': 'Completed practical coursework in Web Development, Java OOP, relational databases, and Agile/Scrum team workflows.',
        'edu.e1.d2': 'Built coursework and a capstone project centered on practical mobile app development (React Native) and backend APIs.',
        'edu.e2.status': 'Previous Study',
        'edu.e2.degree': 'International Training Program (IT Foundation)',
        'edu.e2.school': 'NIIE - NTT Institute of International Education',
        'edu.e2.d1': 'Completed foundational coursework in an English-instruction environment before transitioning to hands-on software training at FPT Polytechnic.',
        'edu.e2.d2': 'Built habits in reading English technical documentation, collaborating in teams, and learning core IT fundamentals.',
        'contact.subtitle': "If you're hiring an Intern or Junior Mobile Developer (React Native), I'd be glad to connect.",
        'contact.panelTitle': 'Contact Details',
        'contact.panelDesc': "I'm available for interviews for <strong>Intern / Junior Mobile Developer</strong> (React Native) or related Frontend roles.",
        'contact.emailLabel': 'Email',
        'contact.locationLabel': 'Location',
        'contact.locationVal': 'Ho Chi Minh City (Onsite / Hybrid)',
        'form.nameLabel': 'Your Name / Company *',
        'form.namePlaceholder': 'e.g. Jane Doe - ABC Tech',
        'form.emailLabel': 'Contact Email *',
        'form.subjectLabel': 'Role / Subject',
        'form.msgLabel': 'Message *',
        'form.msgPlaceholder': 'Job details or interview schedule...',
        'form.submit': 'Send Message',
        'form.alert': 'Thanks for your message! I will get back to you via email as soon as possible.',
        'footer.name': 'Loi Hoang Nguyen',
        'modal.title': 'View CV as PDF',
        'modal.desc': 'Select the language version you want to view or download (standard 2-page A4 format):',
        'modal.viHeading': 'Vietnamese Version (PDF)',
        'modal.viBadge': 'A4 • 2 pages',
        'modal.viDesc': 'Vietnamese layout, optimized for local tech companies.',
        'modal.enHeading': 'English Version (PDF)',
        'modal.enBadge': 'A4 • 2 pages',
        'modal.enDesc': 'English layout, tailored for international and foreign teams.',
        'modal.btnView': 'View Online',
        'modal.btnDownload': 'Download',
        'modal.quickPrint': 'Or print this website directly (Print A4)'
    }
};

let currentLang = localStorage.getItem('cv_lang') === 'en' ? 'en' : 'vi';

function applyLanguage(lang) {
    const dict = translations[lang] || translations.vi;
    currentLang = lang;
    localStorage.setItem('cv_lang', lang);
    document.documentElement.lang = lang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) {
            el.setAttribute('title', dict[key]);
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    if (typeof updateThemeUI === 'function') {
        updateThemeUI();
    }
}

// ==========================================================================
// DARK / LIGHT MODE THEO THỜI GIAN THỰC (06:00-17:59 LIGHT, 18:00-05:59 DARK)
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');
let themeMode = localStorage.getItem('cv_theme_mode') || 'auto'; // 'auto' | 'light' | 'dark'

function getRealtimeTheme() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function getResolvedTheme() {
    return themeMode === 'auto' ? getRealtimeTheme() : themeMode;
}

function updateThemeUI() {
    const resolved = getResolvedTheme();
    document.documentElement.setAttribute('data-theme', resolved);

    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    const label = themeToggleBtn.querySelector('.theme-label');

    if (themeMode === 'auto') {
        icon.className = 'fa-solid fa-clock';
        label.textContent = 'AUTO';
        themeToggleBtn.title = currentLang === 'vi'
            ? `Tự động theo giờ (${resolved === 'dark' ? 'Tối' : 'Sáng'}) — Bấm để đổi`
            : `Auto by time (${resolved}) — Click to switch`;
    } else if (themeMode === 'dark') {
        icon.className = 'fa-solid fa-moon';
        label.textContent = 'DARK';
        themeToggleBtn.title = currentLang === 'vi' ? 'Chế độ Tối — Bấm để đổi' : 'Dark Mode — Click to switch';
    } else {
        icon.className = 'fa-solid fa-sun';
        label.textContent = 'LIGHT';
        themeToggleBtn.title = currentLang === 'vi' ? 'Chế độ Sáng — Bấm để đổi' : 'Light Mode — Click to switch';
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (themeMode === 'auto') {
            themeMode = getRealtimeTheme() === 'light' ? 'dark' : 'light';
        } else if (themeMode === 'dark') {
            themeMode = getRealtimeTheme() === 'light' ? 'light' : 'auto';
        } else {
            themeMode = 'auto';
        }
        localStorage.setItem('cv_theme_mode', themeMode);
        updateThemeUI();
    });
}

updateThemeUI();
setInterval(() => {
    if (themeMode === 'auto') {
        updateThemeUI();
    }
}, 30000);

// ==========================================================================
// HIỆU ỨNG SPOTLIGHT RÊ CHUỘT TRÊN CÁC THẺ NỘI DUNG
// ==========================================================================
const spotlightCards = document.querySelectorAll(
    '.about-avatar-card, .about-summary-card, .about-contact-card, .skill-box, .timeline-item, .edu-card, .contact-form'
);
spotlightCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
    });
});

// Áp dụng ngôn ngữ đã lưu khi tải trang
applyLanguage(currentLang);

// ==========================================================================
// MODAL XEM CV DẠNG PDF (VI / EN)
// ==========================================================================
const cvModal = document.getElementById('cvModal');
const printCvBtn = document.getElementById('printCvBtn');
const cvModalClose = document.getElementById('cvModalClose');
const cvModalBackdrop = document.getElementById('cvModalBackdrop');
const modalPrintQuickBtn = document.getElementById('modalPrintQuickBtn');

function openCvModal() {
    if (cvModal) {
        cvModal.hidden = false;
        requestAnimationFrame(() => {
            cvModal.classList.add('active');
        });
        cvModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeCvModal() {
    if (cvModal) {
        cvModal.classList.remove('active');
        cvModal.setAttribute('aria-hidden', 'true');
        cvModal.hidden = true;
        document.body.style.overflow = '';
    }
}

if (printCvBtn) {
    printCvBtn.addEventListener('click', e => {
        e.preventDefault();
        openCvModal();
    });
}

if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCvModal);
}

if (cvModalBackdrop) {
    cvModalBackdrop.addEventListener('click', closeCvModal);
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cvModal && cvModal.classList.contains('active')) {
        closeCvModal();
    }
});

if (modalPrintQuickBtn) {
    modalPrintQuickBtn.addEventListener('click', () => {
        closeCvModal();
        setTimeout(() => {
            window.print();
        }, 200);
    });
}

// Xử lý form liên hệ theo ngôn ngữ đang chọn
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert(translations[currentLang]['form.alert']);
        contactForm.reset();
    });
}
