'use strict';


// When the user scrolls the page, execute showProgressBar
window.onscroll = function() {showProgressBar()};

function showProgressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}