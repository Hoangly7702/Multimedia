// hiển thị menu của dịch vụ

const btnDichVu = document.getElementById('service');
const hienThi = document.getElementById('menu');
let isMenuVisible = false; // Biến lưu trạng thái hiển thị menu

btnDichVu.addEventListener('click', () => {

  isMenuVisible = !isMenuVisible; // Cập nhật trạng thái

  if (isMenuVisible) {
    hienThi.style.display = 'block';
  } else {
    hienThi.style.display = 'none';
  }
});


// hiển thị thanh tìm kiếm
const btnsearch = document.getElementById('iconsearch');
const hienthisearch = document.getElementById('formsearch');
const thunho = document.getElementById('thugon');
const header = document.getElementById('.container')
let isFormSearch = false; //lưu trạng thái hiển thị

btnsearch.addEventListener('click', () => {
  isFormSearch = !isFormSearch;

  if (isFormSearch) {
    hienthisearch.style.display = 'block';
    btnsearch.style.display = 'none';
  }
});

thunho.addEventListener('click', () => {
  isFormSearch = !isFormSearch;

  if (!isFormSearch) {
    hienthisearch.style.display = 'none';
    btnsearch.style.display = 'block';
  }
});

// hiển thị gạch chân của header

document.addEventListener('DOMContentLoaded', function () {
  var banners = document.querySelectorAll('.banner');

  banners.forEach(function (banner) {
    banner.addEventListener('mouseenter', function () {
      var line = banner.querySelector('.line');
      if (line) {
        line.style.display = 'block';
      }
    });

    banner.addEventListener('mouseleave', function () {
      var line = banner.querySelector('.line');
      if (line) {
        line.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll('.btnbanner');

  buttons.forEach(button => {
    if (button.id === '1') {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      // Loại bỏ lớp 'active' khỏi tất cả các nút
      buttons.forEach(btn => btn.classList.remove('active'));

      // Thêm lớp 'active' vào nút vừa được nhấn
      button.classList.add('active');

      // Kiểm tra id của nút được nhấn và thay đổi nội dung tương ứng
      if (button.id === '2') {
        document.getElementById('img1').src = 'images/banner/2.png';
        document.getElementById('img1').alt = 'Ảnh minh họa 2';
        document.getElementById('projectName1').textContent = 'Dự án Tham quan ảo 3D';
        document.getElementById('projectName2').textContent = 'Trung tâm Học liệu Đại học Cần Thơ';
      } else if (button.id === '1') {
        // Đặt lại ảnh và tên dự án nếu cần
        document.getElementById('img1').src = 'images/banner/1.png';
        document.getElementById('img1').alt = 'Ảnh minh họa';
        document.getElementById('projectName1').textContent = 'Dự án Bảo tàng ảo';
        document.getElementById('projectName2').textContent = 'Quân khu 9 - Thành phố Cần Thơ';
      }
    });
  });

  const images = document.querySelectorAll('.AnhMinhHoa');

  images.forEach(image => {
    image.addEventListener('mouseenter', () => {
      const link = image.parentElement.querySelector('.chitiet');
      if (link) {
        link.style.display = 'block';
      }
    });

    image.addEventListener('mouseleave', () => {
      const link = image.parentElement.querySelector('.chitiet');
      if (link) {
        link.style.display = 'none';
      }
    });
  });
});