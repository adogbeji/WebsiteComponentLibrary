'use strict';


/* 1) Initially, all the tabs are hidden except one. This is always open by default when the page 
      loads
*/
   
/* 2) However, when a button is pressed, the corresponding tab opens and the default tab closes
*/

/*     3) When another button is pressed, the corresponding tab opens and the previously-opened one
      closes
*/



const tabButtons = document.querySelectorAll('.tab__button');  // NodeList containing all tab buttons
const tabs = document.querySelectorAll('.tab__content');  // NodeList containing all tabs


// The first tab is shown by default when page loads
tabs[0].classList.add('tab__content--show');

// The first tab is highlighed by default when page loads (optional)
tabButtons[0].classList.add('tab__button--darken');  // Highlights corresponding tab


for (let x = 0; x < tabButtons.length; x++) {
    tabButtons[x].addEventListener('click', function() {
        // Hides previously opened tab
        for (let x = 0; x < tabs.length; x++) {
            if (tabs[x].classList.contains('tab__content--show')) {  // Checks if any of the tabs are already open ...
                tabs[x].classList.remove('tab__content--show'); // In that case, the modifier class is removed
            }
        }
      
        if (!tabs[x].classList.contains('tab__content--show')) {  // Checks if corresponding tab doesn't contain modifier class
            tabs[x].classList.add('tab__content--show');  // Opens corresponding tab
        }


        // for (let x = 0; x < tabs.length; x++) {
        //     if (tabs[x].style.display === 'block') {  // Looks for current slide which is still visible...
        //         tabs[x].style.display = 'none';  // It then hides it
        //     }
        // }


        // Highlighting currently opened tab (optional)
        for (let x = 0; x < tabButtons.length; x++) {
            if (tabButtons[x].classList.contains('tab__button--darken')) {  // Checks if any of the tabs are already highlighted ...
                tabButtons[x].classList.remove('tab__button--darken'); // In that case, the modifier class is removed
            }
        }

        tabButtons[x].classList.add('tab__button--darken');  // Highlights corresponding tab
      
        // if (!tabButtons[x].classList.contains('tab__button--darken')) {  // Checks if corresponding tab doesn't contain modifier class
        //     tabButtons[x].classList.add('tab__button--darken');  // Highlights corresponding tab
        // }
    });
}