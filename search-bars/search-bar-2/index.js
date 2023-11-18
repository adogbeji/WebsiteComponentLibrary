'use strict';


// SEARCH BAR
const searchBar = document.querySelector('.search-bar');
const searchBarInput = document.querySelector('.search-bar__search-input');


searchBarInput.addEventListener('focus', function() {
    searchBar.style.width = '100%';
});

searchBarInput.addEventListener('focusout', function() {
    searchBar.style.width = '95%';
});


// SEARCH BAR CLOSE ICON
const searchBarCloseIcon = document.querySelector('.search-bar__search-clear-input');

// Removes close icon when nothing is typed
searchBarInput.addEventListener('input', function(e) {
    if (searchBarInput.value !== '') {
        searchBarCloseIcon.classList.remove('search-bar__search-clear-input--hide');
    } else {
        searchBarCloseIcon.classList.add('search-bar__search-clear-input--hide');
    }
});

// Clears search bar when close icon is pressed
// searchBarCloseIcon.addEventListener('click', function() {
//     if (searchBarInput.value !== '') {
//         searchBarInput.value = '';
//         searchBarCloseIcon.classList.add('search-bar__search-clear-input--hide');
//     }
// });