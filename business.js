const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Newsletter validation (simple)
document.querySelector(".newsletter-form").addEventListener("submit", function(e){
  e.preventDefault();

  const email = this.querySelector("input").value;

  if(email.includes("@")){
    alert("Subscribed successfully to GlobalInforTV24 Business News!");
    this.reset();
  } else {
    alert("Please enter a valid email address.");
  }
});
