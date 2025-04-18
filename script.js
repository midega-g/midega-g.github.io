
// Hamburger Toggle
function toggleMenu() {
  const icon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");
  icon.classList.toggle("open");
  menu.classList.toggle("open");
}


// Close Hamburger Menu on Outside Click
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Check if the menu is open and the click is outside the hamburger menu
  if (menu.classList.contains("open") && !hamburgerMenu.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});


// Scroll Behavior for Both Navbars
let prevScrollpos = window.pageYOffset;
const desktopNav = document.getElementById("desktop-nav");
const hamburgerNav = document.getElementById("hamburger-nav");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    // Desktop Navbar
    if (prevScrollpos > currentScrollPos) {
        desktopNav.style.top = "0";
    } else {
        desktopNav.style.top = `-${desktopNav.offsetHeight}px`;
    }

    // Hamburger Navbar
    if (prevScrollpos > currentScrollPos) {
        hamburgerNav.style.top = "0";
    } else {
        hamburgerNav.style.top = `-${hamburgerNav.offsetHeight}px`;
    }

    prevScrollpos = currentScrollPos;
};


// Card switch functionality
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


// Update year dynamically
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-year").textContent = new Date().getFullYear();
});