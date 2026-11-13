// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll and highlight nav
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});

// Highlight nav on scroll
window.addEventListener('scroll', () => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    navItems.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPos + 150 && section.offsetTop + section.offsetHeight > scrollPos + 150) {
            navItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Projects Carousel
const carouselTrack = document.getElementById('carouselTrack');
const btnLeft = document.getElementById('carouselLeft');
const btnRight = document.getElementById('carouselRight');
let carouselIndex = 0;
btnLeft.addEventListener('click', () => {
    carouselIndex = Math.max(carouselIndex - 1, 0);
    updateCarousel();
});
btnRight.addEventListener('click', () => {
    const cardCount = carouselTrack.children.length;
    carouselIndex = Math.min(carouselIndex + 1, cardCount - 1);
    updateCarousel();
});
function updateCarousel() {
    const cardWidth = carouselTrack.children[0].offsetWidth + 40;
    carouselTrack.scrollTo({
        left: carouselIndex * cardWidth,
        behavior: 'smooth'
    });
}

// Back to Top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = "Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = "Message is required.";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    // If valid, show success message (replace with your own logic)
    if (valid) {
        contactForm.reset();
        alert("Thank you for your message! I'll get back to you soon.");
    }
});
