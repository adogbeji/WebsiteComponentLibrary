'use strict';

// let carouselSlideIndex = 1;
// carouselShowSlides(carouselSlideIndex);

// // Next/previous controls
// function carouselPlusSlides(n) {
//   carouselShowSlides(carouselSlideIndex += n);
// }

// // Thumbnail image controls
// function carouselCurrentSlide(n) {
//   carouselShowSlides(carouselSlideIndex = n);
// }

// function carouselShowSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName('carousel__slides');
//   let dots = document.getElementsByClassName('carousel__dot');
//   if (n > slides.length) {carouselSlideIndex = 1}
//   if (n < 1) {carouselSlideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(' carousel__active', '');
//   }
//   slides[carouselSlideIndex-1].style.display = 'block';
//   dots[carouselSlideIndex-1].className += ' carousel-3__active';
// }



// TEST START

const slides = document.querySelectorAll('.carousel__slides');  // NodeList containing all slides
const indicators = document.querySelectorAll('.carousel__dot');  // NodeList containing all indicators
const prevControl = document.querySelector('.carousel__prev');
const nextControl = document.querySelector('.carousel__next');

// Minimum and Maximum index value for NodeList (above)
const minIndexValue = 0;
const maxIndexValue = slides.length;

// Current index value of slide being shown
let currentSlidexIndexValue = 0; 

slides[currentSlidexIndexValue].style.display = 'block';

nextControl.addEventListener('click', function() {
    // alert('Next Control!');

    if (currentSlidexIndexValue < maxIndexValue) {
        currentSlidexIndexValue += 1;
        console.log(currentSlidexIndexValue);
        slides[currentSlidexIndexValue].style.display = 'block';
    }
    
    // Hides right control when current slide index is equal to index value of last item in NodeList
    if (currentSlidexIndexValue === maxIndexValue - 1) {
        nextControl.style.display = 'none';
        // console.log(currentSlidexIndexValue);
    }
});

prevControl.addEventListener('click', function() {
    // alert('Previous Control!');

    if (currentSlidexIndexValue > minIndexValue) {
        currentSlidexIndexValue -= 1;
        console.log(currentSlidexIndexValue);
        slides[currentSlidexIndexValue].style.display = 'block';
    }
});

for (let x = 0; x < indicators.length; x++) {
    indicators[x].addEventListener('click', function() {
        alert('Indicators Working!');
    });
}

// TEST END