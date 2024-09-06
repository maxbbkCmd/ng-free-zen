import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

/**
 * @typedef {import('./widget/Clients/types').ClientsData} ClientsData
 */

/**
 * @function handleThemeBtnClick
 * @description In anonymous handler
 * @param {Event} event
 * /@param {ClientsData} clientsData
 */

const $app = document.querySelector('#app');

export const handleThemeBtnClick = (event) => {

  const $themeButton = event.currentTarget;
  const theme = $themeButton.dataset.theme;
  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = IconSun();
    $app.classList.add('dark');
    $app.classList.remove('light');
  }
  if (theme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = IconMoon();
    $app.classList.add('light');
    $app.classList.remove('dark');
  }
};
