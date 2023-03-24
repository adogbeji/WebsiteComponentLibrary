'use strict';


// Single Accordion
// const accTextIconBox = document.querySelector('.accordion__text-icon-box');
// const accIconBox = document.querySelector('.accordion__icon-box');
// const accPromptText = document.querySelector('.accordion__text--1');
// const accPanel = document.querySelector('.accordion__panel');


// accTextIconBox.addEventListener('click', function() {
//     if (!accPanel.classList.contains('accordion__panel--show')) {
//         accPanel.classList.add('accordion__panel--show');
//         accTextIconBox.classList.add('accordion__text-icon-box--move-down');
//         accIconBox.classList.add('active');
//         accPromptText.textContent = 'Read Less';
//     } else {
//         accPanel.classList.remove('accordion__panel--show');
//         accTextIconBox.classList.remove('accordion__text-icon-box--move-down');
//         accIconBox.classList.remove('active');
//         accPromptText.textContent = 'Read More';
//     }
// });


// Multiple Accordions
let accTextIconBox = document.querySelectorAll('.accordion__text-icon-box');
console.log(accTextIconBox);  // Testing
let i;
const accIconBox = document.querySelector('.accordion__icon-box');
const accPromptText = document.querySelector('.accordion__text--1');
const accPanel = document.querySelector('.accordion__panel');


for (i = 0; i < accTextIconBox.length; i++) {
    accTextIconBox[i].addEventListener('click', function() {
        if (!accPanel.classList.contains('accordion__panel--show')) {
            accPanel.classList.add('accordion__panel--show');
            accTextIconBox.classList.add('accordion__text-icon-box--move-down');
            accIconBox.classList.add('active');
            accPromptText.textContent = 'Read Less';
        } else {
            accPanel.classList.remove('accordion__panel--show');
            accTextIconBox.classList.remove('accordion__text-icon-box--move-down');
            accIconBox.classList.remove('active');
            accPromptText.textContent = 'Read More';
        }
    });
}