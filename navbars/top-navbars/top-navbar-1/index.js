'use strict';


// MAIN DROPDOWN

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavClickDropDown() {
    document.getElementById('myTopnavDropdown').classList.toggle('topnav__dropdown-content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {  
    if (!event.target.matches('.topnav__dropbtn')) {
        let dropdowns = document.getElementsByClassName('topnav__dropdown-content');
        let x;
        for (x = 0; x < dropdowns.length; x++) {
            let openDropdown = dropdowns[x];
            if (openDropdown.classList.contains('topnav__dropdown-content--show')) {
                openDropdown.classList.remove('topnav__dropdown-content--show');
            }
        }
    }
}


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
//             let openDropdown = dropdowns[x];
//             if (openDropdown.classList.contains('topnav__link-dot-dropdown-content--show')) {
//                 openDropdown.classList.remove('topnav__link-dot-dropdown-content--show');
//             }
//         }
//     }
// }


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


// PROFILE PICTURE DROPDOWN (MOBILE)

/* When the user clicks on the photo,
toggle between hiding and showing the dropdown content */
function openClickMobileDropDown() {
    document.getElementById('myMobileDropdown').classList.toggle('topnav-mobilenav__dropdown-content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.topnav-mobilenav__dropbtn')) {
      let dropdowns = document.getElementsByClassName('topnav-mobilenav__dropdown-content');
      let x;
      for (x = 0; x < dropdowns.length; x++) {
        let openDropdown = dropdowns[x];
        if (openDropdown.classList.contains('topnav-mobilenav__dropdown-content--show')) {
          openDropdown.classList.remove('topnav-mobilenav__dropdown-content--show');
        }
      }
   }
}