
const courseList = document.getElementById('courseContainer');
const searchBox = document.getElementById('searchName');      
const categorySelect = document.getElementById('filterCategory');
const btnReset = document.getElementById('btnReset');

const formDangKy = document.getElementById('registerForm');
const selectCourseElement = document.getElementById('selectCourse');


const tableBody = document.getElementById('registrationTableBody');
const btnXoaTatCa = document.getElementById('btnClearAll');


function hienThiKhoaHoc(mangDuLieu) {
    if (!courseList) return;
    courseList.innerHTML = "";

    if (mangDuLieu.length === 0) {
        courseList.innerHTML = `<div class="col-12 text-center text-muted my-4">Không tìm thấy khóa học nào phù hợp.</div>`;
        return;
    }

    mangDuLieu.forEach(khoa => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card h-100 bg-black text-white border-secondary course-card shadow shadow-sm d-flex flex-column justify-content-between">
                    <div>
                        <img src="${khoa.image || 'assets/images/default.jpg'}" class="card-img-top object-fit-cover" style="height: 180px;" alt="${khoa.title}">
                        <div class="card-body">
                            <div class="d-flex gap-2 mb-2">
                                <span class="badge bg-primary text-uppercase">${khoa.category}</span>
                                <span class="badge bg-info">${khoa.level}</span>
                            </div>
                            <h5 class="card-title fw-bold text-gradient">${khoa.title}</h5>
                            <p class="card-text text-muted small">${khoa.description}</p>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-0 pt-0 pb-3">
                        <button class="btn btn-sm btn-outline-primary w-100" onclick="showModal('${khoa.title}', '${khoa.image}', '${khoa.category}', '${khoa.level}', '${khoa.date}', \`${khoa.detail.replace(/\n/g, '<br>')}\`)">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        `;
        courseList.innerHTML += cardHtml;
    });
}

function xuLyBoLoc() {
    if (!searchBox || !categorySelect) return;
   
    const tuKhoa = searchBox.value.toLowerCase().trim();
    const danhMucChon = categorySelect.value;

    const mangSauKhiLoc = courses.filter(khoa => {
        const khopTen = khoa.title.toLowerCase().includes(tuKhoa);
        const khopDanhMuc = (danhMucChon === '') || (khoa.category === danhMucChon);
        return khopTen && khopDanhMuc;
    });

    hienThiKhoaHoc(mangSauKhiLoc);
}

if (courseList) {
    hienThiKhoaHoc(courses);
    if (searchBox) searchBox.addEventListener('input', xuLyBoLoc);
    if (categorySelect) categorySelect.addEventListener('change', xuLyBoLoc);
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            searchBox.value = '';
            categorySelect.value = '';
            hienThiKhoaHoc(courses);
        });
    }
}

function showModal(title, image, category, level, date, detailText) {
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalLevel = document.getElementById('modalLevel');
    const modalDate = document.getElementById('modalDate');
    const modalDetailText = document.getElementById('modalDetailText');
    const targetModal = document.getElementById('courseDetailModal');

    if (modalTitle) modalTitle.textContent = title;
    if (modalImage) modalImage.src = image;
    if (modalCategory) modalCategory.textContent = category;
    if (modalLevel) modalLevel.textContent = level;
    if (modalDate) modalDate.textContent = date;
    if (modalDetailText) modalDetailText.innerHTML = detailText;
   
    if (targetModal) {
        const formModal = new bootstrap.Modal(targetModal);
        formModal.show();
    }
}

if (selectCourseElement) {
    courses.forEach(khoa => {
        const option = document.createElement('option');
        option.value = khoa.title;
        option.textContent = khoa.title;
        selectCourseElement.appendChild(option);
    });
}

if (formDangKy) {
    formDangKy.addEventListener('submit', function(e) {
        e.preventDefault();

        const hoten = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const sdt = document.getElementById('phone').value.trim();
        const lop = document.getElementById('className').value.trim();
        const khoahoc = selectCourseElement.value;
        const ghichu = document.getElementById('note') ? document.getElementById('note').value.trim() : "";

        let hopLe = true;

        if(document.getElementById('errFullName')) document.getElementById('errFullName').textContent = "";
        if(document.getElementById('errEmail')) document.getElementById('errEmail').textContent = "";
        if(document.getElementById('errPhone')) document.getElementById('errPhone').textContent = "";
        if(document.getElementById('errClassName')) document.getElementById('errClassName').textContent = "";
        if(document.getElementById('errSelectCourse')) document.getElementById('errSelectCourse').textContent = "";

        if (hoten === "" || hoten.length < 3) {
            if(document.getElementById('errFullName')) document.getElementById('errFullName').textContent = "Họ tên không được rỗng và từ 3 ký tự.";
            hopLe = false;
        }
        if (email === "" || !email.includes('@')) {
            if(document.getElementById('errEmail')) document.getElementById('errEmail').textContent = "Email không được rỗng và phải đúng định dạng.";
            hopLe = false;
        }
        if (sdt === "" || isNaN(sdt) || sdt.length < 9 || sdt.length > 11) {
            if(document.getElementById('errPhone')) document.getElementById('errPhone').textContent = "SĐT chỉ chứa số, độ dài từ 9 đến 11 số.";
            hopLe = false;
        }
        if (lop === "") {
            if(document.getElementById('errClassName')) document.getElementById('errClassName').textContent = "Lớp không được để trống.";
            hopLe = false;
        }
        if (khoahoc === "") {
            if(document.getElementById('errSelectCourse')) document.getElementById('errSelectCourse').textContent = "Vui lòng chọn khóa học.";
            hopLe = false;
        }

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


function hienThiBangDuLieu() {
    if (!tableBody) return; 

    const danhSach = JSON.parse(localStorage.getItem('danhSachHocVien')) || [];
    tableBody.innerHTML = "";

    if (danhSach.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">Chưa có học viên nào đăng ký.</td></tr>`;
        return;
    }

  
    danhSach.forEach((hv, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td class="fw-bold text-start ps-4">${hv.name}</td>
                <td>${hv.email}</td>
                <td>${hv.phone}</td>
                <td>${hv.class}</td>
                <td><span class="badge bg-primary text-uppercase">${hv.course}</span></td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="xoaMotHocVien(${hv.id})">Xóa Phieu</button>
                </td>
            </tr>
        `;
    });
}


window.xoaMotHocVien = function(maId) {
    if (confirm("Bạn có chắc chắn muốn xóa phiếu đăng ký của học viên này?")) {
        let danhSach = JSON.parse(localStorage.getItem('danhSachHocVien')) || [];
        danhSach = danhSach.filter(hv => hv.id !== maId);
        localStorage.setItem('danhSachHocVien', JSON.stringify(danhSach));
        hienThiBangDuLieu();
    }
};

if (btnXoaTatCa) {
    btnXoaTatCa.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn xóa toàn bộ danh sách đăng ký?")) {
            localStorage.removeItem('danhSachHocVien');
            hienThiBangDuLieu();
        }
    });
}

hienThiBangDuLieu();