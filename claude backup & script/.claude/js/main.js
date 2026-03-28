/* ============================================================
   Island Capital — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Mobile Navigation Toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }


    /* ---------- Services Dropdown ---------- */
    const dropdown = document.querySelector('.nav__dropdown');
    const trigger = document.querySelector('.nav__dropdown-trigger');

    if (dropdown && trigger) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }


    /* ---------- Navbar Scroll Behavior ---------- */
    const navbar = document.getElementById('navbar');

    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('nav--scrolled');
            } else {
                navbar.classList.remove('nav--scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }


    /* ---------- Scroll Reveal Animation ---------- */
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }


    /* ---------- Smooth Scroll for Anchor Links ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});
