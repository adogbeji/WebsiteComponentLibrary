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
        setErrorFor(firstName, 'First Name cannot be blank!');
    } else {
        // Add success class
        setSuccessFor(firstName);
    }


    // Last Name
    if (lastNameValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(lastName, 'Last Name cannot be blank!');
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


    // Subject
    if (subjectValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(subject, 'Subject cannot be blank!');
    } else if (!validateEmail(subjectValue)) {
        e.preventDefault();  // Prevents Form Submission
        setErrorFor(subject, 'Subject is not valid!');
    } else {
        // Add success class
        setSuccessFor(subject);
    }
}


function setErrorFor(input, message) {
    const formGroup = input.parentElement;  // Div with class '.form__group'
    const smallTag = formGroup.querySelector('.form__error-message');
  
    // Add error message inside small tag
    smallTag.style.display = 'inline-block';  // Allows block-element behaviour but remains inline
    smallTag.innerText = message;
    setTimeout(removeMessage, 2500);  // Removes error message after 2.5s
  
    // Add error class
    formGroup.className = 'form__group form__group--error';
    setTimeout(removeClass, 2500);  // Removes error class after 2.5s
  
    function removeMessage() {
        smallTag.style.display = 'none';  // Hides small tag & removes it from DOM
        smallTag.innerText = '';  // Removes error message text
        // formGroup.style.marginBottom = '16px';  // Restores bottom margin
        formGroup.style.marginBottom = '1.6rem';  // Restores bottom margin
    }
  
    function removeClass() {
        formGroup.className = 'form__group';
    }
}


function setSuccessFor(input) {
    const formGroup = input.parentElement;  // Div with class '.form__group'
  
    formGroup.className = 'form__group form__group--success';
    setTimeout(removeClass, 2500);  // Removes success class after 2.5s
  
    function removeClass() {
        formGroup.className = 'form__group';
        // formGroup.style.marginBottom = '16px';  // Restores bottom margin
        formGroup.style.marginBottom = '1.6rem';  // Restores bottom margin
    }
}


// Special Function to validate email - returns true or false
function validateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}