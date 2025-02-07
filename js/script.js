/*================== icon navbar ================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*================== action link theo cuộn ================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        // Lấy vị trí hiện tại của cửa sổ nhìn
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        // Lấy id của sectionsection
        let id = sec.getAttribute('id');

        // Kiểm tra nếu vị trí cuộn hiện tại nằm trong phạm vi của phần (section)
        if (top >= offset && top < offset + height) {
            // Xóa lớp 'active' khỏi tất cả các liên kết điều hướng
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Thêm lớp 'active' vào liên kết điều hướng tương ứng với phần (section) hiện tại
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    /*================== sticky navbar ================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*================== xóa icon menu khi click link navbar ================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================== scroll reveal ================== */
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================== typed js ================== */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Good Boy'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*=========== sun light mode =========== */
let sunModeIcon = document.querySelector('#sunMode-icon');

sunModeIcon.onclick = () => {
    sunModeIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('sun-mode');
};