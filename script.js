// Toggle class Active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
// Ketika Menu DIklik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk close
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
