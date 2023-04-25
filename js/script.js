'use strict';

// /**
//  * Tab component
//  */
// const tabBox = document.querySelector('[data-tab="tab-links-parent"]');

// /**
//  * Handle the links using event delegation technique
//  */
// tabBox.addEventListener('click', function (e) {
//   // 1. Check if the clicked element is the link or span inside the link
//   if (
//     e.target.classList.contains('tab-link') ||
//     e.target.parentElement.classList.contains('tab-link')
//   ) {
//     const tabs = this.querySelectorAll('.tab-link');
//     const target = e.target;

//     // 2. Remove the active class
//     tabs.forEach((tab) => {
//       tab
//         .querySelector('.tab-link__underline')
//         .classList.remove('tab-link__underline--scaled');
//     });

//     // 3. Add the active class
//     target
//       .querySelector('.tab-link__underline')
//       .classList.add('tab-link__underline--scaled');
//   }
// });

/**
 * Tab component
 */
const tabBox = document.querySelector('[data-tab="parent"]');

tabBox.addEventListener('click', function (e) {
  // 1. If the clicked element is not that we want
  if (e.target.dataset?.tab !== 'child') return;

  const target =
    e.target.closest('li') || e.target.closest('button') || e.target;

  // 2. Unselect all tabs
  const tabs =
    tabBox.querySelectorAll('li') || tabBox.querySelectorAll('button');

  tabs.forEach((tab) => {
    tab.classList.remove('underline');
  });

  // 3. Select the target element (clicked element)
  target.classList.add('underline');
});
