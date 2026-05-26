const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

/* OPEN SIDEBAR */
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");

  history.pushState({sidebarOpen:true}, "");
});

/* CLOSE SIDEBAR */
function closeSidebar(){
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

/* STEP-BY-STEP BACK BUTTON */
window.addEventListener("popstate", () => {

  if(sidebar.classList.contains("active")){
    closeSidebar();
  }

});

/* FORM SUBMISSION */
const advertForm = document.querySelector(".advert-form");

advertForm.addEventListener("submit", function(e){
  e.preventDefault();

  alert("Advertisement request submitted successfully.");

  advertForm.reset();
});
