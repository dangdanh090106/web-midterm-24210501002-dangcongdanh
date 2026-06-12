// assets/js/main.js

// ==========================================
// 1. CHỨC NĂNG RENDER, TÌM KIẾM & LỌC (courses.html)
// ==========================================
const courseList = document.getElementById('courseList');
const searchBox = document.getElementById('searchBox');
const categorySelect = document.getElementById('categorySelect');
const btnReset = document.getElementById('btnReset');

// Hàm lấy mảng dữ liệu JS để tự tạo giao diện Card HTML (Thỏa mãn mục 2 & 3 của thầy)
function hienThiKhoaHoc(mangDuLieu) {
    if (!courseList) return; // Nếu không ở trang courses.html thì bỏ qua
    
    courseList.innerHTML = ""; // Xóa dữ liệu cũ

    // Duyệt mảng bằng vòng lặp cơ bản để tạo 8 card
    mangDuLieu.forEach(khoa => {
        const cardHtml = `
            <div class="col-md-3">
                <div class="card h-100 course-card">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${khoa.category.toUpperCase()}</span>
                        <h5 class="card-title fw-bold">${khoa.name}</h5>
                        <p class="card-text text-muted small">${khoa.desc}</p>
                        <button class="btn btn-sm btn-outline-primary" onclick="showModal('${khoa.name}', '${khoa.detail}')">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        `;
        courseList.innerHTML += cardHtml; // Cộng dồn thẻ card vào lưới hiển thị
    });
}

// Hàm xử lý lọc và tìm kiếm dữ liệu (Thỏa mãn mục 4 & 5)
function xuLyBoLoc() {
    const tuKhoa = searchBox.value.toLowerCase().trim();
    const danhMucChon = categorySelect.value;

    // Lọc mảng
    const mangSauKhiLoc = danhSachKhuaHoc.filter(khoa => {
        const khopTen = khoa.name.toLowerCase().includes(tuKhoa);
        const khopDanhMuc = (danhMucChon === 'all') || (khoa.category === danhMucChon);
        return khopTen && khopDanhMuc;
    });

    hienThiKhoaHoc(mangSauKhiLoc); // Render lại mảng đã lọc
}

// Đăng ký sự kiện
if (courseList) {
    hienThiKhoaHoc(danhSachKhuaHoc); // Mặc định hiển thị đủ 8 khóa ban đầu
    searchBox.addEventListener('input', xuLyBoLoc);
    categorySelect.addEventListener('change', xuLyBoLoc);
    
    btnReset.addEventListener('click', () => {
        searchBox.value = '';
        categorySelect.value = 'all';
        hienThiKhoaHoc(danhSachKhuaHoc);
    });
}

// Mở Modal chi tiết (Thỏa mãn mục 6)
function showModal(tenKhua, noiDung) {
    document.getElementById('modalTitle').textContent = tenKhua;
    document.getElementById('modalBody').textContent = noiDung;
    const formModal = new bootstrap.Modal(document.getElementById('detailModal'));
    formModal.show();
}


// ==========================================
// 2. FORM VALIDATION & LOCALSTORAGE (register.html)
// ==========================================
const formDangKy = document.getElementById('formDangKy');

if (formDangKy) {
    formDangKy.addEventListener('submit', function(e) {
        e.preventDefault();

        const hoten = document.getElementById('txtHoten').value.trim();
        const email = document.getElementById('txtEmail').value.trim();
        const sdt = document.getElementById('txtSdt').value.trim();
        const lop = document.getElementById('txtLop').value.trim();
        const khoahoc = document.getElementById('selKhoahoc').value;
        const ghichu = document.getElementById('txtGhichu').value.trim();

        let hopLe = true;

        document.getElementById('errHoten').textContent = "";
        document.getElementById('errEmail').textContent = "";
        document.getElementById('errSdt').textContent = "";
        document.getElementById('errLop').textContent = "";
        document.getElementById('errKhoahoc').textContent = "";

        // Kiểm tra validation (Thỏa mãn mục 8)
        if (hoten === "" || hoten.length < 3) {
            document.getElementById('errHoten').textContent = "Họ tên không được rỗng và từ 3 ký tự.";
            hopLe = false;
        }
        if (email === "" || !email.includes('@')) {
            document.getElementById('errEmail').textContent = "Email không được rỗng và phải đúng định dạng.";
            hopLe = false;
        }
        if (sdt === "" || isNaN(sdt) || sdt.length < 9 || sdt.length > 11) {
            document.getElementById('errSdt').textContent = "SĐT chỉ chứa số, độ dài từ 9 đến 11 số.";
            hopLe = false;
        }
        if (lop === "") {
            document.getElementById('errLop').textContent = "Lớp không được để trống.";
            hopLe = false;
        }
        if (khoahoc === "") {
            document.getElementById('errKhoahoc').textContent = "Vui lòng chọn khóa học.";
            hopLe = false;
        }

        // Lưu LocalStorage (Thỏa mãn mục 9)
        if (hopLe) {
            const hocVienMoi = { id: Date.now(), name: hoten, email: email, phone: sdt, class: lop, course: khoahoc, note: ghichu };
            let danhSach = JSON.parse(localStorage.getItem('danhSachHocVien')) || [];
            danhSach.push(hocVienMoi);
            localStorage.setItem('danhSachHocVien', JSON.stringify(danhSach));

            alert("Đăng ký thành công!");
            formDangKy.reset();
        }
    });
}


// ==========================================
// 3. QUẢN LÝ DANH SÁCH & XÓA (registrations.html)
// ==========================================
const tableBody = document.getElementById('tableBody');
const btnXoaTatCa = document.getElementById('btnXoaTatCa');

// Hiển thị danh sách học viên từ LocalStorage (Thỏa mãn mục 10)
function hienThiBangDuLieu() {
    if (!tableBody) return;

    const danhSach = JSON.parse(localStorage.getItem('danhSachHocVien')) || [];
    tableBody.innerHTML = "";

    danhSach.forEach((hv, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td class="fw-bold">${hv.name}</td>
                <td>${hv.email}</td>
                <td>${hv.phone}</td>
                <td>${hv.class}</td>
                <td><span class="badge bg-primary">${hv.course}</span></td>
                <td>${hv.note}</td>
                <td class="text-center">
                    <button class="btn btn-danger btn-sm" onclick="xoaMộtHocVien(${hv.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

window.xoaMộtHocVien = function(maId) {
    if (confirm("Bạn có chắc chắn muốn xóa học viên này?")) {
        let danhSach = JSON.parse(localStorage.getItem('danhSachHocVien')) || [];
        danhSach = danhSach.filter(hv => hv.id !== maId);
        localStorage.setItem('danhSachHocVien', JSON.stringify(danhSach));
        hienThiBangDuLieu();
    }
};

if (btnXoaTatCa) {
    btnXoaTatCa.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn xóa toàn bộ danh sách?")) {
            localStorage.removeItem('danhSachHocVien');
            hienThiBangDuLieu();
        }
    });
}

hienThiBangDuLieu();