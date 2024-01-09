'use strict';

/* 1) When the right control is pressed, it triggers an event handler that INCREASES the current
      slide index value by one. It should do this only if the current slide index is less than
      the maximum value. At the same time, the corresponding indicator should be also be highlighted
*/


/*  2) When the left control is pressed, it triggers an event handler that DECREASES the current
       slide index value by one. It should do this only if the current slide index is greater than
       the maximum value. At the same time, the corresponding indicator should be also be highlighted
*/


/*  3) When any of the indicators are pressed, they will display the corresponding slide. For this to work, you need 
       to use a nested for loop
*/

const slides = document.querySelectorAll('.carousel__slide');  // NodeList containing all slides
const indicators = document.querySelectorAll('.carousel__dot');  // NodeList containing all indicators
const prevControl = document.querySelector('.carousel__prev');
const nextControl = document.querySelector('.carousel__next');

// Minimum and Maximum index value for NodeList (above)
const minIndexValue = 0;
const maxIndexValue = slides.length;

// Current index value of slide being shown
let currentSlidexIndexValue = 0; 

slides[currentSlidexIndexValue].style.display = 'block';  // Displays first slide by default (required)
// indicators[currentSlidexIndexValue].style.backgroundColor = '#717171';  // Highlights indicator whose NodeList index value corresponds to slide being shown initially (optional)

nextControl.addEventListener('click', function() {
    // alert('Next Control!');

    if (currentSlidexIndexValue < maxIndexValue) {
        currentSlidexIndexValue += 1;
        console.log(currentSlidexIndexValue);  // Testing
        slides[currentSlidexIndexValue].style.display = 'block';
    }
    
    // Hides right control when current slide index is equal to index value of last item in NodeList
    if (currentSlidexIndexValue === maxIndexValue - 1) {
        nextControl.style.cursor = 'not-allowed'; 

        // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
        // nextControl.style.display = 'none';
        // prevControl.style.display = 'block';  // Shows previous control
        console.log(currentSlidexIndexValue);  // Testing
    }

    // Shows left control again when current slide index is above the value at which it was closed
    if (currentSlidexIndexValue > minIndexValue) {
        prevControl.style.cursor = 'initial';  // Restores cursor to normal state

        // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
        // prevControl.style.display = 'block';
        // nextControl.style.display = 'block';  // Shows next control
        console.log(currentSlidexIndexValue);
    }

    // Highlights corresponding indicator when next control is pressed
    for (let x = 0; x < indicators.length; x++) {
        if (x !== currentSlidexIndexValue) {  // Checks if NodeList index value of indicator is NOT equal to current slide index...
            indicators[x].style.backgroundColor = '#BBBBBB';  // In that case, the highlighting is removed
        }
    }

    indicators[currentSlidexIndexValue].style.backgroundColor = '#717171';  // Highlights indicator whose NodeList index value corresponds to slide being shown
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
        prevControl.style.cursor = 'not-allowed';
        
        // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
        // prevControl.style.display = 'none';
        // nextControl.style.display = 'block';  // Shows next control
        console.log(currentSlidexIndexValue);
    }

    // Shows right control again when current slide index is beneath the value at which it was closed
    if (currentSlidexIndexValue < maxIndexValue - 1) {
        nextControl.style.cursor = 'initial';  // Restores cursor to normal state
        
        // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
        // prevControl.style.display = 'none';
        // nextControl.style.display = 'block';  // Shows next control
        console.log(currentSlidexIndexValue);
    }

    // Highlights corresponding indicator when previous control is pressed
    for (let x = 0; x < indicators.length; x++) {
        if (x !== currentSlidexIndexValue) {  // Checks if NodeList index value of indicator is NOT equal to current slide index...
            indicators[x].style.backgroundColor = '#BBBBBB';  // In that case, the highlighting is removed
        }
    }

    indicators[currentSlidexIndexValue].style.backgroundColor = '#717171';  // Highlights indicator whose NodeList index value corresponds to slide being shown
});


for (let x = 0; x < indicators.length; x++) {
    indicators[x].addEventListener('click', function() {  // Function is executed whenever an indicator is pressed
        // alert('Indicators Working!');

        currentSlidexIndexValue = x;  // Sets current slide index to index value of indicator pressed

        // NB: The x value is equivalent to the current slide index in NodeList

        // Hides right control when current x value is equal to index value of last item in NodeList
        if (currentSlidexIndexValue === maxIndexValue - 1) {
            nextControl.style.cursor = 'not-allowed'; 

            // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
            // nextControl.style.display = 'none';
            // prevControl.style.display = 'block';  // Shows previous control
            console.log(currentSlidexIndexValue);
        }

        // Shows left control again when current x value is above the value at which it was closed
        if (currentSlidexIndexValue > minIndexValue) {
            prevControl.style.cursor = 'initial';  // Restores cursor to normal state

            // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
            // prevControl.style.display = 'block';
            // nextControl.style.display = 'block';  // Shows next control
            console.log(currentSlidexIndexValue);
        }

        // Hides left control when current x value is equal to minimum index value for NodeList
        if (currentSlidexIndexValue === minIndexValue) {
            prevControl.style.cursor = 'not-allowed';
        
            // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
            // prevControl.style.display = 'none';
            // nextControl.style.display = 'block';  // Shows next control
            console.log(currentSlidexIndexValue);
        }

        // Shows right control again when current a value is beneath the value at which it was closed
        if (currentSlidexIndexValue < maxIndexValue - 1) {
            nextControl.style.cursor = 'initial';  // Restores cursor to normal state
        
            // USE THIS CODE IF YOU WANT TO HIDE CONTROLS
            // prevControl.style.display = 'none';
            // nextControl.style.display = 'block';  // Shows next control
            console.log(currentSlidexIndexValue);
        }

        
        for (let x = 0; x < slides.length; x++) {
            if (slides[x].style.display === 'block') {  // Looks for current slide which is still visible...
                slides[x].style.display = 'none';  // It then hides it
            }
        }

        // slides[x].style.display = 'block';  // Displays slide whose NodeList index value corresponds to indicator pressed 
        slides[currentSlidexIndexValue].style.display = 'block';  // Displays slide whose NodeList index value corresponds to indicator pressed 


        // Highlights corresponding indicator when previous control is pressed
        for (let x = 0; x < indicators.length; x++) {
            if (x !== currentSlidexIndexValue) {  // Checks if NodeList index value of indicator is NOT equal to current slide index...
                indicators[x].style.backgroundColor = '#BBBBBB';  // In that case, the highlighting is removed
            }
        }

        indicators[currentSlidexIndexValue].style.backgroundColor = '#717171';  // Highlights indicator whose NodeList index value corresponds to slide being shown
    });
}