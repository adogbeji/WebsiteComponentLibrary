'use strict';


// COURSE SHARE MODAL
const courseShareButton = document.querySelector('.course-accordion__header-share-button');
const courseShareModal = document.querySelector('.course-accordion__header-modal-1');
const pageBody = document.querySelector('._9714');  // Testing


courseShareButton.addEventListener('click', function() {
    courseShareModal.classList.add('course-accordion__header-modal-1-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// Closes modal (3 possible ways)

// 1) By clicking on the close icon (x) inside the modal:
const courseShareModalCloseIcon = document.querySelector('.course-accordion__header-modal-1-closebtn');


courseShareModalCloseIcon.addEventListener('click', function() {
    // if (courseShareModal.classList.contains('course-accordion__header-modal-1-visible')) {
    //     courseShareModal.classList.remove('course-accordion__header-modal-1-visible');
    //     pageBody.classList.remove('_9714--remove-scrollbar');
    // }
    courseShareModal.classList.remove('course-accordion__header-modal-1-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === courseShareModal) {
        courseShareModal.classList.remove('course-accordion__header-modal-1-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        courseShareModal.classList.remove('course-accordion__header-modal-1-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
});



// COURSE SHARE MODAL
const icon_1 = document.querySelector('.course-accordion__header-modal-2-icon-1');
const icon_1a = document.querySelector('.course-accordion__header-modal-2-icon-1a');
const icon_2 = document.querySelector('.course-accordion__header-modal-2-icon-2');
const icon_2a = document.querySelector('.course-accordion__header-modal-2-icon-2a');

const initialStars = document.querySelector('.course-accordion__header-modal-2-icon-box-1');
const firstStarRating = document.querySelector('.course-accordion__header-modal-2-icon-box-2');

icon_1.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');

    icon_1.style.display = 'none';
    icon_1a.style.display = 'block';
});

icon_1.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');

    icon_1.style.display = 'block';
    icon_1a.style.display = 'none';
});


icon_2.addEventListener('mouseover', function() {
    // alert('Second Half!');

    icon_2.style.display = 'none';
    icon_2a.style.display = 'block';
});

icon_2.addEventListener('mouseout', function() {
    // alert('Second Half!');

    icon_2.style.display = 'block';
    icon_2a.style.display = 'none';
});