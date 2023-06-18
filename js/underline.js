'use strict';

// 1. Get the current pathName
const getCurrentPathName = function () {
  const { href } = window.location;
  const [pathName] = href.split('/').slice(-1);

  return pathName.slice(0, pathName.indexOf('.'));
};

const underlineHandler = function () {
  // 2. Recover the link/button corresponding the path name
  const currentLink = document.querySelector(
    `[data-page="${getCurrentPathName()}"]`
  );
  // 3. Add the underline to the clicked link/button
  currentLink.classList.add('underline');
};

underlineHandler();
