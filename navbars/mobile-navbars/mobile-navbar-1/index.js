'use strict';


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMobileMenu() {
    let x = document.getElementById('mobileLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none'; 
    } else {
      x.style.display = 'block';
    }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openClickMobileDropDown() {
    document.getElementById('myDropdown').classList.toggle('mobilenav__dropdown-content--show');
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.mobilenav__dropbtn')) {
      let dropdowns = document.getElementsByClassName('mobilenav__dropdown-content');
      let x;
      for (x = 0; x < dropdowns.length; x++) {
        let openDropdown = dropdowns[x];
        if (openDropdown.classList.contains('mobilenav__dropdown-content--show')) {
          openDropdown.classList.remove('mobilenav__dropdown-content--show');
        }
      }
    }
  }