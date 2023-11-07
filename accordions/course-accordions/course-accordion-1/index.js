'use strict';


// HEADER MODAL
const courseShareButton = document.querySelector('.course-accordion__header-share-button');
const courseShareModal = document.querySelector('.course-accordion__header-modal');


courseShareButton.addEventListener('click', function() {
    courseShareModal.classList.add('course-accordion__header-modal-visible');
});