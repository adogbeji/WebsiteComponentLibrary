'use strict';


const form = document.querySelector('.form');
const email = document.getElementById('email');
const password_1 = document.getElementById('password');


form.addEventListener('submit', (e) => {
    checkInputs(e);  // Function that checks form inputs
});