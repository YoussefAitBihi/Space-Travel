'use strict';

/**
 * Tab component
 */
const allTabBox = document.querySelectorAll('[data-tab="tab-links-parent"]');

/**
 * Handle the links using event delegation technique
 */

allTabBox.forEach((tabBox) => {
  tabBox.addEventListener('click', function (e) {
    // 1. Check if the clicked element is the link or span inside the link
    if (
      e.target.classList.contains('tab-link') ||
      e.target.parentElement.classList.contains('tab-link')
    ) {
      const tabs = this.querySelectorAll('.tab-link');
      const target = e.target;

      // 2. Remove the active class
      tabs.forEach((tab) => {
        tab
          .querySelector('.tab-link__underline')
          .classList.remove('tab-link__underline--scaled');
      });

      // 3. Add the active class
      target
        .querySelector('.tab-link__underline')
        .classList.add('tab-link__underline--scaled');
    }
  });
});
