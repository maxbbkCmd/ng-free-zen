import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

/**
 * @typedef {import('./widget/Clients/types').BrandData} BrandData
 */

/**
 * @function handleThemeBtnClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandData[]} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /**@type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');

  /**@type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  /**@type {HTMLElement | null} */
  const $themeButton = /**@type {HTMLElement} */ (event.currentTarget);

  const theme =  $themeButton?.dataset.theme;

  if (!$root || !$brandNodes || !theme)  return;

  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = IconSun();
    $root.dataset.theme = 'dark';
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  }

  if (theme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = IconMoon();
    $root.dataset.theme = 'light';
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightSource;
    })
  }
};

/**
 * @function handleLogoClick
 * @returns {void}
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};


/**
 * @function handleBurgerClick
 * @returns {void}
 */

export const handleBurgerClick = () => {
  const $nav = document.querySelector('#nav');
  const $burger = document.querySelector('#burger');

  $nav?.classList.toggle('active');
  $burger?.classList.toggle('active');
};
