import { generateSunIcon } from './ui/generateSunIcon.js';
import { generateMoonIcon } from './ui/generateMoonIcon.js';

// DOM
const $app = document.querySelector('#app');
const $modalOrder = document.querySelector('#modal-order');
const $menu = document.querySelector('#menu');

// Обработчики:
// - смена иконки темы
export const handleThemeBtnClick = (event) => {
  const $themeButton = event.currentTarget;
  const theme = $themeButton.dataset.theme;
  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = generateSunIcon();
    $app.classList.add('dark');
    $app.classList.remove('light');
  }
  if (theme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = generateMoonIcon();
    $app.classList.add('light');
    $app.classList.remove('dark');
  }
};

// - открытие/закрытие модального окна
export const handleOrderOpenBtnClick = () => {
  $modalOrder.classList.add('active');
};

export const handleOrderCloseBtnClick = () => {
  $modalOrder.classList.remove('active');
};

// - открытие/закрытие меню
export const handleBurgerBtnClick = () => {
  $menu.classList.toggle('active');
};
