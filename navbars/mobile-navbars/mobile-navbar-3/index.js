'use strict';


// --- FIRST OVERLAY ---


// Slide in from the side


/* Close when someone clicks on the 'x' symbol inside the overlay */
const overlay1 = document.querySelector('.mobilenav__overlay-1');

/* Open when someone clicks on the SVG element */
function openMobileMenuOne() {
    document.getElementById('mobileNavOverlay1').style.width = '100%';
}

function closeMobileMenuOne() {
    overlay1.style.width = '0';
}


// --- SECOND OVERLAY ---


// Slide in from the side

/* Open when someone clicks on the hamburger icon */
function openMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '100%';
}

/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '0%';
}