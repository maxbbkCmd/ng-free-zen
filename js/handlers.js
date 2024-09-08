import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

/**
 * @typedef {import('./widget/Clients/types').ClientsData} ClientsData
 */

/**
 * @function handleThemeBtnClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {ClientsData} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /**@type {NodeListOf<HTMLImageElement>} */
  const $root = document.querySelector('#root');

  const $brandNodes = document.querySelectorAll('.clients__brand img');
  const $themeButton = /**@type {HTMLElement | null} */ event.currentTarget;
  /**@type {HTMLElement | null} */
  const theme = $themeButton.dataset.theme;

  if (!$brandNodes || !$themeButton || !theme)  return;

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
    behavior: 'smooth'
  });
};
