document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const header = document.querySelector('header');
    const profileHeader = document.querySelector('.profile-header');
    const main = document.querySelector('main');
    
    // Scroll handling
    let lastScrollTop = 0;
    const scrollThreshold = 100; // When to switch to compact mode
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Toggle compact mode
        if (currentScroll > scrollThreshold) {
            header.classList.add('compact');
            profileHeader.classList.add('compact');
            main.classList.add('compact');
        } else {
            header.classList.remove('compact');
            profileHeader.classList.remove('compact');
            main.classList.remove('compact');
        }
        
        // Hide/show header
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            // Scrolling down & past threshold
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up or at top
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});
