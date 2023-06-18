// 'use strict';

// /**
//  * Tab component
//  */
// const allTabBox = document.querySelectorAll('[data-tab="parent"]');

// // const href = location.href.split('/').slice(-1);

// allTabBox.forEach(function (tabBox) {
//   tabBox.addEventListener('click', function (e) {
//     // 1. If the clicked element is not that we want
//     if (e.target.dataset?.tab !== 'child') return;

//     const target =
//       e.target.closest('li') || e.target.closest('button') || e.target;

//     // 2. Unselect all tabs
//     const tabs =
//       tabBox.querySelectorAll('li') || tabBox.querySelectorAll('button');

//     tabs.forEach((tab) => {
//       tab.classList.remove('underline');
//     });

//     // 3. Select the target element (clicked element)
//     target.classList.add('underline');
//   });
// });
