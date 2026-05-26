// SIDEBAR
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// OPEN SIDEBAR
menuBtn.addEventListener('click', () => {

  sidebar.classList.add('active');

  // SAVE STEP IN HISTORY
  history.pushState({sidebarOpen:true}, "");

});

// CLOSE SIDEBAR
closeBtn.addEventListener('click', () => {

  sidebar.classList.remove('active');

});

// STEP BY STEP BACK FUNCTION
window.addEventListener('popstate', function () {

  // CLOSE SIDEBAR FIRST
  if(sidebar.classList.contains('active')){

    sidebar.classList.remove('active');

  }else{

    history.back();

  }

});

// CUSTOM BACK BUTTON
document.getElementById('backBtn').addEventListener('click', () => {

  // CLOSE SIDEBAR FIRST
  if(sidebar.classList.contains('active')){

    sidebar.classList.remove('active');

  }else{

    window.history.back();

  }

});
