document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    // بررسی وجود المان‌های مورد نیاز
    if (!hamburgerBtn || !mainNav) {
        console.error('المان‌های مورد نیاز برای منوی موبایل یافت نشدند');
        return;
    }

    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // اضافه کردن رویداد کلیک به دکمه همبرگر
    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // بستن منو با کلیک خارج از آن
    document.addEventListener('click', function(event) {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(event.target) && 
            !hamburgerBtn.contains(event.target)) {
            closeMenu();
        }
    });

    // بستن منو با کلیک روی لینک‌ها
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // اگر لینک زیرمنو است، از بستن منو جلوگیری می‌کنیم
            if (this.parentElement.querySelector('ul')) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            } else {
                closeMenu();
            }
        });
    });

    // بستن منو با اسکرول
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(scrollTop - lastScrollTop) > 50 && mainNav.classList.contains('active')) {
            closeMenu();
        }
        lastScrollTop = scrollTop;
    });

    // بستن منو با تغییر اندازه صفحه
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });
}); 