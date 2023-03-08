'use strict';


let acc = document.getElementsByClassName('accordion');
const textIconBox = document.querySelector('.accordion__text-icon-box');
const iconBox = document.querySelector('.accordion__icon-box');
const promptText = document.querySelector('.accordion__text--1');
const panel = document.querySelector('.accordion__panel');


textIconBox.addEventListener('click', function() {
    if (!panel.classList.contains('accordion__panel--show')) {
        panel.classList.add('accordion__panel--show');
        textIconBox.classList.add('accordion__text-icon-box--move-down');
        iconBox.classList.add('active');
        promptText.textContent = 'Read Less';
    } else {
        panel.classList.remove('accordion__panel--show');
        textIconBox.classList.remove('accordion__text-icon-box--move-down');
        iconBox.classList.remove('active');
        promptText.textContent = 'Read More';
    }
});