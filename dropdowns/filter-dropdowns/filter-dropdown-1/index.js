'use strict';


function openFilterDropDown() {
    // Original Code
    // if (document.getElementById('myDropdown').classList.contains('filter-dropdown__content--show')) {
    //     document.getElementById('myDropdown').classList.remove('filter-dropdown__content--show');
    // } else {
    //     document.getElementById('myDropdown').classList.add('filter-dropdown__content--show')
    // }

    // Shortened Code
    document.getElementById('myDropdown').classList.toggle('filter-dropdown__content--show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.filter-dropdown__btn')) {
        let dropdowns = document.getElementsByClassName('filter-dropdown__content');
        let x;
        for (x = 0; x < dropdowns.length; x++) {
            let openDropdown = dropdowns[x];
            if (openDropdown.classList.contains('filter-dropdown__content--show')) {
                openDropdown.classList.remove('filter-dropdown__content--show');
            }
        }
    }
}