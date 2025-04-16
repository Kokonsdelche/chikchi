document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // بستن منو با کلیک روی پس‌زمینه
        body.addEventListener('click', (e) => {
            if (body.classList.contains('menu-open') && 
                !mainNav.contains(e.target) && 
                !hamburgerBtn.contains(e.target)) {
                    mainNav.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    body.classList.remove('menu-open');
            }
        });

        // بستن منو با کلیک روی لینک‌ها
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburgerBtn.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }
}); 