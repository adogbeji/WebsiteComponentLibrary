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


    // First Name
    if (firstNameValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(firstName, 'Name cannot be blank!');
    } else {
        // Add success class
        setSuccessFor(firstName);
    }


    // Last Name
    if (lastNameValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(lastName, 'Name cannot be blank!');
    } else {
        // Add success class
        setSuccessFor(lastName);
    }


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