'use strict';


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openClickDropDown() {
    document.getElementById('myDropdown').classList.toggle('click-dropdown__content--show');
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.click-dropdown__btn')) {
      let dropdowns = document.getElementsByClassName('click-dropdown__content');
      let x;
      for (x = 0; x < dropdowns.length; x++) {
        let openDropdown = dropdowns[x];
        if (openDropdown.classList.contains('click-dropdown__content--show')) {
          openDropdown.classList.remove('click-dropdown__content--show');
        }
      }
    }
  }