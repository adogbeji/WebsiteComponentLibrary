'use strict';


const scrollButton = document.querySelector('.scroll-btn');  // References scroll button


// 1) Plain JavaScript with no animation

// scrollButton.addEventListener('click', function() {  // The 'function' keyword ensures Internet Explorer compatability
//   window.scrollTo(0, 0);  // x-val(px), y-val(px)
// });


// 2) Plain JavaScript with animation

// scrollButton.addEventListener('click', function() {  // The 'function' keyword ensures Internet Explorer compatability
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'  // Allows smooth animation
//   });
// });


// 3) Makes button visible when users starts to scroll the page

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollBtnFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
