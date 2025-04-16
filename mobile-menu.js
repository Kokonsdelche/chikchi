document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // بستن منو هنگام کلیک روی لینک‌ها
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // بستن منو هنگام کلیک خارج از آن
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                hamburgerBtn.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
}); 