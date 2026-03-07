document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Simple reveal animation on scroll
    const sections = document.querySelectorAll('.section');
    const revealSection = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial setup for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', revealSection);
    revealSection(); // Trigger once on load for elements already in view

    // Form submission handler
    const form = document.querySelector('.contact-form');
    const iframe = document.getElementById('hidden_iframe');
    const popup = document.getElementById('popup-message');
    const closePopupBtn = document.getElementById('close-popup');
    let isSubmitting = false;

    if (form && iframe && popup && closePopupBtn) {
        form.addEventListener('submit', () => {
            isSubmitting = true;
        });

        iframe.addEventListener('load', () => {
            if (isSubmitting) {
                // Form was submitted and iframe loaded
                popup.classList.add('active');
                form.reset();
                isSubmitting = false;
            }
        });

        closePopupBtn.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    }
});
