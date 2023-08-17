// Slide in from the side:-

function openNav() {  /* Open when someone clicks on the span element */
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {  /* Close when someone clicks on the "x" symbol inside the overlay */
  document.getElementById('myNav').style.width  = '0%';
}



// Slide down from top:-

// NB: For this to work, default '.overlay' height must be 0, width must be 100% & set overflow-y: hidden (except for small-screen)

// function openNav() {  /* Open when someone clicks on the span element */
//   document.getElementById('myNav').style.height = '100%';
// }

// function closeNav() {  /* Close when someone clicks on the "x" symbol inside the overlay */
//   document.getElementById('myNav').style.height = '0%';
// }



// Open menu without animation:-

// function openNav() {  /* Open when someone clicks on the span element */
//   document.getElementById('myNav').style.display = 'block';
// }

// function closeNav() {  /* Close when someone clicks on the "x" symbol inside the overlay */
//   document.getElementById('myNav').style.display = 'none';
// }