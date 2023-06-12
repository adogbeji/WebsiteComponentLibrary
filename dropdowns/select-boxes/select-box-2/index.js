'use strict';

const selected = document.querySelector('.select-box__prompt');
const optionsContainer = document.querySelector('.select-box__options');
const optionsList = document.querySelectorAll('.select-box__option');


// Code for adding and removing .select-box__active class
selected.addEventListener('click', function() {
    if (optionsContainer.classList.contains('select-box__active')) {
        optionsContainer.classList.remove('select-box__active');
    } else {
        optionsContainer.classList.add('select-box__active');
    }
});