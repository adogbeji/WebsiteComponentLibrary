'use strict';


// HEADER MODAL
const courseShareButton = document.querySelector('.course-accordion__header-share-button');
const courseShareModal = document.querySelector('.course-accordion__header-modal');


courseShareButton.addEventListener('click', function() {
    courseShareModal.classList.add('course-accordion__header-modal-visible');
});


// Closes modal (3 possible ways)

// 1) By clicking on the close icon (x) inside the modal:
const courseShareModalCloseIcon = document.querySelector('.course-accordion__header-modal-closebtn-box');


courseShareModalCloseIcon.addEventListener('click', function() {
    // if (courseShareModal.classList.contains('course-accordion__header-modal-visible')) {
    //     courseShareModal.classList.remove('course-accordion__header-modal-visible');
    // }
    courseShareModal.classList.remove('course-accordion__header-modal-visible');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === courseShareModal) {
        courseShareModal.classList.remove('course-accordion__header-modal-visible');
    }
}