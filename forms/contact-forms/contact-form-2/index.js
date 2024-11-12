'use strict';


const accBtn = document.querySelector('.form__accordion');
const accPanel = document.querySelector('.form__accordion-panel');


accBtn.addEventListener('click', function() {
    if (!accPanel.classList.contains('form__accordion-panel--show')) {
        accPanel.classList.add('form__accordion-panel--show');
        accBtn.classList.add('form__accordion-active');
    } else {
        accPanel.classList.remove('form__accordion-panel--show');
        accBtn.classList.remove('form__accordion-active');
    }
});