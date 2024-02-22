'use strict';


// // --- FIRST OVERLAY ---


// // Slide in from the side


/* Close when someone clicks on the 'x' symbol inside the overlay */
const overlay1 = document.querySelector('.mobilenav__overlay-1');

/* Open when someone clicks on the SVG element */
function openMobileMenuOne() {
    document.getElementById('mobileNavOverlay1').style.width = '100%';
}

function closeMobileMenuOne() {
    overlay1.style.width = '0';
}


// // --- SECOND OVERLAY ---


// // Slide in from the side
const closeIcon_1 = document.querySelector('.mobilenav__closebtn-box-1');

// /* Open when someone clicks on the hamburger icon */
function openMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '100%';
    closeIcon_1.style.opacity = '1';
}

// /* Close when someone clicks on the 'x' symbol inside the overlay */
function closeMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '0';
    closeIcon_1.style.opacity = '0';
}


// --- HAMBURGER ICON ---

// function openMobileMenuTwo() {
//     // ORIGINAL CODE
//     // if (overlay2Content.classList.contains('mobilenav__overlay-2-content-box--hide')) {
//     //     overlay2Content.classList.remove('mobilenav__overlay-2-content-box--hide');

//     //     if (overlay2.classList.contains('mobilenav__overlay-2--hidden')) {
//     //         overlay2.classList.remove('mobilenav__overlay-2--hidden');
//     //     }
//     // }
    
//     // SHORTENED CODE
//     if (overlay2Content.classList.contains('mobilenav__overlay-2-content-box--hide') && overlay2.classList.contains('mobilenav__overlay-2--hidden')) {
//         overlay2Content.classList.remove('mobilenav__overlay-2-content-box--hide');
//         overlay2.classList.remove('mobilenav__overlay-2--hidden');
//     }
// }


// --- SECOND OVERLAY ---

// const overlay2 = document.querySelector('.mobilenav__overlay-2');
// const overlay2Content = document.querySelector('.mobilenav__overlay-2-content-box');
// const closeButton = document.querySelector('.mobilenav__closebtn-box-1');


// closeButton.addEventListener('click', function() {
//     overlay2Content.classList.add('mobilenav__overlay-2-content-box--hide');  // Hides sidebar
//     overlay2.classList.add('mobilenav__overlay-2--hidden');  // Hides overlay
// });


// --- LANGUAGES MODAL ---

const modal = document.querySelector('.mobilenav__modal');
const modalButton = document.querySelector('.mobilenav__languages-button');
const modalCloseButton = document.querySelector('.mobilenav__modal-closebtn');

const modalLanguage = document.querySelectorAll('.mobilenav__modal-language');

// Ensures that English is always selected by default
const modalLanguageIndex = 0;
modalLanguage[modalLanguageIndex].classList.add('mobilenav__modal-language--selected');

// for (let x = 0; x < modalLanguage.length; x++) {
//     modalLanguage[x].addEventListener('click', function() {
//         if (!modalLanguage[x].classList.contains('mobilenav__modal-language--selected')) {
//             modalLanguage[x].classList.add('mobilenav__modal-language--selected');
//         }
//     });
// }


modalButton.addEventListener('click', function() {
    modal.classList.add('mobilenav__modal-visible');
});


// Closes modal (3 possible ways)

// 1) By clicking on the close icon (x) which is located inside the modal:
modalCloseButton.addEventListener('click', function() {
    modal.classList.remove('mobilenav__modal-visible');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === modal) {
        modal.classList.remove('mobilenav__modal-visible');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.classList.remove('mobilenav__modal-visible');
    }
});