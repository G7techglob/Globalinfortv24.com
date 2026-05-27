const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if(window.scrollY > 20){
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.06)';
  }
});
