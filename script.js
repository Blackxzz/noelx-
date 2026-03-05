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

    // Prevent default form submission & show alert (since no backend is attached)
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thanks for your message! This is a demo template, so nothing was actually sent. Replace this with your backend logic later.");
            form.reset();
        });
    }
});
