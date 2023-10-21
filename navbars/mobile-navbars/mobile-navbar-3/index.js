'use strict';


// // --- FIRST OVERLAY ---


// // Slide in from the side


// /* Close when someone clicks on the 'x' symbol inside the overlay */
// const overlay1 = document.querySelector('.mobilenav__overlay-1');

// /* Open when someone clicks on the SVG element */
// function openMobileMenuOne() {
//     document.getElementById('mobileNavOverlay1').style.width = '100%';
// }

// function closeMobileMenuOne() {
//     overlay1.style.width = '0';
// }


// // --- SECOND OVERLAY ---


// // Slide in from the side

// /* Open when someone clicks on the hamburger icon */
// function openMobileMenuTwo() {
//     document.getElementById('mobileNavOverlay2').style.width = '100%';
// }

// /* Close when someone clicks on the 'x' symbol inside the overlay */
// function closeMobileMenuTwo() {
//     document.getElementById('mobileNavOverlay2').style.width = '0%';
// }


// --- HAMBURGER ICON ---

function openMobileMenuTwo() {
    if (overlay2Content.classList.contains('mobilenav__overlay-2-content-box--hide')) {
        overlay2Content.classList.remove('mobilenav__overlay-2-content-box--hide');

        if (overlay2.classList.contains('mobilenav__overlay-2--hidden')) {
            overlay2.classList.remove('mobilenav__overlay-2--hidden');
        }
    }
}


// --- SECOND OVERLAY ---

const overlay2 = document.querySelector('.mobilenav__overlay-2');
const overlay2Content = document.querySelector('.mobilenav__overlay-2-content-box');
const closeButton = document.querySelector('.mobilenav__closebtn-box-1');


closeButton.addEventListener('click', function() {
    overlay2Content.classList.add('mobilenav__overlay-2-content-box--hide');  // Hides sidebar
    overlay2.classList.add('mobilenav__overlay-2--hidden');  // Hides overlay
});