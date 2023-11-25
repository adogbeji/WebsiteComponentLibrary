'use strict';


/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function openClickDropDown() {
    // Original Code
    // if (document.getElementById('myDropdown').classList.contains('dropdown__content--show')) {
    //     document.getElementById('myDropdown').classList.remove('dropdown__content--show');
    // } else {
    //     document.getElementById('myDropdown').classList.add('dropdown__content--show')
    // }

    // Shortened Code
    document.getElementById('myDropdown').classList.toggle('dropdown__content--show');
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(e) {
    // if (!e.target.matches('.dropdown__btn')) {
    //     let dropdowns = document.getElementsByClassName('dropdown__content');
    //     let x;
    //     for (x = 0; x < dropdowns.length; x++) {
    //         let openDropdown = dropdowns[x];
    //         if (openDropdown.classList.contains('dropdown__content--show')) {
    //             openDropdown.classList.remove('dropdown__content--show');
    //         }
    //     }
    // }

    if (e.target !== document.querySelector('.dropdown__btn')) {
        const dropdownContent = document.querySelector('.dropdown__content');

        if (dropdownContent.classList.contains('dropdown__content--show')) {
            dropdownContent.classList.remove('dropdown__content--show');
        }
    }
}