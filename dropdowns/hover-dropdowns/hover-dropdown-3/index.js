'use strict';


// LANGUAGES MODAL
const modal = document.querySelector('.dropdown__content-modal');
const modalButton = document.querySelector('.dropdown__content-languages-button');
const modalCloseButton = document.querySelector('.dropdown__content-modal-closebtn');


modalButton.addEventListener('click', function() {
    modal.classList.add('dropdown__content-modal-visible');
});


// Closes modal (3 possible ways)

// 1) By clicking on the close icon (x) which is located inside the modal:
modalCloseButton.addEventListener('click', function() {
    modal.classList.remove('dropdown__content-modal-visible');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === modal) {
        modal.classList.remove('dropdown__content-modal-visible');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.classList.remove('dropdown__content-modal-visible');
    }
});