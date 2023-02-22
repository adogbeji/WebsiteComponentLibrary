'use strict';

/* Toggle between adding and removing the 'topnav-responsive' class to topnav when the user clicks on the icon */
function openTopnavDropdown() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav01') {
      x.className += ' topnav01-responsive';
    } else {
      x.className = 'topnav01';
    }
}