// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const navbarLogo = document.querySelector("#navbar-logo");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    navbarLogo.classList.add("navbar-logo");
  } else {
    header.classList.remove("navbar-fixed");
    navbarLogo.classList.remove("navbar-logo");
  }
};

//  Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-active");
});
