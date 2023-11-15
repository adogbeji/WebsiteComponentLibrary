'use strict';


// Makes modal visible
const openEls = document.querySelectorAll('[data-open]');
const modal = document.querySelector('.modal');
const isModalVisible = 'modal__visible';

for(const el of openEls) {
  el.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isModalVisible);
  });
}


// Closes modal (3 possible ways)

// 1) By clicking on the custom [data-close] element which is located inside the modal:
const closeEls = document.querySelectorAll('[data-close]');

for (const el of closeEls) {
  el.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isModalVisible);
  });
}

// 2) By clicking on everything outside of the modal:
window.onclick = function(e) {
  if (e.target === modal) {
    modal.classList.remove(isModalVisible);
  }
}

// 3) Lastly by pressing the Esc key:
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    modal.classList.remove(isModalVisible);
  }
});


// --- ALTERNATIVE CODE ---

// const modalButton = document.querySelector('.btn');
// const modal = document.querySelector('.modal');


// modalButton.addEventListener('click', function() {
//     modal.classList.add('modal__visible');
// });