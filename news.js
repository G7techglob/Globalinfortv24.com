/* =========================
FILE: news.js
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* CLOSE MENU WHEN LINK IS CLICKED */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

/* SUBSCRIBE FORM */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for subscribing to GlobalInforTV24!");
});
