
const courses = [
  {
    id: 1,
    title: "Nhập Môn HTML5 & CSS3 Toàn Tập",
    category: "Frontend",
    level: "Beginner",
    image: "assets/images/htmlcss.jpg",
    date: "2026-07-10",
    description: "Xây dựng nền tảng giao diện web vững chắc từ con số 0.",
    detail: "Khóa học này cung cấp kiến thức nền tảng cốt lõi nhất về phát triển trang web. Bạn sẽ được học về: \n- Cấu trúc ngữ nghĩa Semantic HTML5 chuẩn SEO.\n- Cách sử dụng CSS để định dạng phần tử, quản lý màu sắc và font chữ.\n- Làm chủ các mô hình bố cục hiện đại: CSS Flexbox và CSS Grid.\n- Tư duy phân tích và xây dựng layout giao diện từ bản vẽ thiết kế (Figma/Photoshop).\n- Dự án cuối khóa: Tự tay code giao diện Landing Page hoàn chỉnh."
  },
  {
    id: 2,
    title: "Lập Trình JavaScript & Thao Tác DOM",
    category: "Frontend",
    level: "Intermediate",
    image: "assets/images/jsanddom.png",
    date: "2026-07-15",
    description: "Làm chủ tư duy logic và tạo hiệu ứng tương tác động cho Website.",
    detail: "Biến các trang web tĩnh thành các ứng dụng web động, có khả năng tương tác cao. Lộ trình học bao gồm:\n- Cú pháp JavaScript căn bản đến nâng cao (Biến, Hàm, Mảng, Đối tượng, Vòng lặp).\n- Thao tác với DOM (Document Object Model): Truy xuất, thêm, sửa, xóa các phần tử HTML/CSS bằng JS.\n- Quản lý và xử lý các sự kiện người dùng (Click, Scroll, Submit Form, Keydown).\n- Làm việc với dữ liệu bất đồng bộ (Lớp Fetch, API, JSON).\n- Kỹ thuật lưu trữ dữ liệu phía Client với LocalStorage.\n- Dự án cuối khóa: Xây dựng ứng dụng Todo-List và Todo-App quản lý dữ liệu."
  },
  {
    id: 3,
    title: "Xây Dựng Giao Diện Responsive Với Bootstrap 5",
    category: "Frontend",
    level: "Beginner",
    image: "assets/images/bootstrap.jpg",
    date: "2026-07-22",
    description: "Thiết kế giao diện thích ứng mượt mà trên mọi thiết bị di động.",
    detail: "Học cách tăng tốc tốc độ làm front-end bằng Framework CSS phổ biến nhất thế giới. Nội dung học:\n- Hiểu sâu về hệ thống lưới Grid System (Breakpoints, Containers, Rows, Cols) để xử lý Responsive.\n- Ứng dụng các cấu phần có sẵn (Components): Navbar, Carousel, Cards, Modal, Accordion, Dropdowns.\n- Tùy biến giao diện nhanh chóng bằng Utilities (Spacing, Flex, Text, Colors).\n- Kết hợp Bootstrap với CSS tùy biến cá nhân mà không bị xung đột mã nguồn.\n- Dự án cuối khóa: Xây dựng Website Portfolio cá nhân hiển thị hoàn hảo trên Mobile, Tablet và Desktop."
  },
  {
    id: 4,
    title: "Lập Trình Backend Cơ Bản Với Node.js & Express",
    category: "Backend",
    level: "Intermediate",
    image: "assets/images/nodejsexpress.png",
    date: "2026-08-01",
    description: "Tìm hiểu kiến trúc Server-Side và xây dựng RESTful API.",
    detail: "Bước chân vào thế giới xử lý logic phía máy chủ (Server-side). Khóa học tập trung vào:\n- Kiến trúc Node.js và cách thức hoạt động Single-Threaded Event Loop.\n- Sử dụng Framework Express.js để khởi tạo máy chủ web nhanh chóng.\n- Quản lý và thiết kế hệ thống định tuyến (Routing) cho ứng dụng.\n- Tìm hiểu và viết các hàm trung gian (Middleware) để xử lý dữ liệu, kiểm tra bảo mật.\n- Thiết kế và xây dựng hệ thống RESTful API chuẩn chỉnh để cung cấp dữ liệu cho Frontend.\n- Dự án cuối khóa: Xây dựng hệ thống API quản lý sản phẩm và người dùng."
  },
  {
    id: 5,
    title: "Cấu Trúc Dữ Liệu Và Giải Thuật Thực Chiến",
    category: "Fullstack",
    level: "Advanced",
    image: "assets/images/dsa.jpeg",
    date: "2026-08-12",
    description: "Tối ưu hóa mã nguồn và nâng cao tư duy giải quyết bài toán khó.",
    detail: "Khóa học giúp nâng cao tư duy lập trình chuyên sâu, cốt lõi của một kỹ sư phần mềm. Bạn sẽ được học:\n- Đánh giá và tối ưu hóa độ phức tạp của thuật toán (Độ phức tạp thời gian Big O).\n- Các cấu trúc dữ liệu tuyến tính và phi tuyến tính: Array, Linked List, Stack, Queue, Tree, Graph.\n- Các thuật toán sắp xếp (Bubble Sort, Quick Sort, Merge Sort) và thuật toán tìm kiếm (Linear, Binary Search).\n- Áp dụng giải thuật vào việc tối ưu hóa tốc độ tải và xử lý dữ liệu của trang web.\n- Giải quyết các bài toán thuật toán thực tế thường gặp trong các buổi phỏng vấn của doanh nghiệp."
  },
  {
    id: 6,
    title: "Lập Trình Ứng Dụng Di Động React Native",
    category: "Mobile App",
    level: "Advanced",
    image: "assets/images/reactnative.png",
    date: "2026-08-20",
    description: "Phát triển ứng dụng hybrid chạy mượt trên cả iOS và Android.",
    detail: "Mở rộng kỹ năng JavaScript để lấn sân sang mảng phát triển ứng dụng di động. Lộ trình học bao gồm:\n- Tổng quan về kiến trúc Cross-Platform của React Native.\n- Quản lý trạng thái ứng dụng (State, Props, Hooks) và vòng đời của Component.\n- Thiết kế giao diện Mobile với Flexbox và các thẻ giao diện gốc (View, Text, Image, ScrollView).\n- Điều hướng màn hình chuyên nghiệp với thư viện React Navigation.\n- Tương tác phần cứng và kết nối API lấy dữ liệu từ Server về điện thoại.\n- Dự án cuối khóa: Xây dựng app Đọc tin tức thu nhỏ chạy tốt trên cả Android và iOS."
  },
  {
    id: 7,
    title: "Thiết Kế Cơ Sở Dữ Liệu SQL Từ Căn Bản",
    category: "Backend",
    level: "Beginner",
    image: "assets/images/database.png",
    date: "2026-09-05",
    description: "Học cách tổ chức, lưu trữ và truy vấn dữ liệu khoa học.",
    detail: "Làm chủ nơi lưu trữ linh hồn của mọi ứng dụng - Cơ sở dữ liệu. Khóa học mang lại kiến thức về:\n- Tổng quan về hệ quản trị cơ sở dữ liệu quan hệ (RDBMS).\n- Thiết kế lược đồ cơ sở dữ liệu, xác định thực thể và mối quan hệ (1-1, 1-N, N-N).\n- Thành thạo ngôn ngữ truy vấn SQL: SELECT, INSERT, UPDATE, DELETE.\n- Kỹ thuật liên kết dữ liệu nâng cao giữa các bảng bằng các câu lệnh JOIN.\n- Tối ưu hóa tốc độ truy vấn bằng Index và đảm bảo an toàn toàn vẹn dữ liệu.\n- Dự án cuối khóa: Thiết kế hoàn chỉnh DB cho một hệ thống E-commerce bán hàng thương mại điện tử."
  },
  {
    id: 8,
    title: "Lập Trình Web Toàn Diện - Khóa Học Fullstack",
    category: "Fullstack",
    level: "Advanced",
    image: "assets/images/fullstack.webp",
    date: "2026-09-15",
    description: "Kết hợp Frontend và Backend để tạo ra một sản phẩm hoàn chỉnh.",
    detail: "Khóa học đỉnh cao kết nối mọi mảnh ghép lại với nhau để đưa bạn trở thành một Fullstack Developer thực thụ:\n- Quy trình phân tích, thiết kế hệ thống tổng thể cho một dự án Web thực tế.\n- Kết nối và đồng bộ hóa giao diện Frontend (HTML/CSS/JS) với hệ thống xử lý phía Backend (Node.js API).\n- Xử lý hệ thống đăng ký, đăng nhập và bảo mật phân quyền người dùng (Authentication & Authorization với JWT).\n- Triển khai lưu trữ hình ảnh lên Cloud và tích hợp cơ sở dữ liệu thực.\n- Hướng dẫn đóng gói và đưa toàn bộ website chạy thực tế lên môi trường Internet (Deployment).\n- Dự án cuối khóa: Xây dựng và vận hành mạng xã hội thu nhỏ hoàn chỉnh."
  }
];