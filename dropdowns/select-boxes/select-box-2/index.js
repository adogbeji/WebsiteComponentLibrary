'use strict';

// const selected = document.querySelector('.select-box__prompt');
const selected = document.querySelector('.select-box__prompt-text');
const optionsContainer = document.querySelector('.select-box__options');
const optionsList = document.querySelectorAll('.select-box__option');


// Code for adding and removing .select-box__active class
selected.addEventListener('click', function() {
    // Original Code
    // if (optionsContainer.classList.contains('select-box__active')) {
    //     optionsContainer.classList.remove('select-box__active');
    // } else {
    //     optionsContainer.classList.add('select-box__active');
    // }

    // Shortened Code
    optionsContainer.classList.toggle('select-box__active');
});

optionsList.forEach(function(e) {
    e.addEventListener('click', function() {
        selected.innerHTML = e.querySelector('label').innerHTML;
        optionsContainer.classList.remove('select-box__active');
    });
});

// This function looks through all the options in our options list, and adds the click event listener
// to all of them. Whenever any of these options are clicked, it gets the value of the label element
// and displays it. The .select-box__active class is also removed