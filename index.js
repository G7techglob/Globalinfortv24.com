const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

/* OPEN / CLOSE MENU */
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("active");
});

/* CLOSE ON LINK CLICK (RETURN TO DASHBOARD) */
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", (e) => {
  if(!navbar.contains(e.target) && !menuBtn.contains(e.target)){
    navbar.classList.remove("active");
  }
});
