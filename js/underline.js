'use strict';

// 1. Get the current pathName
const getCurrentPathName = function () {
  const { href } = window.location;
  const [pathName] = href.split('/').slice(-1);

  return pathName.slice(0, pathName.indexOf('.'));
};

const underlineHandler = function () {
  // 2. Delete the underline for all links/buttons
  const links = document.querySelectorAll('.primary-navigation__item');

  links.forEach((link) => {
    link.classList.remove('underline');
  });

  // 3. Recover the link/button corresponding the path name
  const currentLink = document.querySelector(
    `[data-page="${getCurrentPathName()}"]`
  );
  // 4. Add the underline to the clicked link/button
  currentLink.classList.add('underline');
};

underlineHandler();
