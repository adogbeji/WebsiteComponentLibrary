'use strict';


// let acc = document.getElementsByClassName('accordion');
const accTextIconBox = document.querySelector('.accordion__text-icon-box');
const accIconBox = document.querySelector('.accordion__icon-box');
const promptText = document.querySelector('.accordion__text--1');
const accPanel = document.querySelector('.accordion__panel');


accTextIconBox.addEventListener('click', function() {
    if (!accPanel.classList.contains('accordion__panel--show')) {
        accPanel.classList.add('accordion__panel--show');
        accTextIconBox.classList.add('accordion__text-icon-box--move-down');
        accIconBox.classList.add('active');
        promptText.textContent = 'Read Less';
    } else {
        accPanel.classList.remove('accordion__panel--show');
        accTextIconBox.classList.remove('accordion__text-icon-box--move-down');
        accIconBox.classList.remove('active');
        promptText.textContent = 'Read More';
    }
});