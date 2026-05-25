const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

/* OPEN SIDEBAR */
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("active");
});

/* RETURN STEP BY STEP WHEN NAV LINK IS CLICKED */
document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", () => {

    /* CLOSE SIDEBAR */
    navbar.classList.remove("active");

  });

});

/* RETURN TO DASHBOARD WHEN TAPPING SCREEN */
document.addEventListener("click", (e) => {

  /* IF CLICK IS OUTSIDE SIDEBAR */
  if (
    !navbar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {

    /* CLOSE SIDEBAR */
    navbar.classList.remove("active");

  }

});

/* PREVENT SIDEBAR FROM CLOSING WHEN CLICKING INSIDE */
navbar.addEventListener("click", (e) => {
  e.stopPropagation();
});
