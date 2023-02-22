'use strict';

// 1) When the right control is pressed, it triggers an event handler which DECREASES the translateX() 
      // value by a set amount. This then moves the slide gallery to the left. It should do this only 
      // if the translateX() value is greater than the minimum value set


// 2) When the left control is pressed, it triggers an event handler which INCREASES the translateX() 
      // value by a set amount. This then moves the slide gallery to the right. It should do this only 
      // if the translateX() value is less than the maximum value set


  const slideGallery = document.querySelector('.carousel__slide-gallery');
  const prevControl = document.querySelector('.carousel__prev');
  const nextControl = document.querySelector('.carousel__next');

  // Start and end values for slide gallery
  let translateX_MinValue = -60;
  let translateX_MaxValue = 20;
  
  // Current value for translateX() function
  let translateX_CurrentValue = 0;
  

  nextControl.addEventListener('click', function() {
    if (translateX_CurrentValue > translateX_MinValue) {
      translateX_CurrentValue -= 20;
      console.log(translateX_CurrentValue);
      slideGallery.style.transform = `translateX(${translateX_CurrentValue}rem)`;
    }
    
    // Hides right control when x-value is equal to minimum value
    if (translateX_CurrentValue === translateX_MinValue) {
      nextControl.style.display = 'none';
    }
    
    // Displays left contorl when x-value is less than maximum value
    if (translateX_CurrentValue < translateX_MaxValue) {
      prevControl.style.display = 'block';
    }
  });

  prevControl.addEventListener('click', function() {
    if (translateX_CurrentValue < translateX_MaxValue) {
      translateX_CurrentValue += 20;
      console.log(translateX_CurrentValue);
      slideGallery.style.transform = `translateX(${translateX_CurrentValue}rem)`;
    }
    
    // Displays right control when x-value is greater than minimum value
    if (translateX_CurrentValue > translateX_MinValue) {
      nextControl.style.display = 'block';
    }
    
    // Hides left control when x-value is equal to maximum value
    if (translateX_CurrentValue === translateX_MaxValue) {
      prevControl.style.display = 'none';
    }
  });