'use strict';


// SEARCH BAR CLOSE ICON
const closeIcon = document.querySelector('.topnav__search-clear-input');
const input = document.querySelector('.topnav__search-input');

// Removes close icon when nothing is typed
input.addEventListener('input', function(e) {
  if (input.value !== '') {
    closeIcon.classList.remove('topnav__search-clear-input--hide');
  } else {
    closeIcon.classList.add('topnav__search-clear-input--hide');
  }
});


// SEARCH INPUT DROPDOWN BOX 
const inputDropdownBox = document.querySelector('.topnav__search-input-dropdown-box');
const dropdownContent = document.querySelector('.topnav__search-dropdown-content');

input.addEventListener('focus', function() {
  inputDropdownBox.style.flex = '0 0 75%';
  dropdownContent.style.minWidth = '52.3rem';
});

input.addEventListener('focusout', function() {
  inputDropdownBox.style.flex = '0 0 70%';
  dropdownContent.style.minWidth = '48.8rem';
});


// NO RESULTS DROPDOWN
const noResultsDropdown = document.querySelector('.topnav__search-dropdown-no-results');

input.addEventListener('focus', function() {
  inputDropdownBox.style.flex = '0 0 75%';
  noResultsDropdown.style.minWidth = '47.2rem';
});

input.addEventListener('focusout', function() {
  inputDropdownBox.style.flex = '0 0 70%';
  noResultsDropdown.style.minWidth = '44rem';
});


// MAIN DROPDOWN

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavClickDropDown() {
    // Original Code
    if (document.getElementById('topNavDropdown_1').classList.contains('topnav__click-dropdown-content--show')) {
        document.getElementById('topNavDropdown_1').classList.remove('topnav__click-dropdown-content--show');
    } else {
        document.getElementById('topNavDropdown_1').classList.add('topnav__click-dropdown-content--show');
    }
  
    // Shortened Code
    // document.getElementById('topNavDropdown_1').classList.toggle('topnav__click-dropdown-content--show');
}

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('.topnav__click-dropdown-btn')) {
        const dropdown = document.querySelector('.topnav__click-dropdown-content');

        if (dropdown.classList.contains('topnav__click-dropdown-content--show')) {
            dropdown.classList.remove('topnav__click-dropdown-content--show');
        }
    }
});


// RESPONSIVE DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDown() {
    // Original Code
    if (document.getElementById('topNavLinkDotDropdown_1').classList.contains('topnav__link-dot-dropdown-content--show')) {
        document.getElementById('topNavLinkDotDropdown_1').classList.remove('topnav__link-dot-dropdown-content--show');
    } else {
        document.getElementById('topNavLinkDotDropdown_1').classList.add('topnav__link-dot-dropdown-content--show');
    }
  
    // Shortened Code
    // document.getElementById('topNavLinkDotDropdown_1').classList.toggle('topnav__link-dot-dropdown-content--show');
}

// document.addEventListener('click', function(e) {
//     if (e.target !== document.querySelector('.topnav__link-dot-icon-box')) {
//         const dropdown = document.querySelector('.topnav__link-dot-dropdown-content');

//         if (dropdown.classList.contains('topnav__link-dot-dropdown-content--show')) {
//             dropdown.classList.remove('topnav__link-dot-dropdown-content--show');
//         }
//     }
// });


// SEARCH BAR CLEAR ICON (x)

/* Displays the clear icon when the user types into the search bar */
function displayClearIcon() {
    const closeIcon = document.querySelector('.topnav__search-clear-input');

    closeIcon.classList.add('topnav__search-clear-input--show');
}

/* Removes the clear icon when the user clicks on it */
function clearTopNavInput() {
    const closeIcon = document.querySelector('.topnav__search-clear-input');

    closeIcon.classList.remove('topnav__search-clear-input--show');
}


// HAMBURGER MENU ICON

/* Toggle between showing and hiding the navigation menu links when the user clicks 
   on the hamburger menu / bar icon */
function openMobileMenu() {
    let x = document.getElementById('mobileLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none'; 
    } else {
      x.style.display = 'block';
    }
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openClickMobileDropDown() {
	if (document.getElementById('myMobileDropdown').classList.contains('topnav-mobilenav__hover-dropdown-content--show')) {
		document.getElementById('myMobileDropdown').classList.remove('topnav-mobilenav__hover-dropdown-content--show');
	} else {
		document.getElementById('myMobileDropdown').classList.add('topnav-mobilenav__hover-dropdown-content--show');
	}

    // document.getElementById('myMobileDropdown').classList.toggle('topnav-mobilenav__hover-dropdown-content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.topnav-mobilenav__hover-dropbtn')) {
      let dropdowns = document.getElementsByClassName('topnav-mobilenav__hover-dropdown-content');
      let x;
      for (x = 0; x < dropdowns.length; x++) {
        let openDropdown = dropdowns[x];
        if (openDropdown.classList.contains('topnav-mobilenav__hover-dropdown-content--show')) {
          openDropdown.classList.remove('topnav-mobilenav__hover-dropdown-content--show');
        }
      }
   }
}