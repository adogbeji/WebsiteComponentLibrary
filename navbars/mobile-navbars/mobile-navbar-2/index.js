'use strict';


// --- FIRST OVERLAY ---

// Slide in from the side

/* Open when someone clicks on the span element */
function openMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '100%';
}
  
/* Close when someone clicks on the 'x' symbol inside the overlay */
function closeMobileMenuTwo() {
    document.getElementById('mobileNavOverlay2').style.width = '0%';
}



// Slide down from top

// /* Open */
// function openMobileMenuTwo() {
//     document.getElementById('mobileNavOverlay2').style.height = '100%';
// }
  
// /* Close */
// function closeMobileMenuTwo() {
//     document.getElementById('mobileNavOverlay2').style.height = '0%';
// }



// Show overlay without animation

// /* Open */
// function openMobileMenuTwo() {
//     document.getElementById('mobileNavOverlay2').style.display = 'block';
// }
  
// /* Close */
// function closeMobileMenuTwo() {
//     document.getElementById('mobileNavOverlay2').style.display = 'none';
// }



// --- ACCORDION (MENU LINKS) ---

let acc = document.getElementsByClassName('mobilenav__accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// --- ANIMATED ACCORDION ---

// let acc = document.getElementsByClassName('mobilenav__accordion');
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function() {
//     this.classList.toggle('active');
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   });
// }



// --- ACCODRDION (SUB-ITEMS) ---

// let subAcc = document.getElementsByClassName('mobilenav__accordion-icon-box');
// let x;

// for (x = 0; x < subAcc.length; x++) {
//   subAcc[x].addEventListener('click', function() {
//     /* Toggle between adding and removing the 'active' class,
//     to highlight the button that controls the panel */
//     this.classList.toggle('active');

//     /* Toggle between hiding and showing the active panel */
//     let panel = document.querySelector('.mobilenav__accordion-list');
//     if (panel.style.display === 'block') {
//       panel.style.display = 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }

// 1st Sub-item

let subAcc_1 = document.getElementsByClassName('mobilenav__accordion-icon-box--1');
let x1;

for (x1 = 0; x1 < subAcc_1.length; x1++) {
  subAcc_1[x1].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--1');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 2nd Sub-item

let subAcc_2 = document.getElementsByClassName('mobilenav__accordion-icon-box--2');
let x2;

for (x2 = 0; x2 < subAcc_2.length; x2++) {
  subAcc_2[x2].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--2');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 3rd Sub-item

let subAcc_3 = document.getElementsByClassName('mobilenav__accordion-icon-box--3');
let x3;

for (x3 = 0; x3 < subAcc_3.length; x3++) {
  subAcc_3[x3].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--3');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 4th Sub-item

let subAcc_4 = document.getElementsByClassName('mobilenav__accordion-icon-box--4');
let x4;

for (x4 = 0; x4 < subAcc_4.length; x4++) {
  subAcc_4[x4].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--4');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 5th Sub-item

let subAcc_5 = document.getElementsByClassName('mobilenav__accordion-icon-box--5');
let x5;

for (x5 = 0; x5 < subAcc_5.length; x5++) {
  subAcc_5[x5].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--5');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 6th Sub-item

let subAcc_6 = document.getElementsByClassName('mobilenav__accordion-icon-box--6');
let x6;

for (x6 = 0; x6 < subAcc_6.length; x6++) {
  subAcc_6[x6].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--6');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 7th Sub-item

let subAcc_7 = document.getElementsByClassName('mobilenav__accordion-icon-box--7');
let x7;

for (x7 = 0; x7 < subAcc_7.length; x7++) {
  subAcc_7[x7].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--7');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 8th Sub-item

let subAcc_8 = document.getElementsByClassName('mobilenav__accordion-icon-box--8');
let x8;

for (x8 = 0; x8 < subAcc_8.length; x8++) {
  subAcc_8[x8].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--8');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 9th Sub-item

let subAcc_9 = document.getElementsByClassName('mobilenav__accordion-icon-box--9');
let x9;

for (x9 = 0; x9 < subAcc_9.length; x9++) {
  subAcc_9[x9].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--9');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 10th Sub-item

let subAcc_10 = document.getElementsByClassName('mobilenav__accordion-icon-box--10');
let x10;

for (x10 = 0; x10 < subAcc_10.length; x10++) {
  subAcc_10[x10].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--10');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 11th Sub-item

let subAcc_11 = document.getElementsByClassName('mobilenav__accordion-icon-box--11');
let x11;

for (x11 = 0; x11 < subAcc_11.length; x11++) {
  subAcc_11[x11].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--11');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 12th Sub-item

let subAcc_12 = document.getElementsByClassName('mobilenav__accordion-icon-box--12');
let x12;

for (x12 = 0; x12 < subAcc_12.length; x12++) {
  subAcc_12[x12].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--12');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 13th Sub-item

let subAcc_13 = document.getElementsByClassName('mobilenav__accordion-icon-box--13');
let x13;

for (x13 = 0; x13 < subAcc_13.length; x13++) {
  subAcc_13[x13].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--13');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}


// 14th Sub-item

let subAcc_14 = document.getElementsByClassName('mobilenav__accordion-icon-box--14');
let x14;

for (x14 = 0; x14 < subAcc_14.length; x14++) {
  subAcc_14[x14].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = document.querySelector('.mobilenav__accordion-list--14');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}