// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// HERO BUTTON

const heroBtn = document.getElementById("hero-btn");

heroBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  });
});

// SUBSCRIBE BUTTON

const subscribeBtn = document.getElementById("subscribe-btn");

subscribeBtn.addEventListener("click", () => {

  alert("Thank you for subscribing to GlobalInforTV24 Entertainment News!");

});
