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
dropdownContent.style.minWidth = '33.7rem';
});

input.addEventListener('focusout', function() {
  inputDropdownBox.style.flex = '0 0 70%';
  dropdownContent.style.minWidth = '31.5rem';
});


// NO RESULTS DROPDOWN
const noResultsDropdown = document.querySelector('.mobilenav__search-dropdown-no-results');

input.addEventListener('focus', function() {
  inputDropdownBox.style.flex = '0 0 75%';
  noResultsDropdown.style.minWidth = '35.7rem';
});

input.addEventListener('focusout', function() {
  inputDropdownBox.style.flex = '0 0 70%';
  noResultsDropdown.style.minWidth = '33.3rem';
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