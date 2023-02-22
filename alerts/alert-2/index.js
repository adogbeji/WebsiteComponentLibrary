// This code allows dismissal of multiple alert messages without using 'onclick' on each span tag


// Get all elements with class="closebtn"
const close = document.getElementsByClassName('alert__closebtn');
let x;

// Loop through all close buttons
for (x = 0; x < close.length; x++) {
  // When someone clicks on a close button
  close[x].onclick = function(){

    // Get the parent of <span class="alert__closebtn"> (<div class="alert">)
    const alert = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    alert.style.opacity = '0';

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ alert.style.display = 'none'; }, 600);
  };
}