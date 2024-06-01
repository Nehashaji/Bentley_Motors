document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fading in sections
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sticky secondary navigation
    var secondaryNav = document.querySelector('.secondary-nav');
    var mainNavHeight = document.querySelector('.main-nav').offsetHeight;
    var secondaryNavTop = secondaryNav.offsetTop - mainNavHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= secondaryNavTop) {
            secondaryNav.style.position = 'fixed';
            secondaryNav.style.top = mainNavHeight + 'px';
        } else {
            secondaryNav.style.position = 'relative';
            secondaryNav.style.top = 'initial';
        }
    });
});
