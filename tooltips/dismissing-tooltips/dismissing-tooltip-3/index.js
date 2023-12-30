'use strict';


/* 1) Whenever the user hovers over .dismissing-tooltip__hover-content, the tooltip contents
      (.dismissing-tooltip__content) should be displayed
*/

/* 2) When the close icon (x) is pressed, the tooltip should disappear
*/

/* 3) However, when the user hovers over .dismissing-tooltip__hover-content again, the tooltip 
      contents (.dismissing-tooltip__content) should be displayed once again
*/


const tooltipHoverContent = document.querySelector('.dismissing-tooltip__hover-content');
const tooltipContent = document.querySelector('.dismissing-tooltip__content');
const tooltipCloseButton = document.querySelector('.dismissing-tooltip__closebtn');



tooltipCloseButton.addEventListener('click', function() {  // Hides tooltip when close icon (x) is pressed
      tooltipContent.classList.add('dismissing-tooltip__content--hide');      
});

tooltipHoverContent.addEventListener('mouseover', function() {
      if (tooltipContent.classList.contains('dismissing-tooltip__content--hide')) {
          tooltipContent.classList.remove('dismissing-tooltip__content--hide');
      }
});