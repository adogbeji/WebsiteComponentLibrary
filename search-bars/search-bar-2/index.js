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