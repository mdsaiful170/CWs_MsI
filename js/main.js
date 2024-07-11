const header = document.querySelector(".header .header-2, .home-bottom");

const contentBox = document.querySelector(".hero");

// window scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
    contentBox.style.paddingTop = "7rem";
  } else {
    header.classList.remove("active");
    contentBox.style.paddingTop = "0rem";
  }
});

// window load event
window.addEventListener("load", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
    contentBox.style.paddingTop = "7rem";
  } else {
    header.classList.remove("active");
    contentBox.style.paddingTop = "0rem";
  }
  fadeOut();
});

window.onload = () => {
  fadeOut();
};
// ##################################################################

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-btn");
let currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (currentMode === "dark") {
    lightMode();
    currentMode = "light";
  } else {
    darkMode();
    currentMode = "dark";
  }
  localStorage.setItem("mode", currentMode);
});
function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
}
function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
}

$(document).ready(function () {
  $(".client-owl").owlCarousel({
    loop: true,
    margin: 20,
    // center:true,
    grabCursor: true,
    center: true,

    // grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOninteraction: false,
    },

    navText: [
      "<i class='fas fa-arrow-left-long'></i>",
      "<i class='fas fa-arrow-right-long'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".team-owl").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    grabCursor: true,

    navText: [
      "<i class='fas fa-arrow-left-long'></i>",
      "<i class='fas fa-arrow-right-long'></i>",
    ],
    autoplay: {
      delay: 3000,
      disableOninteraction: false,
    },
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1024: {
        items: 3,
        nav: true,
      },
      1400: {
        items: 4,
        nav: true,
      },
    },
  });
});
$(document).ready(function () {
  $(".owl-process").owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    grabCursor: true,

    navText: [
      "<i class='fas fa-arrow-left-long'></i>",
      "<i class='fas fa-arrow-right-long'></i>",
    ],
    autoplay: {
      delay: 3000,
      disableOninteraction: false,
    },
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1024: {
        items: 3,
        nav: true,
      },
      1400: {
        items: 4,
        nav: true,
      },
    },
  });
});

// $(document).ready(function () {
//   $('.navtab-owl').owlCarousel({
//       loop: true,
//       margin: 10,
//       center:true,
//       autoplay: {
//           delay: 3000,
//           disableOninteraction: false
//       },
//       responsive: {
//           0: {
//               items: 3,
//               nav: true,
//           },
//           768: {
//               items: 3,
//               nav: false,
//           },
//           991: {
//               items: 4,
//               nav: false,
//           },
//           1000: {
//               items: 5,
//               nav: true,
//               loop: true,
//           }
//       }
//   })
// });
