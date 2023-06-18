'use strict';

const tabParent = document.querySelector('[data-tab=parent]');
const tabs = document.querySelectorAll('[data-tab=child]');
const articles = document.querySelectorAll('article');
const pictures = document.querySelectorAll('picture');

let tabIndex = 0;

const activateIndicatorHandler = (target) => {
  target.setAttribute('aria-selected', 'true');
};

const normalIndicatorsHandler = () => {
  tabs.forEach((tab) => {
    tab.setAttribute('aria-selected', 'false');
  });
};

const hideElements = (elements) => {
  elements.forEach((element) => {
    element.setAttribute('hidden', '');
  });
};

const showTargetElement = (element) => {
  element.removeAttribute('hidden');
};

const slideTo = (article, picture, indicator) => {
  // Hide all articles
  hideElements(articles);
  // Show the target article
  showTargetElement(article);

  // Hide Pictures
  hideElements(pictures);
  // Show the target picture
  showTargetElement(picture);

  // Make all indicators normal
  normalIndicatorsHandler();
  // Active the target indicator
  activateIndicatorHandler(indicator);
};

tabParent.addEventListener('click', function (event) {
  if (event.target.getAttribute('data-tab') !== 'child') return;

  const target = event.target;
  const targetIndex = target.getAttribute('tabindex');

  const article = document.querySelector(`[article-index="${targetIndex}"`);
  const picture = document.querySelector(`[picture-index="${targetIndex}"`);

  tabIndex = +targetIndex;
  slideTo(article, picture, target);
});

document.addEventListener('keydown', (event) => {
  const availableKeyCode = [37, 39];

  const rightArrowCode = 39;
  const leftArrowCode = 37;

  const maxSlide = articles.length;

  const { keyCode } = event;

  if (!availableKeyCode.includes(keyCode)) return;

  if (keyCode === rightArrowCode) {
    tabIndex++;
    if (tabIndex > maxSlide - 1) tabIndex = 0;
  } else if (keyCode === leftArrowCode) {
    tabIndex--;
    if (tabIndex < 0) tabIndex = maxSlide - 1;
  }

  const indicator = document.querySelector(`[tabindex="${tabIndex}"]`);
  const article = document.querySelector(`[article-index="${tabIndex}"]`);
  const picture = document.querySelector(`[picture-index="${tabIndex}"]`);

  slideTo(article, picture, indicator);
});
