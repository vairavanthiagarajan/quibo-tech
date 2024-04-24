document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    window.addEventListener('scroll', function () {
        if (window.scrollY > heroHeight) {
            navbar.classList.add('navbar-custom');
        } else {
            navbar.classList.remove('navbar-custom');
        }
    });
});


function scrollToHome() {
    const featuresSection = document.getElementById('hero-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    const featuresSection = document.getElementById('about-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToServices() {
    const featuresSection = document.getElementById('services-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    const featuresSection = document.getElementById('contact-section');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}