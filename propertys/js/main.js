/*===== MENU SHOW =====*/
// FIX: ID was 'nav_toggle' in old HTML (underscore), now 'nav-toggle' (hyphen) — must match
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU ON MOBILE LINK CLICK ====================*/
// FIX: Old code used '.nav__link' but HTML had class="nav_link" (single underscore)
// Now both HTML and JS use double underscore: nav__link
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// FIX: Was declared twice — removed duplicate. Also selector fixed to nav__link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 59;
        const sectionId = current.getAttribute('id');
        // FIX: Selector updated to match double-underscore class nav__link
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
// FIX: ScrollReveal CDN src was empty in HTML — now added via CDN in index.html
// FIX: Class names updated to double underscore to match CSS
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        // reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
}
