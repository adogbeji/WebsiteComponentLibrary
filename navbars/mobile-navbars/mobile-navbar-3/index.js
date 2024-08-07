'use strict';


// --- FIRST OVERLAY ---

/* Open when someone clicks on the magnifying glass icon */
function openMobileMenuOne() {
    // alert('Working!');
    document.getElementById('mobileNavOverlay1').style.width = '100%';
}

/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeMobileMenuOne() {
    document.getElementById('mobileNavOverlay1').style.width = '0';
    closeIcon.style.opacity = '0';
}

// --- SECOND OVERLAY ---


// Slide in from the side
const closeIcon = document.querySelector('.mobilenav__closebtn-box');

/* Open when someone clicks on the hamburger icon */
function openMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '100%';
    closeIcon.style.opacity = '1';
}

/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '0';
    closeIcon.style.opacity = '0';
}


// First Navigation Button
const navButton_1 = document.querySelector('.mobilenav__content-button--1');
const navContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
const navContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');

navButton_1.addEventListener('click', function() {
    navContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');
});


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





// // Slide in from the side
const closeIcon_2 = document.querySelector('.mobilenav__closebtn-box-2');

// const overlay2ContentBox = document.querySelector('.mobilenav__overlay-2-content-box-1');
// const overlay3ContentBox = document.querySelector('.mobilenav__overlay-2-content-box-2');

// /* Open when someone clicks on the hamburger icon */
function openMobileMenuThree() {
    // document.getElementById('mobileNavOverlay2').style.width = '100%';
    // closeIcon_1.style.opacity = '1';

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_2.classList.add('mobilenav__overlay-2-content-box-2--show');  // Shows overlay 2 content box 2
}

// /* Close when someone clicks on the 'x' symbol inside the overlay */
// function closeMobileMenuThree() {
//     document.getElementById('mobileNavOverlay3').style.width = '0';
//     closeIcon_1.style.opacity = '0';
// }


// Go back to main sidebar

function returnToHome(a) {
    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_3 = document.querySelector('.mobilenav__overlay-2-content-box-3');
    const overlay2ContentBox_4 = document.querySelector('.mobilenav__overlay-2-content-box-4');
    const overlay2ContentBox_5 = document.querySelector('.mobilenav__overlay-2-content-box-5');
    const overlay2ContentBox_6 = document.querySelector('.mobilenav__overlay-2-content-box-6');
    const overlay2ContentBox_7 = document.querySelector('.mobilenav__overlay-2-content-box-7');
    const overlay2ContentBox_8 = document.querySelector('.mobilenav__overlay-2-content-box-8');

    if (a == 1) {
        overlay2ContentBox_2.classList.remove('mobilenav__overlay-2-content-box-2--show');  // Hides overlay 2 content box 2
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    }

    if (a == 2) {
        overlay2ContentBox_3.classList.remove('mobilenav__overlay-2-content-box-3--show');  // Hides overlay 2 content box 3
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    }

    if (a == 3) {
        overlay2ContentBox_4.classList.remove('mobilenav__overlay-2-content-box-4--show');  // Hides overlay 2 content box 4
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    } 
    
    if (a == 4) {
        overlay2ContentBox_5.classList.remove('mobilenav__overlay-2-content-box-5--show');  // Hides overlay 2 content box 5
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    } 

    if (a == 5) {
        overlay2ContentBox_6.classList.remove('mobilenav__overlay-2-content-box-6--show');  // Hides overlay 2 content box 6
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    } 

    if (a == 6) {
        overlay2ContentBox_7.classList.remove('mobilenav__overlay-2-content-box-7--show');  // Hides overlay 2 content box 7
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    } 

    if (a == 7) {
        overlay2ContentBox_8.classList.remove('mobilenav__overlay-2-content-box-8--show');  // Hides overlay 2 content box 8
        overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
    } 
    
    // overlay2ContentBox_2.classList.remove('mobilenav__overlay-2-content-box-2--show');  // Hides overlay 2 content box 2
    // overlay2ContentBox_1.classList.remove('mobilenav__overlay-2-content-box-1--hide');  // Shows overlay 2 content box 1
}


const overlay2ContentBox_2_Button_1 = document.querySelector('.mobilenav__content-button--1');

function openContentBox3() {
    // alert('Working!');

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    // const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_3 = document.querySelector('.mobilenav__overlay-2-content-box-3');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_3.classList.add('mobilenav__overlay-2-content-box-3--show');  // Shows overlay 2 content box 3
}

function openContentBox4() {
    // alert('Working!');

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    // const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_4 = document.querySelector('.mobilenav__overlay-2-content-box-4');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_4.classList.add('mobilenav__overlay-2-content-box-4--show');  // Shows overlay 2 content box 4
}

function openContentBox5() {
    // alert('Working!');

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    // const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_5 = document.querySelector('.mobilenav__overlay-2-content-box-5');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_5.classList.add('mobilenav__overlay-2-content-box-5--show');  // Shows overlay 2 content box 5
}

function openContentBox6() {
    // alert('Working!');

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    // const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_6 = document.querySelector('.mobilenav__overlay-2-content-box-6');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_6.classList.add('mobilenav__overlay-2-content-box-6--show');  // Shows overlay 2 content box 6
}

function openContentBox7() {
    // alert('Working!');

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    // const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_7 = document.querySelector('.mobilenav__overlay-2-content-box-7');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_7.classList.add('mobilenav__overlay-2-content-box-7--show');  // Shows overlay 2 content box 7
}

function openContentBox8() {
    // alert('Working!');

    const overlay2ContentBox_1 = document.querySelector('.mobilenav__overlay-2-content-box-1');
    // const overlay2ContentBox_2 = document.querySelector('.mobilenav__overlay-2-content-box-2');
    const overlay2ContentBox_8 = document.querySelector('.mobilenav__overlay-2-content-box-8');

    overlay2ContentBox_1.classList.add('mobilenav__overlay-2-content-box-1--hide');  // Hides overlay 2 content box 1
    // overlay3ContentBox.style.width = '25rem';
    overlay2ContentBox_8.classList.add('mobilenav__overlay-2-content-box-8--show');  // Shows overlay 2 content box 8
}