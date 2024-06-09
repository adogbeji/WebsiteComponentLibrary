'use strict';


const yourName = document.getElementById('name');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    checkInputs(e);  // Function that checks form inputs
});

function checkInputs(e) {
    // Get values from inputs
    const nameValue = yourName.value.trim();
    const emailValue = email.value.trim();


    // Name
    if (nameValue === '') {
        e.preventDefault();  // Prevents Form Submission
        // Show error message + add error class
        setErrorFor(yourName, 'Name cannot be blank!');
    } else {
        // Add success class
        setSuccessFor(yourName);
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