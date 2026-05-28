// sports.js

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// HERO BUTTON

const latestBtn = document.getElementById("latestBtn");

latestBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth"
  });
});

// READ MORE BUTTONS

const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Full Sports Story Coming Soon On GlobalInforTV24");

  });

});
