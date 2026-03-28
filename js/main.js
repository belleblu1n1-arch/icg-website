/* ============================================================
   ISLAND CAPITAL GROUP — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile Navigation Toggle ----
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open');
            document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('is-open');
                mobileMenu.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });
    }


    // ---- Sticky Navigation ----
    const navbar = document.getElementById('navbar');

    if (navbar) {
        const isHomePage = navbar.classList.contains('nav--transparent');

        const handleScroll = () => {
            if (isHomePage) {
                if (window.scrollY > 80) {
                    navbar.classList.add('nav--scrolled');
                    navbar.classList.remove('nav--transparent');
                } else {
                    navbar.classList.remove('nav--scrolled');
                    navbar.classList.add('nav--transparent');
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run on load
    }


    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav')?.offsetHeight || 72;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ---- Scroll Reveal Animation (Intersection Observer) ----
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: show all elements if IntersectionObserver not supported
        revealElements.forEach(el => el.classList.add('is-visible'));
    }


    // ---- Active Navigation Link ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('nav__link--active');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav__link--active');
        }
    });


    // ---- Proof Bar — micro-slider ----
    const proofTabs = document.querySelectorAll('.proof-tab');
    const proofStatements = document.querySelectorAll('.proof-statement');

    if (proofTabs.length) {
        proofTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = parseInt(tab.dataset.proof);

                // Deactivate all
                proofTabs.forEach(t => {
                    t.classList.remove('proof-tab--active');
                    t.setAttribute('aria-selected', 'false');
                });
                proofStatements.forEach(s => s.classList.remove('proof-statement--active'));

                // Activate target
                tab.classList.add('proof-tab--active');
                tab.setAttribute('aria-selected', 'true');
                proofStatements[target].classList.add('proof-statement--active');
            });
        });
    }


    // ---- Contact Form Validation ----
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;

            // Clear previous errors
            contactForm.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('has-error');
            });

            // Validate required fields
            const requiredFields = contactForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                const group = field.closest('.form-group');
                if (!field.value.trim()) {
                    isValid = false;
                    if (group) group.classList.add('has-error');
                }
            });

            // Validate email format
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value.trim())) {
                    isValid = false;
                    const group = emailField.closest('.form-group');
                    if (group) group.classList.add('has-error');
                }
            }

            if (!isValid) {
                e.preventDefault();
            }
        });

        // Real-time validation: clear error on input
        contactForm.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => {
                const group = field.closest('.form-group');
                if (group) group.classList.remove('has-error');
            });
        });
    }

});
