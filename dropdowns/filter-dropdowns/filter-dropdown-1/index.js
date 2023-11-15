'use strict';


function openFilterDropDown() {
    if (document.getElementById('myDropdown').classList.contains('filter-dropdown__content--show')) {
        document.getElementById('myDropdown').classList.remove('filter-dropdown__content--show');
    } else {
        document.getElementById('myDropdown').classList.add('filter-dropdown__content--show')
    }
}