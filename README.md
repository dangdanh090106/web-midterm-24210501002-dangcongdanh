# TechAcademy - Website Giới Thiệu Và Đăng Ký Khóa Học Công Nghệ Mini

## 1. Thông Tin Sinh Viên
Họ và tên: Đặng Công Danh
Mã số sinh viên (MSSV):24210501002
Lớp: 24210501TH001
Trường: Đại học Bình Dương - Phân hiệu Cà Mau

---

## 2. Mô Tả Ngắn Website
Website **TechAcademy** là một hệ thống web tĩnh frontend dùng để giới thiệu các khóa học lập trình và công nghệ thông tin cốt lõi. Người dùng có thể dễ dàng theo dõi danh sách, tìm kiếm từ khóa, lọc theo phân loại, xem thông tin chi tiết bằng cửa sổ bật lên, đăng ký tham gia học tập và theo dõi danh sách lớp học viên trực tiếp trên trình duyệt.

---

## 3. Danh Sách Chức Năng
Website đáp ứng hoàn chỉnh tất cả các chức năng bắt buộc theo yêu cầu của đề tài:
* **Trang chủ:** Thanh điều hướng (Navbar), Banner giới thiệu (Hero Section) và khu vực lý do chọn trung tâm.
* **Danh sách khóa học:** Hiển thị tối thiểu 8 khóa học công nghệ được xử lý render tự động từ mảng JavaScript.
* **Tìm kiếm và lọc dữ liệu:** * Ô tìm kiếm từ khóa theo tên khóa học (tự động cập nhật giao diện khi nhập).
  * Hộp chọn lọc dữ liệu nhanh theo danh mục (Frontend / Backend).
  * Nút xóa bộ lọc để đưa giao diện quay về trạng thái hiển thị đầy đủ ban đầu.
* **Xem chi tiết bằng Modal:** Nhấn nút "Xem chi tiết" để hiển thị hộp thoại Bootstrap Modal chứa tên, mô tả ngắn và nội dung chương trình học đầy đủ của khóa học đó.
* **Form Đăng Ký và Validation:** Biểu mẫu thu thập thông tin học viên tích hợp tính năng kiểm tra lỗi (Validation) bằng JavaScript thuần. Hiển thị thông báo lỗi trực quan màu đỏ ngay dưới chân từng ô nhập liệu (Họ tên, Email, Số điện thoại, Lớp, Khóa học) khi bỏ trống hoặc nhập sai định dạng.
* **Lưu trữ LocalStorage:** Lưu thông tin học viên đăng ký hợp lệ vào bộ nhớ trình duyệt `LocalStorage`, đảm bảo dữ liệu không bị mất đi khi người dùng tải lại trang.
* **Quản lý danh sách lớp:** Hiển thị danh sách học viên ghi danh dưới dạng bảng dữ liệu chỉn chu, có tích hợp chức năng xóa lẻ từng học viên hoặc bấm nút xóa toàn bộ danh sách lớp.

---

## 4. Công Nghệ Sử Dụng
* **HTML5:** Sử dụng các thẻ ngữ nghĩa chuẩn (Semantic Tags) để xây dựng cấu trúc trang.
* **CSS3:** Thiết kế giao diện tùy biến, hiệu ứng hover di chuột và tùy chỉnh thông báo lỗi.
* **Bootstrap 5 (CDN):** Áp dụng hệ thống lưới Grid System xử lý Responsive và các cấu phần giao diện (Navbar, Card, Modal, Table, Badge).
* **JavaScript (Thuần):** Xử lý tương tác DOM, render dữ liệu từ mảng, bộ lọc tìm kiếm và kiểm tra biểu mẫu form.
* **LocalStorage:** Lưu trữ dữ liệu tạm thời phía Client-side.
* **GitHub Pages:** Triển khai public ứng dụng web lên môi trường internet công khai.

---

## 5. Link GitHub Pages
* **Link Demo GitHub Pages:** 
* **Link GitHub Repository:** 
---

## 6. Ảnh Chụp Giao Diện
![Giao diện trang chủ TechAcademy](assets/images/Banner.png)

---

## 7. Hướng Dẫn Chạy Local
Để mở và kiểm tra dự án này ngay trên máy tính cá nhân của bạn, hãy làm theo các bước sau:
1. Tải thư mục mã nguồn về máy tính hoặc sử dụng công cụ Git qua lệnh: `git clone [Link-Repository]`.
2. Khởi động phần mềm **Visual Studio Code** và chọn mở thư mục dự án vừa tải về.
3. Cài đặt tiện ích mở rộng tên là **Live Server** trên VS Code (nếu máy bạn chưa cài đặt).
4. Nhấp chuột phải vào tệp tin `index.html` rồi chọn dòng **Open with Live Server** (hoặc bấm biểu tượng **Go Live** ở thanh trạng thái dưới đáy màn hình).
5. Trình duyệt hệ thống sẽ tự động bật tab mới chạy cục bộ tại địa chỉ mặc định: `http://127.0.0.1:5500/index.html`.
