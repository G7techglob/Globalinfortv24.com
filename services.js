const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

/* STEP-BY-STEP BACK BUTTON */

window.addEventListener("popstate", () => {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});

menuBtn.addEventListener("click", () => {
  history.pushState({sidebarOpen:true}, "");
});
