'use strict';


const alert = document.querySelector('.alert');
const alertCloseButton = document.querySelector('.alert__closebtn');


alertCloseButton.addEventListener('click', function() {
    alert.classList.add('alert--hide');
});