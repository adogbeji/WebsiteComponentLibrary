'use strict';



// Single Accordion
// const accBtn = document.querySelector('.accordion');
// const accPanel = document.querySelector('.accordion__panel');


// accBtn.addEventListener('click', function() {
//     if (!accPanel.classList.contains('accordion__panel--show')) {
//         accPanel.classList.add('accordion__panel--show');
//         accBtn.classList.add('accordion__active');
//     } else {
//         accPanel.classList.remove('accordion__panel--show');
//         accBtn.classList.remove('accordion__active');
//     }
// });



// Single Accordion (Alternative Code)
// const accBtn = document.querySelector('.accordion');
// const accPanel = document.querySelector('.accordion__panel');


// accBtn.addEventListener('click', function() {
//     if (accPanel.style.display === 'none') {
//         accPanel.style.display = 'block';
//         accBtn.classList.add('accordion__active');
//         // accTextIconBox.classList.add('accordion__text-icon-box--move-down');
//         // accIconBox.classList.add('active');
//         // accPromptText.textContent = 'Read Less';
//     } else {
//         accPanel.style.display = 'none';
//         accBtn.classList.remove('accordion__active');
//         // accTextIconBox.classList.remove('accordion__text-icon-box--move-down');
//         // accIconBox.classList.remove('active');
//         // accPromptText.textContent = 'Read More';
//     }
// });



// Multiple Accordions
const accBtn = document.querySelectorAll('.accordion');
const accPanel = document.querySelectorAll('.accordion__panel');


for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', function() {
        if (!accPanel[i].classList.contains('accordion__panel--show')) {
            accPanel[i].classList.add('accordion__panel--show');
            accBtn[i].classList.add('accordion__active');
        } else {
            accPanel[i].classList.remove('accordion__panel--show');
            accBtn[i].classList.remove('accordion__active');
        }
    });
}