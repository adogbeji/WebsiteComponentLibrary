'use strict';

const form = document.querySelector('.form');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    checkInputs(e);  // Function that checks form inputs
});

function checkInputs(e) {
    // Get value from input
    const emailValue = email.value.trim();


    // Email
    if (emailValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(email, 'Email cannot be blank!');
    } else if (!validateEmail(emailValue)) {
        e.preventDefault();  // Prevents Form Submission
        setErrorFor(email, 'Email is not valid!');
    } else {
        // Add success class
        setSuccessFor(email);
    }
}