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


// VIDEO SECTION
const playIcon_1 = document.querySelector('.course-accordion__video-icon-box-1');
const playIcon_2 = document.querySelector('.course-accordion__video-lesson-control-bar-tooltip--play-icon');
const pauseIcon_1 = document.querySelector('.course-accordion__video-icon-box-2');
const pauseIcon_2 = document.querySelector('.course-accordion__video-lesson-control-bar-tooltip--pause-icon');


playIcon_1.addEventListener('click', function() {
    playIcon_1.classList.add('course-accordion__video-icon-box-1--hide');  // Hides play icon (z-index: initial)
    pauseIcon_1.classList.add('course-accordion__video-icon-box-2--show');  // Shows pause icon (x-index: 12)
});

pauseIcon_1.addEventListener('click', function() {
    playIcon_1.classList.remove('course-accordion__video-icon-box-1--hide');  // Shows play icon (z-index: 12)
    pauseIcon_1.classList.remove('course-accordion__video-icon-box-2--show');  // Hides pause icon (x-index: initial)
});


playIcon_2.addEventListener('click', function() {
    playIcon_2.classList.add('course-accordion__video-lesson-control-bar-tooltip--play-icon-hide');  // Hides play icon (display: none)
    pauseIcon_2.classList.add('course-accordion__video-lesson-control-bar-tooltip--pause-icon-show');  // Shows pause icon (display: block)
});

pauseIcon_2.addEventListener('click', function() {
    playIcon_2.classList.remove('course-accordion__video-lesson-control-bar-tooltip--play-icon-hide');  // Shows play icon (display: block)
    pauseIcon_2.classList.remove('course-accordion__video-lesson-control-bar-tooltip--pause-icon-show');  // Hides pause icon (display: none)
});


// --- PLAYBACK RATE DROPDOWN START ---
const playBackRateTriggerButton = document.querySelector('.course-accordion__video-lesson-control-bar-tooltip-button--playback-rate');
const playBackRateOptions = document.querySelectorAll('.course-accordion__video-lesson-control-bar-tooltip-dropdown-option');


playBackRateTriggerButton.addEventListener('click', function() {
    // console.log('Pressed!');
});

for (let x = 0; x < playBackRateOptions.length; x++) {
    playBackRateOptions[x].addEventListener('click', function() {
        // playBackRateOptions[x].classList.add('course-accordion__video-lesson-control-bar-tooltip-dropdown-option--active');
        playBackRateTriggerButton.textContent = playBackRateOptions[x].textContent;


        for (let x = 0; x < playBackRateOptions.length; x++) {
            if (playBackRateOptions[x].classList.contains('course-accordion__video-lesson-control-bar-tooltip-dropdown-option--active')) {  // Checks if any of the playback rate buttons contains the modifier class
                playBackRateOptions[x].classList.remove('course-accordion__video-lesson-control-bar-tooltip-dropdown-option--active');  // In that case, the modifier class is removed
            } 
        }

        // MOTE: This must come AFTER the for loop above, or else it won't work!
        playBackRateOptions[x].classList.add('course-accordion__video-lesson-control-bar-tooltip-dropdown-option--active');  // Adds modifier class to mark playback rate button whose NodeList indedx value corresponds to button pressed
    });
}


/* When the user clicks on the button, toggle between hiding and showing the 
   dropdown content 
*/
function openPlaybackRateDropdown() {
    // Original Code
    // if (document.getElementById('playBackRateDropdown').classList.contains('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show')) {
    //     document.getElementById('playBackRateDropdown').classList.remove('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show');
    // } else {
    //     document.getElementById('playBackRateDropdown').classList.add('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show')
    // }

    // Shortened Code
    document.getElementById('playBackRateDropdown').classList.toggle('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show');
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(e) {
//     // if (!e.target.matches('.course-accordion__video-lesson-control-bar-tooltip-button')) {
//     //     let dropdowns = document.getElementsByClassName('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1');
//     //     let x;
//     //     for (x = 0; x < dropdowns.length; x++) {
//     //         let openDropdown = dropdowns[x];
//     //         if (openDropdown.classList.contains('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show')) {
//     //             openDropdown.classList.remove('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show');
//     //         }
//     //     }
//     // }

//     if (e.target !== document.querySelector('.course-accordion__video-lesson-control-bar-tooltip-button')) {
//         const dropdownContent = document.querySelector('.course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1');

//         if (dropdownContent.classList.contains('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show')) {
//             dropdownContent.classList.remove('course-accordion__video-lesson-control-bar-tooltip-dropdown-content-1--show');
//         }
//     }
// }

// --- PLAYBACK RATE DROPDOWN END ---


// --- VOLUME CONTROL ICON START ---

const volumeOnIcon = document.querySelector('.course-accordion__video-lesson-control-bar-volume-control-tooltip-button-1');
const volumeOffIcon = document.querySelector('.course-accordion__video-lesson-control-bar-volume-control-tooltip-button-2');


volumeOnIcon.addEventListener('click', function() {
    volumeOnIcon.classList.add('course-accordion__video-lesson-control-bar-volume-control-tooltip-button-1--hide');  // Hides "volume on" icon (display: none)
    volumeOffIcon.classList.add('course-accordion__video-lesson-control-bar-volume-control-tooltip-button-2--show');  // Shows "volume off" icon (display: block)
});

volumeOffIcon.addEventListener('click', function() {
    volumeOnIcon.classList.remove('course-accordion__video-lesson-control-bar-volume-control-tooltip-button-1--hide');  // Shows "volume on" icon (display: block)
    volumeOffIcon.classList.remove('course-accordion__video-lesson-control-bar-volume-control-tooltip-button-2--show');  // Hides "volume off" icon (display: none)
});

// --- VOLUME CONTROL ICON END ---


// MODULES SECTION

/* 1) Initially, all the tabs are hidden except one. This is always open by default when the page 
      loads
*/
   
/* 2) However, when a button is pressed, the corresponding tab opens and the default tab closes
*/

/* 3) When another button is pressed, the corresponding tab opens and the previously-opened one
      closes
*/



const tabButtons = document.querySelectorAll('.course-accordion__modules-tab-button');  // NodeList containing all tab buttons
const tabs = document.querySelectorAll('.course-accordion__modules-tab-content');  // NodeList containing all tabs


// The first tab is shown by default when page loads
tabs[0].classList.add('course-accordion__modules-tab-content--show');

// The first tab is highlighed by default when page loads (optional)
tabButtons[0].classList.add('course-accordion__modules-tab-button--darken');  // Highlights corresponding tab


for (let x = 0; x < tabButtons.length; x++) {
    tabButtons[x].addEventListener('click', function() {
        // Hides previously opened tab
        for (let x = 0; x < tabs.length; x++) {
            if (tabs[x].classList.contains('course-accordion__modules-tab-content--show')) {  // Checks if any of the tabs are already open ...
                tabs[x].classList.remove('course-accordion__modules-tab-content--show'); // In that case, the modifier class is removed
            }
        }
      
        if (!tabs[x].classList.contains('course-accordion__modules-tab-content--show')) {  // Checks if corresponding tab doesn't contain modifier class
            tabs[x].classList.add('course-accordion__modules-tab-content--show');  // Opens corresponding tab
        }


        // for (let x = 0; x < tabs.length; x++) {
        //     if (tabs[x].style.display === 'block') {  // Looks for current slide which is still visible...
        //         tabs[x].style.display = 'none';  // It then hides it
        //     }
        // }


        // Highlighting currently opened tab (optional)
        for (let x = 0; x < tabButtons.length; x++) {
            if (tabButtons[x].classList.contains('course-accordion__modules-tab-button--darken')) {  // Checks if any of the tabs are already highlighted ...
                tabButtons[x].classList.remove('course-accordion__modules-tab-button--darken'); // In that case, the modifier class is removed
            }
        }

        tabButtons[x].classList.add('course-accordion__modules-tab-button--darken');  // Highlights corresponding tab
      
        // if (!tabButtons[x].classList.contains('course-accordion__modules-tab-button--darken')) {  // Checks if corresponding tab doesn't contain modifier class
        //     tabButtons[x].classList.add('course-accordion__modules-tab-button--darken');  // Highlights corresponding tab
        // }
    });
}


// --- ACCORDION START ---

const accBtn = document.querySelectorAll('.course-accordion__modules-accordion');
const accPanel = document.querySelectorAll('.course-accordion__modules-accordion-panel');


for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', function() {
        if (!accPanel[i].classList.contains('course-accordion__modules-accordion-panel--show')) {
            accPanel[i].classList.add('course-accordion__modules-accordion-panel--show');
            accBtn[i].classList.add('course-accordion__modules-accordion-active');
        } else {
            accPanel[i].classList.remove('course-accordion__modules-accordion-panel--show');
            accBtn[i].classList.remove('course-accordion__modules-accordion-active');
        }
    });
}

// --- ACCORDION END ---