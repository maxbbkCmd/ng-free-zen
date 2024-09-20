import { onThemeClick } from "./handlers.js";
import { handleLogoClick } from "./handlers.js";
import { handleBurgerClick } from "./handlers.js";
import { handleBurgerClose } from "./handlers.js";
import { handleLangChange } from "./handlers.js";

export const addHandlers = (responseData) => {
  const $themeButton = document.querySelector('#theme')
  const $logo = document.querySelector('#logo');
  const $burger = document.querySelector('#burger');
  const $navBurger = document.querySelector('#nav');
  const $langClick = document.querySelector('#lang');

  $themeButton?.addEventListener('click', (event) => onThemeClick(event, responseData.clients.brands))
  $logo?.addEventListener('click', handleLogoClick);
  $burger?.addEventListener('click', handleBurgerClick);
  $navBurger?.addEventListener('click', handleBurgerClose);
  $langClick?.addEventListener('change', handleLangChange);
};

