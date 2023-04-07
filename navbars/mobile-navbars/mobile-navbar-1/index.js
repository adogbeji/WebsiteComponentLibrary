'use strict';


// SEARCH BAR CLOSE ICON
const closeIcon = document.querySelector('.mobilenav__search-clear-input');
const input = document.querySelector('.mobilenav__search-input');

// Removes close icon when nothing is typed
input.addEventListener('input', function(e) {
  if (input.value !== '') {
    closeIcon.classList.remove('mobilenav__search-clear-input--hide');
  } else {
    closeIcon.classList.add('mobilenav__search-clear-input--hide');
  }
});


// SEARCH INPUT DROPDOWN BOX 
const inputDropdownBox = document.querySelector('.mobilenav__search-input-dropdown-box');
const dropdownContent = document.querySelector('.mobilenav__search-dropdown-content');

input.addEventListener('focus', function() {
  inputDropdownBox.style.flex = '0 0 75%';
  dropdownContent.style.minWidth = '43.5rem';
});

input.addEventListener('focusout', function() {
  inputDropdownBox.style.flex = '0 0 70%';
  dropdownContent.style.minWidth = '41rem';
});



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