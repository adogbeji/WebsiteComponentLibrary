'use strict';


// --- FIRST OVERLAY ---


// Slide in from the side

/* Open when someone clicks on the SVG element */
function openMobileMenuOne() {
    document.getElementById('mobileNavOverlay1').style.width = '100%';
}
  
/* Close when someone clicks on the 'x' symbol inside the overlay */
const overlay1 = document.querySelector('.mobilenav__overlay-1');


// closeIcon.addEventListener('click', function() {
//     overlay1.style.width = '0';
// });


function closeMobileMenuOne() {
    overlay1.style.width = '0';
}