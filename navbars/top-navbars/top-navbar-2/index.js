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

// PROFILE PICTURE DROPDOWN

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavClickDropDown() {
    document.getElementById('myTopnavDropdown').classList.toggle('topnav__user-dropdown-content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.topnav__user-photo-box')) {
//       let dropdowns = document.getElementsByClassName('topnav__user-dropdown-content');
//       let x;
//       for (x = 0; x < dropdowns.length; x++) {
//         let openDropdown = dropdowns[x];
//         if (openDropdown.classList.contains('topnav__user-dropdown-content--show')) {
//           openDropdown.classList.remove('topnav__user-dropdown-content--show');
//         }
//       }
//     }
// }


// DOT ICON DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDown() {
    document.getElementById('myTopNavLinkDotDropdown').classList.toggle('topnav__link-dot-dropdown-content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.topnav__link-dot-icon-box')) {
//         let dropdowns = document.getElementsByClassName('topnav__link-dot-dropdown-content');
//         let x;
//         for (x = 0; x < dropdowns.length; x++) {
//             var openDropdown = dropdowns[x];
//             if (openDropdown.classList.contains('topnav__link-dot-dropdown-content--show')) {
//                 openDropdown.classList.remove('topnav__link-dot-dropdown-content--show');
//             }
//         }
//     }
// }



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


// PROFILE PICTURE DROPDOWN (MOBILE)

/* When the user clicks on the photo,
toggle between hiding and showing the dropdown content */
function openClickMobileDropDown() {
    document.getElementById('myDropdown').classList.toggle('topnav-mobilenav__dropdown-content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.topnav-mobilenav__user-photo-box')) {
//       let dropdowns = document.getElementsByClassName('topnav-mobilenav__dropdown-content');
//       let x;
//       for (x = 0; x < dropdowns.length; x++) {
//         let openDropdown = dropdowns[x];
//         if (openDropdown.classList.contains('topnav-mobilenav__dropdown-content--show')) {
//           openDropdown.classList.remove('topnav-mobilenav__dropdown-content--show');
//         }
//       }
//    }
// }