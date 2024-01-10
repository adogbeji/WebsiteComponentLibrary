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



// COURSE REVIEW MODAL #1
const courseReviewButton = document.querySelector('.course-accordion__header-rating-button');
const courseReviewModal_1 = document.querySelector('.course-accordion__header-modal-2');
// const pageBody = document.querySelector('._9714');  // Testing


courseReviewButton.addEventListener('click', function() {
    courseReviewModal_1.classList.add('course-accordion__header-modal-2-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// Closes modal (3 possible ways)

// 1) By clicking on the close icon (x) inside the modal:
const courseReviewModalCloseIcon = document.querySelector('.course-accordion__header-modal-2-closebtn');


courseReviewModalCloseIcon.addEventListener('click', function() {
    // if (courseReviewModal.classList.contains('course-accordion__header-modal-2-visible')) {
    //     courseReviewModal.classList.remove('course-accordion__header-modal-2-visible');
    //     pageBody.classList.remove('_9714--remove-scrollbar');
    // }
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === courseReviewModal_1) {
        courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
});


// Star #1
const starIcon_1a = document.querySelector('.course-accordion__header-modal-2-icon-1a');
const starIcon_1b = document.querySelector('.course-accordion__header-modal-2-icon-1b');
const starIcon_2a = document.querySelector('.course-accordion__header-modal-2-icon-2a');
const starIcon_2b = document.querySelector('.course-accordion__header-modal-2-icon-2b');

// Star #2
const starIcon_3a = document.querySelector('.course-accordion__header-modal-2-icon-3a');
const starIcon_3b = document.querySelector('.course-accordion__header-modal-2-icon-3b');
const starIcon_4a = document.querySelector('.course-accordion__header-modal-2-icon-4a');
const starIcon_4b = document.querySelector('.course-accordion__header-modal-2-icon-4b');

// Star #3
const starIcon_5a = document.querySelector('.course-accordion__header-modal-2-icon-5a');
const starIcon_5b = document.querySelector('.course-accordion__header-modal-2-icon-5b');
const starIcon_6a = document.querySelector('.course-accordion__header-modal-2-icon-6a');
const starIcon_6b = document.querySelector('.course-accordion__header-modal-2-icon-6b');

// Star #4
const starIcon_7a = document.querySelector('.course-accordion__header-modal-2-icon-7a');
const starIcon_7b = document.querySelector('.course-accordion__header-modal-2-icon-7b');
const starIcon_8a = document.querySelector('.course-accordion__header-modal-2-icon-8a');
const starIcon_8b = document.querySelector('.course-accordion__header-modal-2-icon-8b');

// Star #5
const starIcon_9a = document.querySelector('.course-accordion__header-modal-2-icon-9a');
const starIcon_9b = document.querySelector('.course-accordion__header-modal-2-icon-9b');
const starIcon_10a = document.querySelector('.course-accordion__header-modal-2-icon-10a');
const starIcon_10b = document.querySelector('.course-accordion__header-modal-2-icon-10b');


const ratingText_1 = document.querySelector('.course-accordion__header-modal-2-text-2');
const initialStars_1 = document.querySelector('.course-accordion__header-modal-2-icon-box-1');
const firstStarRating_1 = document.querySelector('.course-accordion__header-modal-2-icon-box-2');

// FIRST STAR
starIcon_1a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating_1.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars_1.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';

    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    
    // Rating Comment
    ratingText_1.textContent = 'Awful, not what I expected at all';
});

starIcon_1a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating_1.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars_1.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';

    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    
    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_1a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_1b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_2a.addEventListener('mouseover', function() {
    // alert('Second Half!');
    
    // OTHER HALF
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';

    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Awful, not what I expected at all';
});

starIcon_2a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // OTHER HALF
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';

    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_2a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_2b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// SECOND STAR
starIcon_3a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating_1.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars_1.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';

    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Awful/Poor';
});

starIcon_3a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating_1.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars_1.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';

    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_3a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_3b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_4a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';


    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Poor, pretty disappointed';
});

starIcon_4a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';

    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_4a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_4b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// THIRD STAR
starIcon_5a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';
    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';


    starIcon_5a.style.display = 'none';
    starIcon_5b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Poor/Average';
});

starIcon_5a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';

    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_5a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_5b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_6a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';
    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';
    starIcon_5a.style.display = 'none';
    starIcon_5b.style.display = 'block';


    starIcon_6a.style.display = 'none';
    starIcon_6b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Average, could be better';
});

starIcon_6a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';
    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';


    starIcon_6a.style.display = 'block';
    starIcon_6b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_6a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_6b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// FOURTH STAR
starIcon_7a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';
    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';
    starIcon_5a.style.display = 'none';
    starIcon_5b.style.display = 'block';
    starIcon_6a.style.display = 'none';
    starIcon_6b.style.display = 'block';


    starIcon_7a.style.display = 'none';
    starIcon_7b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Average/Good';
});

starIcon_7a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';
    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';
    starIcon_6a.style.display = 'block';
    starIcon_6b.style.display = 'none';


    starIcon_7a.style.display = 'block';
    starIcon_7b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_7a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_7b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_8a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';
    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';
    starIcon_5a.style.display = 'none';
    starIcon_5b.style.display = 'block';
    starIcon_6a.style.display = 'none';
    starIcon_6b.style.display = 'block';
    starIcon_7a.style.display = 'none';
    starIcon_7b.style.display = 'block';


    starIcon_8a.style.display = 'none';
    starIcon_8b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Good, what I expected';
});

starIcon_8a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';
    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';
    starIcon_6a.style.display = 'block';
    starIcon_6b.style.display = 'none';
    starIcon_7a.style.display = 'block';
    starIcon_7b.style.display = 'none';


    starIcon_8a.style.display = 'block';
    starIcon_8b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_8a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_8b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// FIFTH STAR
starIcon_9a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';
    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';
    starIcon_5a.style.display = 'none';
    starIcon_5b.style.display = 'block';
    starIcon_6a.style.display = 'none';
    starIcon_6b.style.display = 'block';
    starIcon_7a.style.display = 'none';
    starIcon_7b.style.display = 'block';
    starIcon_8a.style.display = 'none';
    starIcon_8b.style.display = 'block';


    starIcon_9a.style.display = 'none';
    starIcon_9b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Good/Amazing';
});

starIcon_9a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';
    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';
    starIcon_6a.style.display = 'block';
    starIcon_6b.style.display = 'none';
    starIcon_7a.style.display = 'block';
    starIcon_7b.style.display = 'none';
    starIcon_8a.style.display = 'block';
    starIcon_8b.style.display = 'none';


    starIcon_9a.style.display = 'block';
    starIcon_9b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_9a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_9b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_10a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';
    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';
    starIcon_4a.style.display = 'none';
    starIcon_4b.style.display = 'block';
    starIcon_5a.style.display = 'none';
    starIcon_5b.style.display = 'block';
    starIcon_6a.style.display = 'none';
    starIcon_6b.style.display = 'block';
    starIcon_7a.style.display = 'none';
    starIcon_7b.style.display = 'block';
    starIcon_8a.style.display = 'none';
    starIcon_8b.style.display = 'block';
    starIcon_9a.style.display = 'none';
    starIcon_9b.style.display = 'block';


    starIcon_10a.style.display = 'none';
    starIcon_10b.style.display = 'block';

    // Rating Comment
    ratingText_1.textContent = 'Amazing, above expectations';
});

starIcon_10a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';
    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';
    starIcon_6a.style.display = 'block';
    starIcon_6b.style.display = 'none';
    starIcon_7a.style.display = 'block';
    starIcon_7b.style.display = 'none';
    starIcon_8a.style.display = 'block';
    starIcon_8b.style.display = 'none';
    starIcon_9a.style.display = 'block';
    starIcon_9b.style.display = 'none';


    starIcon_10a.style.display = 'block';
    starIcon_10b.style.display = 'none';

    // Rating Comment
    ratingText_1.textContent = 'Select Rating';
});

starIcon_10a.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

starIcon_10b.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_1.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens next modal (Review Modal 2)
    courseReviewModal_2.classList.add('course-accordion__header-modal-3-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// COURSE REVIEW MODAL #2
const reviewBackButton_1 = document.querySelector('.course-accordion__header-modal-3-button-1');
const reviewBackButton_2 = document.querySelector('.course-accordion__header-modal-3-button-2');
// const courseReviewButton = document.querySelector('.course-accordion__header-rating-button');
const courseReviewModal_2 = document.querySelector('.course-accordion__header-modal-3');
const courseReviewModal_2Page_1 = document.querySelector('.course-accordion__header-modal-3-content-1');
const courseReviewModal_2Page_2 = document.querySelector('.course-accordion__header-modal-3-content-2');

const courseReviewModal_2Page_1SaveButton = document.querySelector('.course-accordion__header-modal-3-form-button');
const courseReviewModal_2Page_2SkipButton = document.querySelector('.course-accordion__header-modal-3-review-editor-survey-form-button-2');
const courseReviewModal_2Page_2SaveButton = document.querySelector('.course-accordion__header-modal-3-review-editor-survey-form-button-3');
// const pageBody = document.querySelector('._9714');  // Testing


reviewBackButton_1.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens previous modal (Review Modal 1)
    courseReviewModal_1.classList.add('course-accordion__header-modal-2-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});

reviewBackButton_2.addEventListener('click', function() {
    // Closes current page (Review Modal 2)
    courseReviewModal_2Page_2.classList.add('course-accordion__header-modal-3-content-2--hide');
    
    // Opens previous page (Review Modal 2)
    courseReviewModal_2Page_1.classList.add('course-accordion__header-modal-3-content-1--show');
});

courseReviewModal_2Page_1SaveButton.addEventListener('click', function() {
    // Closes current page (Review Modal 2)
    
    // Opens next page (Review Modal 2)
});

courseReviewModal_2Page_2SkipButton.addEventListener('click', function() {
    // Closes current page (Review Modal 2)
    
    // Opens next page (Review Modal 2)
});

courseReviewModal_2Page_2SaveButton.addEventListener('click', function() {
    // Closes current page (Review Modal 2)
    
    // Opens next page (Review Modal 2)
});


// Closes modal (3 possible ways) - Page #1

// 1) By clicking on the close icon (x) inside the modal:
const courseReviewModalCloseIcon_2 = document.querySelector('.course-accordion__header-modal-3-closebtn-1');
// const courseReviewModalCloseIcon_3 = document.querySelector('.course-accordion__header-modal-3-closebtn-2');


courseReviewModalCloseIcon_2.addEventListener('click', function() {
    // if (courseReviewModal.classList.contains('course-accordion__header-modal-2-visible')) {
    //     courseReviewModal.classList.remove('course-accordion__header-modal-2-visible');
    //     pageBody.classList.remove('_9714--remove-scrollbar');
    // }
    courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === courseReviewModal_2) {
        courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
});


// Closes modal (3 possible ways) - Page #2
// 1) By clicking on the close icon (x) inside the modal:
const courseReviewModalCloseIcon_3 = document.querySelector('.course-accordion__header-modal-3-closebtn-2');


courseReviewModalCloseIcon_3.addEventListener('click', function() {
    // if (courseReviewModal.classList.contains('course-accordion__header-modal-2-visible')) {
    //     courseReviewModal.classList.remove('course-accordion__header-modal-2-visible');
    //     pageBody.classList.remove('_9714--remove-scrollbar');
    // }
    courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === courseReviewModal_2) {
        courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
});


// Star #1
// const starIcon_1a = document.querySelector('.course-accordion__header-modal-2-icon-1a');
// const starIcon_1b = document.querySelector('.course-accordion__header-modal-2-icon-1b');
// const starIcon_2a = document.querySelector('.course-accordion__header-modal-2-icon-2a');
// const starIcon_2b = document.querySelector('.course-accordion__header-modal-2-icon-2b');
const starIcon_11a = document.querySelector('.course-accordion__header-modal-3-icon-1a');
const starIcon_11b = document.querySelector('.course-accordion__header-modal-3-icon-1b');
const starIcon_12a = document.querySelector('.course-accordion__header-modal-3-icon-2a');
const starIcon_12b = document.querySelector('.course-accordion__header-modal-3-icon-2b');

// Star #2
// const starIcon_3a = document.querySelector('.course-accordion__header-modal-2-icon-3a');
// const starIcon_3b = document.querySelector('.course-accordion__header-modal-2-icon-3b');
// const starIcon_4a = document.querySelector('.course-accordion__header-modal-2-icon-4a');
// const starIcon_4b = document.querySelector('.course-accordion__header-modal-2-icon-4b');
const starIcon_13a = document.querySelector('.course-accordion__header-modal-3-icon-3a');
const starIcon_13b = document.querySelector('.course-accordion__header-modal-3-icon-3b');
const starIcon_14a = document.querySelector('.course-accordion__header-modal-3-icon-4a');
const starIcon_14b = document.querySelector('.course-accordion__header-modal-3-icon-4b');

// Star #3
// const starIcon_5a = document.querySelector('.course-accordion__header-modal-2-icon-5a');
// const starIcon_5b = document.querySelector('.course-accordion__header-modal-2-icon-5b');
// const starIcon_6a = document.querySelector('.course-accordion__header-modal-2-icon-6a');
// const starIcon_6b = document.querySelector('.course-accordion__header-modal-2-icon-6b');
const starIcon_15a = document.querySelector('.course-accordion__header-modal-3-icon-5a');
const starIcon_15b = document.querySelector('.course-accordion__header-modal-3-icon-5b');
const starIcon_16a = document.querySelector('.course-accordion__header-modal-3-icon-6a');
const starIcon_16b = document.querySelector('.course-accordion__header-modal-3-icon-6b');

// Star #4
// const starIcon_7a = document.querySelector('.course-accordion__header-modal-2-icon-7a');
// const starIcon_7b = document.querySelector('.course-accordion__header-modal-2-icon-7b');
// const starIcon_8a = document.querySelector('.course-accordion__header-modal-2-icon-8a');
// const starIcon_8b = document.querySelector('.course-accordion__header-modal-2-icon-8b');
const starIcon_17a = document.querySelector('.course-accordion__header-modal-3-icon-7a');
const starIcon_17b = document.querySelector('.course-accordion__header-modal-3-icon-7b');
const starIcon_18a = document.querySelector('.course-accordion__header-modal-3-icon-8a');
const starIcon_18b = document.querySelector('.course-accordion__header-modal-3-icon-8b');

// Star #5
// const starIcon_9a = document.querySelector('.course-accordion__header-modal-2-icon-9a');
// const starIcon_9b = document.querySelector('.course-accordion__header-modal-2-icon-9b');
// const starIcon_10a = document.querySelector('.course-accordion__header-modal-2-icon-10a');
// const starIcon_10b = document.querySelector('.course-accordion__header-modal-2-icon-10b');
const starIcon_19a = document.querySelector('.course-accordion__header-modal-3-icon-9a');
const starIcon_19b = document.querySelector('.course-accordion__header-modal-3-icon-9b');
const starIcon_20a = document.querySelector('.course-accordion__header-modal-3-icon-10a');
const starIcon_20b = document.querySelector('.course-accordion__header-modal-3-icon-10b');


const ratingText_2 = document.querySelector('.course-accordion__header-modal-3-text-2');
const initialStars_2 = document.querySelector('.course-accordion__header-modal-3-icon-box-1');
const firstStarRating_2 = document.querySelector('.course-accordion__header-modal-3-icon-box-2');

// FIRST STAR
starIcon_11a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';

    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    
    // Rating Comment
    ratingText_2.textContent = 'Awful, not what I expected at all';
});

starIcon_11a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';

    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    
    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});


starIcon_12a.addEventListener('mouseover', function() {
    // alert('Second Half!');
    
    // OTHER HALF
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';

    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Awful, not what I expected at all';
});

starIcon_12a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // OTHER HALF
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';

    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});


// SECOND STAR
starIcon_13a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';

    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Awful/Poor';
});

starIcon_13a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';

    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});

starIcon_14a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';


    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Poor, pretty disappointed';
});

starIcon_14a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';
    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';

    starIcon_14a.style.display = 'block';
    starIcon_14b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});


// THIRD STAR
starIcon_15a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';
    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';


    starIcon_15a.style.display = 'none';
    starIcon_15b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Poor/Average';
});

starIcon_15a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';
    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';
    starIcon_14a.style.display = 'block';
    starIcon_14b.style.display = 'none';

    starIcon_15a.style.display = 'block';
    starIcon_15b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});

starIcon_16a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';
    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';
    starIcon_15a.style.display = 'none';
    starIcon_15b.style.display = 'block';


    starIcon_16a.style.display = 'none';
    starIcon_16b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Average, could be better';
});

starIcon_16a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';
    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';
    starIcon_14a.style.display = 'block';
    starIcon_14b.style.display = 'none';
    starIcon_15a.style.display = 'block';
    starIcon_15b.style.display = 'none';


    starIcon_16a.style.display = 'block';
    starIcon_16b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});


// FOURTH STAR
starIcon_17a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';
    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';
    starIcon_15a.style.display = 'none';
    starIcon_15b.style.display = 'block';
    starIcon_16a.style.display = 'none';
    starIcon_16b.style.display = 'block';


    starIcon_17a.style.display = 'none';
    starIcon_17b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Average/Good';
});

starIcon_17a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';
    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';
    starIcon_14a.style.display = 'block';
    starIcon_14b.style.display = 'none';
    starIcon_15a.style.display = 'block';
    starIcon_15b.style.display = 'none';
    starIcon_16a.style.display = 'block';
    starIcon_16b.style.display = 'none';


    starIcon_17a.style.display = 'block';
    starIcon_17b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});

starIcon_18a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';
    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';
    starIcon_15a.style.display = 'none';
    starIcon_15b.style.display = 'block';
    starIcon_16a.style.display = 'none';
    starIcon_16b.style.display = 'block';
    starIcon_17a.style.display = 'none';
    starIcon_17b.style.display = 'block';


    starIcon_18a.style.display = 'none';
    starIcon_18b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Good, what I expected';
});

starIcon_18a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';
    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';
    starIcon_14a.style.display = 'block';
    starIcon_14b.style.display = 'none';
    starIcon_15a.style.display = 'block';
    starIcon_15b.style.display = 'none';
    starIcon_16a.style.display = 'block';
    starIcon_16b.style.display = 'none';
    starIcon_17a.style.display = 'block';
    starIcon_17b.style.display = 'none';


    starIcon_18a.style.display = 'block';
    starIcon_18b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});


// FIFTH STAR
starIcon_19a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';
    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';
    starIcon_15a.style.display = 'none';
    starIcon_15b.style.display = 'block';
    starIcon_16a.style.display = 'none';
    starIcon_16b.style.display = 'block';
    starIcon_17a.style.display = 'none';
    starIcon_17b.style.display = 'block';
    starIcon_18a.style.display = 'none';
    starIcon_18b.style.display = 'block';


    starIcon_19a.style.display = 'none';
    starIcon_19b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Good/Amazing';
});

starIcon_19a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'block';
    starIcon_11b.style.display = 'none';
    starIcon_12a.style.display = 'block';
    starIcon_12b.style.display = 'none';
    starIcon_13a.style.display = 'block';
    starIcon_13b.style.display = 'none';
    starIcon_14a.style.display = 'block';
    starIcon_14b.style.display = 'none';
    starIcon_15a.style.display = 'block';
    starIcon_15b.style.display = 'none';
    starIcon_16a.style.display = 'block';
    starIcon_16b.style.display = 'none';
    starIcon_17a.style.display = 'block';
    starIcon_17b.style.display = 'none';
    starIcon_18a.style.display = 'block';
    starIcon_18b.style.display = 'none';


    starIcon_19a.style.display = 'block';
    starIcon_19b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});

starIcon_20a.addEventListener('mouseover', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_11a.style.display = 'none';
    starIcon_11b.style.display = 'block';
    starIcon_12a.style.display = 'none';
    starIcon_12b.style.display = 'block';
    starIcon_13a.style.display = 'none';
    starIcon_13b.style.display = 'block';
    starIcon_14a.style.display = 'none';
    starIcon_14b.style.display = 'block';
    starIcon_15a.style.display = 'none';
    starIcon_15b.style.display = 'block';
    starIcon_16a.style.display = 'none';
    starIcon_16b.style.display = 'block';
    starIcon_17a.style.display = 'none';
    starIcon_17b.style.display = 'block';
    starIcon_18a.style.display = 'none';
    starIcon_18b.style.display = 'block';
    starIcon_19a.style.display = 'none';
    starIcon_19b.style.display = 'block';


    starIcon_20a.style.display = 'none';
    starIcon_20b.style.display = 'block';

    // Rating Comment
    ratingText_2.textContent = 'Amazing, above expectations';
});

starIcon_20a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';
    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';
    starIcon_4a.style.display = 'block';
    starIcon_4b.style.display = 'none';
    starIcon_5a.style.display = 'block';
    starIcon_5b.style.display = 'none';
    starIcon_6a.style.display = 'block';
    starIcon_6b.style.display = 'none';
    starIcon_7a.style.display = 'block';
    starIcon_7b.style.display = 'none';
    starIcon_8a.style.display = 'block';
    starIcon_8b.style.display = 'none';
    starIcon_9a.style.display = 'block';
    starIcon_9b.style.display = 'none';


    starIcon_20a.style.display = 'block';
    starIcon_20b.style.display = 'none';

    // Rating Comment
    ratingText_2.textContent = 'Select Rating';
});


// Review Editor Questionaire
const labelButtons = document.querySelectorAll('.course-accordion__header-modal-3-review-editor-survey-form-radio-button-label');
const labelButtonIcons = document.querySelectorAll('.course-accordion__header-modal-3-review-editor-survey-form-radio-button-label-text-icon');

const q1Buttons = [labelButtons[0], labelButtons[1], labelButtons[2]];
const q2Buttons = [labelButtons[3], labelButtons[4], labelButtons[5]];
const q3Buttons = [labelButtons[6], labelButtons[7], labelButtons[8]];
const q4Buttons = [labelButtons[9], labelButtons[10], labelButtons[11]];
const q5Buttons = [labelButtons[12], labelButtons[13], labelButtons[14]];
const q6Buttons = [labelButtons[15], labelButtons[16], labelButtons[17]];

const q1ButtonIcons = [labelButtonIcons[0], labelButtonIcons[1], labelButtonIcons[2]];
const q2ButtonIcons = [labelButtonIcons[3], labelButtonIcons[4], labelButtonIcons[5]];
const q3ButtonIcons = [labelButtonIcons[6], labelButtonIcons[7], labelButtonIcons[8]];
const q4ButtonIcons = [labelButtonIcons[9], labelButtonIcons[10], labelButtonIcons[11]];
const q5ButtonIcons = [labelButtonIcons[12], labelButtonIcons[13], labelButtonIcons[14]];
const q6ButtonIcons = [labelButtonIcons[15], labelButtonIcons[16], labelButtonIcons[17]];

for (let x = 0; x < q1Buttons.length; x++) {
    q1Buttons[x].addEventListener('click', function() {
        // console.log('Pressed!');
        q1ButtonIcons[x].classList.add('course-accordion__header-modal-3-review-editor-survey-form-radio-button-label-text-icon--show');

        // if (!q1ButtonIcons[x].classList.contains('course-accordion__header-modal-3-review-editor-survey-form-radio-button-label-text-icon--show')) {
        //     q1ButtonIcons[x].classList.add('course-accordion__header-modal-3-review-editor-survey-form-radio-button-label-text-icon--show')
        // }

        
        // for (let x = 0; x < q1ButtonIcons.length; x++) {
        //     if (q1ButtonIcons[x].style.display === 'block') {  // Looks for current icon which is still visible...
        //         q1ButtonIcons[x].style.display = 'none';  // It then hides it
        //     } 
        // }
    });
}