'use strict';


// --- CLOSE ICON (X) ---

// // Slide in from the side
const closeIcon = document.querySelector('.topnav__closebtn-box');

// /* Open when someone clicks on the hamburger icon */
function openTopnavOverlayOne() {
    document.getElementById('topnavOverlay').style.width = '100%';
    closeIcon.style.opacity = '1';
}

// /* Close when someone clicks on the 'x' symbol inside the overlay */
function closeTopnavOverlay() {
    document.getElementById('topnavOverlay').style.width = '0';
    closeIcon.style.opacity = '0';
}