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


// SHOWING & HIDING OVERLAY CONTENT
const button_1 = document.querySelector('.topnav__overlay-1-button:first-child');
const button_2 = document.querySelector('.topnav__overlay-1-button:nth-child(2)');
const button_3 = document.querySelector('.topnav__overlay-1-button:nth-child(3)');
const button_4 = document.querySelector('.topnav__overlay-1-button:nth-child(4)');
const button_5 = document.querySelector('.topnav__overlay-1-button:nth-child(5)');
const overlayLinkBox_1 = document.querySelector('.topnav__overlay-1-link-box:nth-child(2)');
const overlayLinkBox_2 = document.querySelector('.topnav__overlay-1-link-box:nth-child(3)');
const overlayLinkBox_3 = document.querySelector('.topnav__overlay-1-link-box:nth-child(4)');
const overlayLinkBox_4 = document.querySelector('.topnav__overlay-1-link-box:nth-child(5)');
const overlayLinkBox_5 = document.querySelector('.topnav__overlay-1-link-box:nth-child(6)');


button_1.addEventListener('click', function() {
    overlayLinkBox_1.classList.remove('topnav__overlay-1-link-box--hide');
    overlayLinkBox_2.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_3.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_4.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_5.classList.add('topnav__overlay-1-link-box--hide');
});

button_2.addEventListener('click', function() {
    overlayLinkBox_1.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_2.classList.remove('topnav__overlay-1-link-box--hide');
    overlayLinkBox_3.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_4.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_5.classList.add('topnav__overlay-1-link-box--hide');
});

button_3.addEventListener('click', function() {
    overlayLinkBox_1.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_2.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_3.classList.remove('topnav__overlay-1-link-box--hide');
    overlayLinkBox_4.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_5.classList.add('topnav__overlay-1-link-box--hide');
});

button_4.addEventListener('click', function() {
    overlayLinkBox_1.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_2.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_3.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_4.classList.remove('topnav__overlay-1-link-box--hide');
    overlayLinkBox_5.classList.add('topnav__overlay-1-link-box--hide');
});

button_5.addEventListener('click', function() {
    overlayLinkBox_1.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_2.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_3.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_4.classList.add('topnav__overlay-1-link-box--hide');
    overlayLinkBox_5.classList.remove('topnav__overlay-1-link-box--hide');
});