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


// NAVIGATION BAR DROPDOWNS

// FIRST DROPDOWN:-

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavClickDropDownOne() {
    // Original Code
    // if (document.getElementById('topNavDropdown_1').classList.contains('topnav__dropdown-content-1--show')) {
    //     document.getElementById('topNavDropdown_1').classList.remove('topnav__dropdown-content-1--show');
    // } else {
    //     document.getElementById('topNavDropdown_1').classList.add('topnav__dropdown-content-1--show');
    // }
  
    // Shortened Code
    document.getElementById('topNavDropdown_1').classList.toggle('topnav__dropdown-content-1--show');
}

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('.topnav__dropdown-btn--1')) {
        const dropdown = document.querySelector('.topnav__dropdown-content-1');

        if (dropdown.classList.contains('topnav__dropdown-content-1--show')) {
            dropdown.classList.remove('topnav__dropdown-content-1--show');
        }
    }
});


// SECOND DROPDOWN:-

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavClickDropDownTwo() {
    // Original Code
    // if (document.getElementById('topNavDropdown_2').classList.contains('topnav__dropdown-content-2--show')) {
    //     document.getElementById('topNavDropdown_2').classList.remove('topnav__dropdown-content-2--show');
    // } else {
    //     document.getElementById('topNavDropdown_2').classList.add('topnav__dropdown-content-2--show');
    // }
  
    // Shortened Code
    document.getElementById('topNavDropdown_2').classList.toggle('topnav__dropdown-content-2--show');
}

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('.topnav__dropdown--2')) {
        const dropdown = document.querySelector('.topnav__dropdown-content-2');

        if (dropdown.classList.contains('topnav__dropdown-content-2--show')) {
            dropdown.classList.remove('topnav__dropdown-content-2--show');
        }
    }
});


// FIRST RESPONSIVE DROPDOWN

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDownOne() {
  // Original Code
//   if (document.getElementById('topNavLinkDotDropdown_1').classList.contains('topnav__link-dot_1-dropdown-content--show')) {
//     document.getElementById('topNavLinkDotDropdown_1').classList.remove('topnav__link-dot_1-dropdown-content--show')
//   } else {
//     document.getElementById('topNavLinkDotDropdown_1').classList.add('topnav__link-dot_1-dropdown-content--show')
//   }

  // Shortened Code
  document.getElementById('topNavLinkDotDropdown_1').classList.toggle('topnav__link-dot_1-dropdown-content--show');
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.topnav__link-dot-icon-box--1')) {
//     let dropdowns = document.getElementsByClassName('topnav__link-dot_1-dropdown-content');
//     let x;
//     for (x = 0; x < dropdowns.length; x++) {
//       let openDropdown = dropdowns[x];
//       if (openDropdown.classList.contains('topnav__link-dot_1-dropdown-content--show')) {
//         openDropdown.classList.remove('topnav__link-dot_1-dropdown-content--show');
//       }
//     }
//   }
// }


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