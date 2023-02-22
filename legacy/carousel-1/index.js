'use strict';

let carouselOneSlideIndex = 1;
carouselOneShowSlides(carouselOneSlideIndex);

// Next/previous controls
function carouselOnePlusSlides(n) {
  carouselOneShowSlides(carouselOneSlideIndex += n);
}

// Thumbnail image controls
function carouselOneCurrentSlide(n) {
  carouselOneShowSlides(carouselOneSlideIndex = n);
}

function carouselOneShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName('carousel-1__slides');
  let dots = document.getElementsByClassName('carousel-1__dot');
  if (n > slides.length) {carouselOneSlideIndex = 1}
  if (n < 1) {carouselOneSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel-1__active', '');
  }
  slides[carouselOneSlideIndex-1].style.display = 'block';
  dots[carouselOneSlideIndex-1].className += ' carousel-1__active';
}