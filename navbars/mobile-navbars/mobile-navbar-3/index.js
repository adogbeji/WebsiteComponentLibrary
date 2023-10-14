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



// --- SECOND OVERLAY ---

const overlay2 = document.querySelector('.mobilenav__overlay-2-content-box');
const closeButton = document.querySelector('.mobilenav__closebtn-box');


closeButton.addEventListener('click', function() {
    overlay2.classList.add('mobilenav__overlay-2-content-box--hide');
});


/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeMobileOverlay(a) {
    alert('Working!');
    if (a === 2) {
        overlay2.style.width = '0';
    }
}