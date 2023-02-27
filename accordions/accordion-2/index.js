'use strict';


let acc = document.getElementsByClassName('accordion');
const textIconBox = document.querySelector('.accordion__text-icon-box');
const promptText = document.querySelector('.accordion__text--1');
const panel = document.querySelector('.accordion__panel');


promptText.addEventListener('click', function() {
    panel.style.height = 'auto';
    promptText.style.textContent = 'READ LESS';
});