'use strict';

let carouselTwoSlideIndex = 1;
carouselTwoShowSlides(carouselTwoSlideIndex);

// Next/previous controls
function carouselTwoPlusSlides(n) {
  carouselTwoShowSlides(carouselTwoSlideIndex += n);
}

// Thumbnail image controls
function carouselTwoCurrentSlide(n) {
  carouselTwoShowSlides(carouselTwoSlideIndex = n);
}

function carouselTwoShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName('carousel-2__slides');
  let dots = document.getElementsByClassName('carousel-2__dot');
  if (n > slides.length) {carouselTwoSlideIndex = 1}
  if (n < 1) {carouselTwoSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel-2__active', '');
  }
  slides[carouselTwoSlideIndex-1].style.display = 'block';
  dots[carouselTwoSlideIndex-1].className += ' carousel-2__active';
}