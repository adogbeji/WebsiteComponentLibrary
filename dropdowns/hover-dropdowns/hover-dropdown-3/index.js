'use strict';


// LANGUAGES MODAL
const modal = document.querySelector('.dropdown__content-modal');
const modalButton = document.querySelector('.dropdown__content-languages-button');
const modalCloseButton = document.querySelector('.dropdown__content-modal-closebtn');

const modalLanguages = document.querySelectorAll('.dropdown__content-modal-language');

for (let x = 0; x < modalLanguages.length; x++) {
    modalLanguages[x].addEventListener('click', function() {
        // modalLanguages[x].classList.add('course-accordion__video-lesson-control-bar-tooltip-dropdown-option--active');


        for (let x = 0; x < modalLanguages.length; x++) {
            if (modalLanguages[x].classList.contains('dropdown__content-modal-language--selected')) {  // Checks if any of the links contains the modifier class
                modalLanguages[x].classList.remove('dropdown__content-modal-language--selected');  // In that case, the modifier class is removed
            } 
        }

        // MOTE: This must come AFTER the for loop above, or else it won't work!
        modalLanguages[x].classList.add('dropdown__content-modal-language--selected');  // Adds modifier class to mark language button whose NodeList indedx value corresponds to button pressed
    });
}