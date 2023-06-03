'use strict';

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navigation = document.querySelector('.primary-navigation');

// When the user clicks on the Hamburger Icon
hamburgerIcon.addEventListener('click', function () {
  const visibility = navigationVisibility();
  visibility ? closeNavigation() : openNavigation();
});

// When the user clicks on the escape
document.addEventListener('keydown', (e) => {
  const { key } = e;
  const visibility = navigationVisibility();

  if (key === 'Escape' && visibility) closeNavigation();
});

/**
 * Check if the navigation is visible or not
 * @returns boolean
 */
const navigationVisibility = function () {
  return hamburgerIcon.classList.contains('hamburger-icon--close');
};

/**
 * Allow to open the navigation
 */
const openNavigation = () => {
  hamburgerIcon.classList.add('hamburger-icon--close');
  navigation.setAttribute('aria-expanded', 'true');
};

/**
 * Allow to close the navigation
 */
const closeNavigation = function () {
  hamburgerIcon.classList.remove('hamburger-icon--close');
  navigation.setAttribute('aria-expanded', 'false');
};
