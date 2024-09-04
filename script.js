// ======= Hamburg =======

const header = document.querySelector(".header");
const mobileBtn = document.querySelector(".mobile-nav-btn");

const toggleMenu = () => {
  header.classList.toggle("active");
};

mobileBtn.addEventListener("click", () => toggleMenu());

// ====== swiper sliders ===========

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,

  breakpoints: {
    1200: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    0: {
        slidesPerView: 1,
        spaceBetween: 10,
    }, 
},
});

const swiperContainer = document.querySelector(".mySwiper");
swiperContainer.addEventListener("mouseenter", () => swiper.autoplay.stop());
swiperContainer.addEventListener("mouseleave", () => swiper.autoplay.start());
