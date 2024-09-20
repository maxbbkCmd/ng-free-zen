import { addHandlers } from './addHandlers.js';
import { App } from './App.js';
import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';
import { API_BASE_URL } from './config.js';

/**********************************************
  Переключение темы
**********************************************/

/**
 * @typedef {import('./types.js').BrandData} BrandData
 */

/**
 * @function handleThemeBtnClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandData[]} responseData
 * @returns {void}
 */

export const onThemeClick = (event, responseData) => {
  /**@type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeButton = /**@type {HTMLElement} */ (event.currentTarget);
  /**@type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  const currentTheme = localStorage.getItem('currentTheme')

  if (currentTheme === 'light') {
    $themeButton.innerHTML = IconSun();
    $root?.classList.remove('light');
    $root?.classList.add('dark');
    localStorage.setItem('currentTheme', 'dark');
    $brandNodes.forEach((brand, index) => {
      brand.src = responseData[index].logo.darkSource;
    });
  }

  if (currentTheme === 'dark') {
    $themeButton.innerHTML = IconMoon();
    $root?.classList.remove('dark');
    $root?.classList.add('light');
    localStorage.setItem('currentTheme', 'light');
    $brandNodes.forEach((brand, index) => {
      brand.src = responseData[index].logo.lightSource;
    })
  }
};

/**********************************************
  Скрол по клику на лого
**********************************************/

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

/**********************************************
  Открытие и закрытие бургера
**********************************************/

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

/**********************************************
  Закрытие бургера при скроле
**********************************************/

/**
 * @function handleBurgerClose
 * @param {???} event
 * @returns {void}
 */

export const handleBurgerClose = (event) => {
  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }

  const $nav = document.querySelector('#nav');
  const $burger = document.querySelector('#burger');

  $nav?.classList.toggle('active');
  $burger?.classList.toggle('active');
};

/**********************************************
  Смена языка
**********************************************/

/**
 * @function handleLangChange
 * @return {Promise<void>}
 */

export const handleLangChange = async (event) => {
  const currentLang = event.target.value;
  localStorage.setItem('currentLang', currentLang);
  const $root = document.querySelector('#root');
  if (!$root) return;

  try {
    const response = await fetch(`${API_BASE_URL}/${currentLang}.json`);
    const responseData = await response.json();
    $root.innerHTML = App(responseData);
    addHandlers(responseData);
  } catch (error) {
    console.log('error', error);
  }
};
