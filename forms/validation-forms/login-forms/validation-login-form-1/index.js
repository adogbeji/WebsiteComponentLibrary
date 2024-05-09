'use strict';


const form = document.querySelector('.form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    checkInputs(e);  // Function that checks form inputs
});

function checkInputs(e) {
    // Get values from inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


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


    // Password
    if (passwordValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(password, 'Password cannot be blank!');
    } else if (password.value.length < 6) {
        e.preventDefault();  // Prevents Form Submission
        setErrorFor(password, 'Password must be at least 6 characters!');
    } else if (password.value.length >= 20) {
        e.preventDefault();  // Prevents Form Submission
        setErrorFor(password, 'Password must be less than 20 characters!');
    } else {
        // Add success class
        setSuccessFor(password);
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