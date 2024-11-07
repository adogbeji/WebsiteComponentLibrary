'use strict';


const form = document.querySelector('.form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const subject = document.getElementById('subject');


form.addEventListener('submit', (e) => {
    checkInputs(e);  // Function that checks form inputs
});

function checkInputs(e) {
    // Get values from inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
}