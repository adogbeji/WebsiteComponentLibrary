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
const courseReviewModal = document.querySelector('.course-accordion__header-modal-2');
// const pageBody = document.querySelector('._9714');  // Testing


courseReviewButton.addEventListener('click', function() {
    courseReviewModal.classList.add('course-accordion__header-modal-2-visible');
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
    courseReviewModal.classList.remove('course-accordion__header-modal-2-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
});

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
    if (e.target === courseReviewModal) {
        courseReviewModal.classList.remove('course-accordion__header-modal-2-visible');
        pageBody.classList.remove('_9714--remove-scrollbar');
    }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        courseReviewModal.classList.remove('course-accordion__header-modal-2-visible');
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


const ratingText = document.querySelector('.course-accordion__header-modal-2-text-2');
const initialStars = document.querySelector('.course-accordion__header-modal-2-icon-box-1');
const firstStarRating = document.querySelector('.course-accordion__header-modal-2-icon-box-2');

starIcon_1a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';

    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    
    // Rating Comment
    ratingText.textContent = 'Awful, not what I expected at all';
});

starIcon_1a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // OTHER HALF
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';

    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    
    // Rating Comment
    ratingText.textContent = 'Select Rating';
});


starIcon_2a.addEventListener('mouseover', function() {
    // alert('Second Half!');
    
    // OTHER HALF
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';

    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';

    // Rating Comment
    ratingText.textContent = 'Awful, not what I expected at all';
});

starIcon_2a.addEventListener('mouseout', function() {
    // alert('Second Half!');

    // OTHER HALF
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';

    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';

    // Rating Comment
    ratingText.textContent = 'Select Rating';
});


starIcon_3a.addEventListener('mouseover', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    starIcon_1a.style.display = 'none';
    starIcon_1b.style.display = 'block';
    starIcon_2a.style.display = 'none';
    starIcon_2b.style.display = 'block';

    starIcon_3a.style.display = 'none';
    starIcon_3b.style.display = 'block';

    // Rating Comment
    ratingText.textContent = 'Awful/Poor';
});

starIcon_3a.addEventListener('mouseout', function() {
    // alert('First Half!');
    // firstStarRating.classList.add('course-accordion__header-modal-2-icon-box-2--show');
    // initialStars.classList.add('course-accordion__header-modal-2-icon-box-1--hide');
    
    // EARLIER STARS
    starIcon_1a.style.display = 'block';
    starIcon_1b.style.display = 'none';
    starIcon_2a.style.display = 'block';
    starIcon_2b.style.display = 'none';

    starIcon_3a.style.display = 'block';
    starIcon_3b.style.display = 'none';

    // Rating Comment
    ratingText.textContent = 'Select Rating';
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
    ratingText.textContent = 'Poor, pretty disappointed';
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
    ratingText.textContent = 'Select Rating';
});


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
    ratingText.textContent = 'Poor/Average';
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
    ratingText.textContent = 'Select Rating';
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
    ratingText.textContent = 'Average, could be better';
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
    ratingText.textContent = 'Select Rating';
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
    ratingText.textContent = 'Average/Good';
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
    ratingText.textContent = 'Select Rating';
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
    ratingText.textContent = 'Good, what I expected';
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
    ratingText.textContent = 'Select Rating';
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
    ratingText.textContent = 'Good/Amazing';
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
    ratingText.textContent = 'Select Rating';
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
    ratingText.textContent = 'Amazing, above expectations';
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
    ratingText.textContent = 'Select Rating';
});


// COURSE REVIEW MODAL #2
const reviewBackButton_1 = document.querySelector('.course-accordion__header-modal-3-button-1');
// const courseReviewButton = document.querySelector('.course-accordion__header-rating-button');
const courseReviewModal_2 = document.querySelector('.course-accordion__header-modal-3');
// const pageBody = document.querySelector('._9714');  // Testing


reviewBackButton_1.addEventListener('click', function() {
    // Closes current modal (Review Modal 1)
    courseReviewModal_2.classList.remove('course-accordion__header-modal-3-visible');
    pageBody.classList.remove('_9714--remove-scrollbar');
    
    // Opens previous modal (Review Modal 1)
    courseReviewModal.classList.add('course-accordion__header-modal-2-visible');
    pageBody.classList.add('_9714--remove-scrollbar');  // Testing
    // pageBody.style.overflowY = 'hidden';
});


// Closes modal (3 possible ways)

// 1) By clicking on the close icon (x) inside the modal:
const courseReviewModalCloseIcon_2 = document.querySelector('.course-accordion__header-modal-3-closebtn');


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
