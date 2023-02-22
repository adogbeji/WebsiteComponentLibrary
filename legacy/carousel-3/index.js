'use strict';

let carouselThreeSlideIndex = 1;
carouselThreeShowSlides(carouselThreeSlideIndex);

// Next/previous controls
function carouselThreePlusSlides(n) {
  carouselThreeShowSlides(carouselThreeSlideIndex += n);
}

// Thumbnail image controls
function carouselThreeCurrentSlide(n) {
  carouselThreeShowSlides(carouselThreeSlideIndex = n);
}

function carouselThreeShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName('carousel-3__slides');
  let dots = document.getElementsByClassName('carousel-3__dot');
  if (n > slides.length) {carouselThreeSlideIndex = 1}
  if (n < 1) {carouselThreeSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel-3__active', '');
  }
  slides[carouselThreeSlideIndex-1].style.display = 'block';
  dots[carouselThreeSlideIndex-1].className += ' carousel-3__active';
}