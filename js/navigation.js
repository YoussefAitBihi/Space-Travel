'use strict';

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navigation = document.querySelector('.primary-navigation');

// When the user clicks outside of the navigation
document.body.addEventListener('mouseup', (event) => {
  if (
    event.target.classList.contains('primary-navigation__list') ||
    event.target.classList.contains('hamburger-icon') ||
    event.target.classList.contains('hamburger-icon__layer')
  )
    return;

  closeNavigation();
});

// When the user clicks on the Hamburger Icon
hamburgerIcon.addEventListener('click', function () {
  const visibility = navigationVisibility();
  visibility ? closeNavigation() : openNavigation();
});

// When the user clicks on the escape
document.addEventListener('keydown', (event) => {
  const { key } = event;
  const visibility = navigationVisibility();

  if (key === 'Escape' && visibility) closeNavigation();
});

/**
 * Check if the navigation is visible or not
 *
 * @returns boolean
 */
const navigationVisibility = () => {
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
const closeNavigation = () => {
  hamburgerIcon.classList.remove('hamburger-icon--close');
  navigation.setAttribute('aria-expanded', 'false');
};
