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
const icon_1a = document.querySelector('.course-accordion__header-modal-2-icon-1a');
const icon_1b = document.querySelector('.course-accordion__header-modal-2-icon-1b');
const icon_2a = document.querySelector('.course-accordion__header-modal-2-icon-2a');
const icon_2b = document.querySelector('.course-accordion__header-modal-2-icon-2b');

const icon_3a = document.querySelector('.course-accordion__header-modal-2-icon-3a');
const icon_3b = document.querySelector('.course-accordion__header-modal-2-icon-3b');
const icon_4a = document.querySelector('.course-accordion__header-modal-2-icon-4a');
const icon_4b = document.querySelector('.course-accordion__header-modal-2-icon-4b');

const icon_5a = document.querySelector('.course-accordion__header-modal-2-icon-5a');
const icon_5b = document.querySelector('.course-accordion__header-modal-2-icon-5b');
const icon_6a = document.querySelector('.course-accordion__header-modal-2-icon-6a');
const icon_6b = document.querySelector('.course-accordion__header-modal-2-icon-6b');

const icon_7a = document.querySelector('.course-accordion__header-modal-2-icon-7a');
const icon_7b = document.querySelector('.course-accordion__header-modal-2-icon-7b');
const icon_8a = document.querySelector('.course-accordion__header-modal-2-icon-8a');
const icon_8b = document.querySelector('.course-accordion__header-modal-2-icon-8b');

const starIcon_9a = document.querySelector('.course-accordion__header-modal-2-icon-9a');
const starIcon_9b = document.querySelector('.course-accordion__header-modal-2-icon-9b');
const starIcon_10a = document.querySelector('.course-accordion__header-modal-2-icon-10a');
const starIcon_10b = document.querySelector('.course-accordion__header-modal-2-icon-10b');


const initialStars = document.querySelector('.course-accordion__header-modal-2-icon-box-1');
const firstStarRating = document.querySelector('.course-accordion__header-modal-2-icon-box-2');

icon_1a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';

    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
});

icon_1a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';

    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
});


icon_2a.addEventListener('mouseover', function() {
    // alert('Second Half!');
    
    // OTHER HALF
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';

    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
});

icon_2a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // OTHER HALF
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';

    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
});


icon_3a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';

    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
});

icon_3a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';

    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
});


icon_4a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';


    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';
});

icon_4a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';

    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';
});


icon_5a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';


    icon_5a.style.display = 'none';
    icon_5b.style.display = 'block';
});

icon_5a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';

    icon_5a.style.display = 'block';
    icon_5b.style.display = 'none';
});

icon_6a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';
    icon_5a.style.display = 'none';
    icon_5b.style.display = 'block';


    icon_6a.style.display = 'none';
    icon_6b.style.display = 'block';
});

icon_6a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';
    icon_5a.style.display = 'block';
    icon_5b.style.display = 'none';


    icon_6a.style.display = 'block';
    icon_6b.style.display = 'none';
});


// FOURTH STAR
icon_7a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';
    icon_5a.style.display = 'none';
    icon_5b.style.display = 'block';
    icon_6a.style.display = 'none';
    icon_6b.style.display = 'block';


    icon_7a.style.display = 'none';
    icon_7b.style.display = 'block';
});

icon_7a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';
    icon_5a.style.display = 'block';
    icon_5b.style.display = 'none';
    icon_6a.style.display = 'block';
    icon_6b.style.display = 'none';


    icon_7a.style.display = 'block';
    icon_7b.style.display = 'none';
});

icon_8a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';
    icon_5a.style.display = 'none';
    icon_5b.style.display = 'block';
    icon_6a.style.display = 'none';
    icon_6b.style.display = 'block';
    icon_7a.style.display = 'none';
    icon_7b.style.display = 'block';


    icon_8a.style.display = 'none';
    icon_8b.style.display = 'block';
});

icon_8a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';
    icon_5a.style.display = 'block';
    icon_5b.style.display = 'none';
    icon_6a.style.display = 'block';
    icon_6b.style.display = 'none';
    icon_7a.style.display = 'block';
    icon_7b.style.display = 'none';


    icon_8a.style.display = 'block';
    icon_8b.style.display = 'none';
});



// FIFTH STAR
starIcon_9a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';
    icon_5a.style.display = 'none';
    icon_5b.style.display = 'block';
    icon_6a.style.display = 'none';
    icon_6b.style.display = 'block';
    icon_7a.style.display = 'none';
    icon_7b.style.display = 'block';
    icon_8a.style.display = 'none';
    icon_8b.style.display = 'block';


    starIcon_9a.style.display = 'none';
    starIcon_9b.style.display = 'block';
});

starIcon_9a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';
    icon_5a.style.display = 'block';
    icon_5b.style.display = 'none';
    icon_6a.style.display = 'block';
    icon_6b.style.display = 'none';
    icon_7a.style.display = 'block';
    icon_7b.style.display = 'none';
    icon_8a.style.display = 'block';
    icon_8b.style.display = 'none';


    starIcon_9a.style.display = 'block';
    starIcon_9b.style.display = 'none';
});

starIcon_10a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'none';
    icon_1b.style.display = 'block';
    icon_2a.style.display = 'none';
    icon_2b.style.display = 'block';
    icon_3a.style.display = 'none';
    icon_3b.style.display = 'block';
    icon_4a.style.display = 'none';
    icon_4b.style.display = 'block';
    icon_5a.style.display = 'none';
    icon_5b.style.display = 'block';
    icon_6a.style.display = 'none';
    icon_6b.style.display = 'block';
    icon_7a.style.display = 'none';
    icon_7b.style.display = 'block';
    icon_8a.style.display = 'none';
    icon_8b.style.display = 'block';
    starIcon_9a.style.display = 'none';
    starIcon_9b.style.display = 'block';


    starIcon_10a.style.display = 'none';
    starIcon_10b.style.display = 'block';
});

starIcon_10a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    icon_1a.style.display = 'block';
    icon_1b.style.display = 'none';
    icon_2a.style.display = 'block';
    icon_2b.style.display = 'none';
    icon_3a.style.display = 'block';
    icon_3b.style.display = 'none';
    icon_4a.style.display = 'block';
    icon_4b.style.display = 'none';
    icon_5a.style.display = 'block';
    icon_5b.style.display = 'none';
    icon_6a.style.display = 'block';
    icon_6b.style.display = 'none';
    icon_7a.style.display = 'block';
    icon_7b.style.display = 'none';
    icon_8a.style.display = 'block';
    icon_8b.style.display = 'none';
    starIcon_9a.style.display = 'block';
    starIcon_9b.style.display = 'none';


    starIcon_10a.style.display = 'block';
    starIcon_10b.style.display = 'none';
});