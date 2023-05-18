'use strict';

const hamburgerIcon = document.querySelector(
  '.primary-navigation__hamburger-icon'
);
const navigation = document.querySelector('.primary-navigation__list');

hamburgerIcon.addEventListener('click', function () {
  if (navigation.getAttribute('aria-expanded') === 'true') {
    navigation.setAttribute('aria-expanded', 'false');
    this.setAttribute('aria-label', 'Opened Icon');
  } else {
    navigation.setAttribute('aria-expanded', 'true');
    this.setAttribute('aria-label', 'Closed Icon');
  }
});
