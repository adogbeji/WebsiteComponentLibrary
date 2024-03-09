'use strict';


function copyText() {
    // Get text to be copied
    let copyText = document.getElementById('shareLink');

    // Select the copied text
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);

    // Tooltip text
    const tooltipText = document.querySelector('.copy-text__readonly-tooltip-text');
    tooltipText.textContent = 'Copied!';  // How to change this back after ~ 2s?
    setTimeout(changeMessage, 2500);  // Removes error class after 2.5s

    function changeMessage() {
        tooltipText.textContent = 'Copy text';
    }
}