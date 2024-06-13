
// Fixed Positioning of Secondary Navigation
document.addEventListener('DOMContentLoaded', function() {
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