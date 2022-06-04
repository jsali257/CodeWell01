const hamburger = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle("active");
});

const closeIcon = document.querySelector('.close');

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove("active")
});
