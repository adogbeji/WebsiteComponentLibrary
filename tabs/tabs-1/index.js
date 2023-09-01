'use strict';

// function openCity(evt, cityName) {
//     // Declare all variables
//     let i, tabcontent, tablinks;
  
//     // Hide all elements with class="tabcontent"
//     tabcontent = document.getElementsByClassName('tab__content');
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = 'none';
//     }
  
//     // Remove "active" class from all elements with class="tab__links"
//     tablinks = document.getElementsByClassName('tab__links');
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace('tab__links-active', '');
//     }
  
//     // Show current tab & add "active" class to button which opened it
//     document.getElementById(cityName).style.display = 'block';
//     evt.currentTarget.className += 'tab__links-active';
//   }


/* 1) Initially, all the tabs are hidden except one. This is always open by default when the page 
      loads
   2) However, when a button is pressed, the corresponding tab opens and the default tab closes
   3) When another button is pressed, the corresponding tab opens and the previously-opened one
      closes
 */



const tabButtons = document.querySelectorAll('.tab__button');  // NodeList containing all tab buttons
const tabs = document.querySelectorAll('.tab__content');  // NodeList containing all tabs


// The first tab is shown by default when page loads
tabs[0].classList.add('tab__content--show');