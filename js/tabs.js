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
  const target = event.target;

  if (target.getAttribute('data-tab') === 'child') {
    const article = document.getElementById(
      `${target.getAttribute('aria-controls')}`
    );
    const picture = document.getElementById(`${target.dataset.picture}`);

    tabIndex = +target.getAttribute('tabindex');
    slideTo(article, picture, target);
  }
});

document.addEventListener('keydown', (event) => {
  const RIGHT_ARROW_CODE = 39;
  const LEFT_ARROW_CODE = 37;
  const MAX_SLIDE = articles.length;

  const { keyCode } = event;

  if (keyCode === RIGHT_ARROW_CODE || keyCode === LEFT_ARROW_CODE) {
    if (keyCode === RIGHT_ARROW_CODE) {
      tabIndex++;
      if (tabIndex > MAX_SLIDE - 1) tabIndex = 0;
    } else if (keyCode === LEFT_ARROW_CODE) {
      tabIndex--;
      if (tabIndex < 0) tabIndex = MAX_SLIDE - 1;
    }

    const indicator = document.querySelector(`[tabindex="${tabIndex}"]`);
    const article = document.querySelector(`[article-index="${tabIndex}"]`);
    const picture = document.querySelector(`[picture-index="${tabIndex}"]`);

    slideTo(article, picture, indicator);
  }
});
