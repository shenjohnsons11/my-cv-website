# HƯỚNG DẪN TÙY CHỈNH WEBSITE CV CÁ NHÂN
> **Họ và tên**: Lợi Hoàng Nguyên (Fresher / Junior Full Stack Developer)  
> **Trường học**: FPT Polytechnic & NIIE (Viện Đào Tạo Quốc Tế NTTU)  
> **Thư mục dự án**: `/Users/nguyen/my-cv-website`  
> **Phong cách Layout**: Lấy cảm hứng từ [cv.toidicodedao.com](https://cv.toidicodedao.com/)

---

## 1. DỮ LIỆU ĐÃ ĐƯỢC TỰ ĐỘNG CẬP NHẬT TỪ MÁY TÍNH CỦA BẠN

CV đã được cập nhật toàn bộ thông tin thực tế từ các đồ án trên máy tính của bạn:
1. **Họ tên & Vai trò**: **Lợi Hoàng Nguyên** - Junior Full Stack Developer & Team Leader.
2. **Kinh nghiệm đồ án trọng tâm (Projects & Leadership)**:
   - **TroHub Platform (Đồ án tốt nghiệp / Capstone)**: Dự án lớn nhất với vai trò **Trưởng nhóm (Team Leader)**, kiến trúc hệ sinh thái Backend (Node.js/Express với 99+ endpoints, MongoDB, Socket.io), WebAdmin (Next.js), Mobile App (React Native/Expo Dual Theme), tích hợp AI Gemini Co-pilot và Camera AI quét số đồng hồ điện nước OCR.
   - **Social Post Curator (Dự án cá nhân)**: Hệ thống Python, SQLite3 và Chrome Extension hỗ trợ AI embedding & lưu trữ mạng xã hội.
   - **Các đồ án Java / NetBeans**: Các đồ án môn học Java Swing, MVC, JDBC SQL Server tại FPT Polytechnic.
3. **Học vấn & Trường học (Education)**:
   - **FPT Polytechnic**: Có logo thương hiệu FPT (Cam - Xanh), nhấn mạnh vai trò Trưởng nhóm (Leader) các đồ án môn học.
   - **NIIE (Viện Đào Tạo Quốc Tế)**: Có logo thương hiệu NIIE (Xanh dương), nhấn mạnh khả năng tiếp cận công nghệ chuẩn quốc tế và đọc hiểu tài liệu kỹ thuật tiếng Anh.

---

## 2. CẤU TRÚC BỐ CỤC & CÁCH TỰ TÙY CHỈNH

### A. Sidebar Navigation (Cột menu bên trái)
- **Vị trí file**: Trong [`index.html`](file:///Users/nguyen/my-cv-website/index.html) (Thẻ `<nav class="sidebar-nav">`).
- **Logo viết tắt**: `<span class="logo-text">LN</span>` (Viết tắt của Lợi Hoàng Nguyên).
- **Các mục**: `Home`, `About`, `Skills`, `Projects`, `Education`, `Contact`.

### B. Header / Hero Banner (Phần mở đầu trang)
- **Vị trí file**: Thẻ `<header id="banner" class="hero-header">`.
- **Nội dung**:
  - Tên: `Lợi Hoàng Nguyên`
  - Slogan: `Junior Full Stack Developer & Project Leader`
  - Liên kết mạng xã hội: Đã trỏ sẵn vào GitHub cá nhân của bạn `github.com/shenjohnsons11` và email `hmh2k6hehe@gmail.com`.

### C. Giới thiệu bản thân (About Me)
- **Vị trí file**: Thẻ `<section id="about" class="section">`.
- **Nội dung nổi bật**:
  - Trình bày rõ ràng: Dù là sinh viên mới ra trường, bạn đã có kinh nghiệm thực chiến dồi dào qua các dự án thực tế.
  - Nhấn mạnh vai trò **Leader** trong các đồ án trên lớp: chịu trách nhiệm kiến trúc, phân chia công việc, review code và trực tiếp phát triển các module khó.

### D. Kỹ năng chuyên môn (Skills)
- **Vị trí file**: Thẻ `<section id="skills" class="section bg-light">`.
- Chia thành 4 nhóm năng lực thực tế:
  1. *Frontend & Mobile App* (React Native, Expo, Next.js, React, Tailwind CSS)
  2. *Backend & Database* (Node.js, Express 99+ endpoints, MongoDB, Socket.io, VietQR)
  3. *AI Integration & Tooling* (Google Gemini API, OCR Scanner, Git, Postman)
  4. *Kỹ năng Trưởng nhóm (Team Leader)* (Phân chia task, System Architecture, Code Review)

### E. Kinh nghiệm đồ án (Projects & Leadership)
- **Vị trí file**: Thẻ `<section id="experiences" class="section">`.
- Layout Timeline 3 khối tương tự toidicodedao:
  - Khối 1: Vị trí Leader & Tên đồ án.
  - Khối 2: Khoảng thời gian thực hiện.
  - Khối 3: Mô tả chi tiết dự án, vai trò lãnh đạo, trách nhiệm, tính năng công nghệ nổi bật.

### F. Học vấn & Trường học (Education)
- **Vị trí file**: Thẻ `<section id="education" class="section bg-light">`.
- Đã được tích hợp:
  - **FPT Polytechnic**: Icon tốt nghiệp + Logo thương hiệu FPT.
  - **NIIE**: Icon trường đại học + Logo thương hiệu NIIE.

### G. Liên hệ (Contact) & Footer (Chân trang)
- **Vị trí file**: Thẻ `<section id="contact">` và `<footer>`.
- Form gửi tin nhắn tuyển dụng và thông tin liên hệ trực tiếp. Footer tự động cập nhật năm hiện tại qua JavaScript.

---

## 3. TÙY BIẾN MÀU SẮC TRONG `style.css`

Nếu muốn đổi tông màu trang web (ví dụ từ màu xanh ngọc mặc định sang xanh dương hoặc cam FPT), mở file [`style.css`](file:///Users/nguyen/my-cv-website/style.css) và sửa dòng đầu:

```css
:root {
    --primary-color: #1abc9c;   /* Màu chủ đạo */
    --primary-dark: #16a085;    /* Màu khi hover */
    --sidebar-bg: #2c3e50;      /* Màu nền cột menu trái */
}
```

---

## 4. XEM TRANG TRÊN TRÌNH DUYỆT

Chạy lệnh sau trong Terminal để mở xem ngay:
```bash
open /Users/nguyen/my-cv-website/index.html
```
Hoặc mở Local Server:
```bash
cd /Users/nguyen/my-cv-website && python3 -m http.server 8080
```
Truy cập `http://localhost:8080` trên trình duyệt.
