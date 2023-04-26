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
        // nextControl.style.display = 'none';
        nextControl.style.cursor = 'not-allowed'; 
        prevControl.style.display = 'block';  // Shows previous control
        // console.log(currentSlidexIndexValue);
    }

    // Shows left control again when current slide index is above the value at which it was closed
    if (currentSlidexIndexValue > minIndexValue) {
        prevControl.style.display = 'block';
        // nextControl.style.display = 'block';  // Shows next control
        // console.log(currentSlidexIndexValue);
    }
});

prevControl.addEventListener('click', function() {
    // alert('Previous Control!');

    if (currentSlidexIndexValue > minIndexValue) {
        currentSlidexIndexValue -= 1;
        console.log(currentSlidexIndexValue);
        slides[currentSlidexIndexValue+1].style.display = 'none';  // Hides previously shown slide
        slides[currentSlidexIndexValue].style.display = 'block';
    }

    // Hides left control when current slide index is equal to minimum index value for NodeList
    if (currentSlidexIndexValue === minIndexValue) {
        // prevControl.style.display = 'none';
        prevControl.style.cursor = 'not-allowed';
        nextControl.style.display = 'block';  // Shows next control
        // console.log(currentSlidexIndexValue);
    }

    // Shows right control again when current slide index is beneath the value at which it was closed
    if (currentSlidexIndexValue < maxIndexValue - 1) {
        // prevControl.style.display = 'none';
        nextControl.style.display = 'block';  // Shows next control
        // console.log(currentSlidexIndexValue);
    }
});

for (let x = 0; x < indicators.length; x++) {
    indicators[x].addEventListener('click', function() {  // Function is executed whenever an indicator is pressed
        // alert('Indicators Working!');

        // NB: The x value is equivalent to the current slide index in NodeList

        // Hides right control when current x value is equal to index value of last item in NodeList
        if (x === maxIndexValue - 1) {
            // nextControl.style.display = 'none';
            nextControl.style.cursor = 'not-allowed';
            prevControl.style.display = 'block';  // Shows previous control
            console.log(x);
        }

        // Shows left control again when current x value is above the value at which it was closed
        if (x > minIndexValue) {
            prevControl.style.cursor = 'auto';  // Restores cursor to default
            prevControl.style.display = 'block';
            // nextControl.style.display = 'block';  // Shows next control
            console.log(x);
        }

        // Hides left control when current x value is equal to minimum index value for NodeList
        if (x === minIndexValue) {
            // prevControl.style.display = 'none';
            prevControl.style.cursor = 'not-allowed';
            nextControl.style.display = 'block';  // Shows next control
            console.log(x);
        }

        // Shows right control again when current x value is beneath the value at which it was closed
        if (x < maxIndexValue - 1) {
            // prevControl.style.display = 'none';
            nextControl.style.cursor = 'auto';  // Restores cursor to default
            nextControl.style.display = 'block';  // Shows next control
            console.log(x);
        }

        
        for (let x = 0; x < slides.length; x++) {
            if (slides[x].style.display === 'block') {  // Looks for current slide which is still visible...
                slides[x].style.display = 'none';  // It then hides it
            }
        }

        slides[x].style.display = 'block';  // Displays slide whose NodeList index value corresponds to indicator pressed 
    });
}

// TEST END