'use strict';


// HAMBURGER ICON

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMobileMenu() {
    let x = document.getElementById('mobileLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none'; 
    } else {
        x.style.display = 'block';
    }
}


// FIRST DROPDOWN

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openClickMobileDropDownOne() {
    document.getElementById('mobileNavDropdown_1').classList.toggle('mobilenav__dropdown-content-1--show');
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.mobilenav__dropdown-btn-1')) {
      let dropdowns = document.getElementsByClassName('mobilenav__dropdown-content-1');
      let x;
      for (x = 0; x < dropdowns.length; x++) {
        let openDropdown = dropdowns[x];
        if (openDropdown.classList.contains('mobilenav__dropdown-content-1--show')) {
          openDropdown.classList.remove('mobilenav__dropdown-content-1--show');
        }
      }
    }
  }


// SECOND DROPDOWN

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openClickMobileDropDownTwo() {
    document.getElementById('mobileNavDropdown_2').classList.toggle('mobilenav__dropdown-content-2--show');
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.mobilenav__dropdown-btn-2')) {
        let dropdowns = document.getElementsByClassName('mobilenav__dropdown-content-2');
        let x;
        for (x = 0; x < dropdowns.length; x++) {
            let openDropdown = dropdowns[x];
            if (openDropdown.classList.contains('mobilenav__dropdown-content-2--show')) {
                openDropdown.classList.remove('mobilenav__dropdown-content-2--show');
            }
        }
    }
}


// SEARCH BAR
const mobileSearchBar = document.querySelector('.mobilenav__search-bar');
const mobileSearchBarInput = document.querySelector('.mobilenav__search-bar-search-input');