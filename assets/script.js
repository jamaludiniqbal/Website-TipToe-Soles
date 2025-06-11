//mobile menu functionality
function mobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const overlay = document.getElementById("overlay");
  const sideMenu = document.getElementById("side-menu");
  const backMenu = document.getElementById("back-menu");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("show");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
  });

  backMenu.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
  });
} // JavaScript for the side menu functionality

// Swiper functionality for image slider
function swiperImages() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}

swiperImages();
mobileMenu();
