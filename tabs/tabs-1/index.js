'use strict';

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Hide all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName('tab__content');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    // Remove "active" class from all elements with class="tab__links"
    tablinks = document.getElementsByClassName('tab__links');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('tab__links-active', '');
    }
  
    // Show current tab & add "active" class to button which opened it
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += 'tab__links-active';
  }