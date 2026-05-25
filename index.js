const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// CLOSE WHEN CLICK LINK (RETURN TO DASHBOARD SECTION)
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// CLOSE WHEN CLICK OUTSIDE
document.addEventListener("click", (e) => {
  if(!navbar.contains(e.target) && !menuBtn.contains(e.target)){
    navbar.classList.remove("active");
  }
});
