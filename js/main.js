var dropdownBtn = document.getElementById('dropdown-btn');
var nav = document.getElementById('navigation'); 
var submenuBtn = document.getElementById('submenu-btn');
var submenuContent = document.getElementById('submenu-content');    

dropdownBtn.onclick = function() {
    this.classList.toggle('open');
    nav.classList.toggle('active');
  }

submenuBtn.onclick = function() {
    submenuContent.classList.toggle('active');
  }