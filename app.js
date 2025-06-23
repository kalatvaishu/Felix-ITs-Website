AOS.init();
var swiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3500,
  },
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    current = start;
    range = end - start;
    (increment = end > start ? 1 : -1),
      (step = Math.abs(Math.floor(duration / range))),
      (timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }));
  }

  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});

// let lastScrollTop = 0;
// const navbar = document.querySelector(".navbar");
// const stickyOffset = 100; // When to start sticking
// const hideOffset = 500; // When to hide the navbar
// const showAgainOffset = 1000; // When to show again

// window.addEventListener("scroll", () => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > stickyOffset) {
//     navbar.classList.add("sticky-navbar");
//   } else {
//     navbar.classList.remove("sticky-navbar");
//   }

//   if (scrollTop > hideOffset && scrollTop < showAgainOffset) {
//     navbar.classList.add("hide-navbar");
//   } else {
//     navbar.classList.remove("hide-navbar");
//   }

//   lastScrollTop = scrollTop;
// });

swiper = new Swiper(".our-partner", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
console.log(cursor);
console.log(body);

body.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out",
  });
});