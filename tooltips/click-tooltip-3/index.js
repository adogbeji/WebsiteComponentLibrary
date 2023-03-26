'use strict';


// When the user clicks on <div>, open the tooltip
function showTooltip() {
    let tooltip = document.getElementById('clickTooltip');
    
    // Original Code
    // if (tooltip.classList.contains('click-tooltip--show')) {
    //     tooltip.classList.remove('click-tooltip--show');
    // } else {
    //     tooltip.classList.add('click-tooltip--show');
    // }
    
    // Shortened Code
    tooltip.classList.toggle('click-tooltip--show');
}