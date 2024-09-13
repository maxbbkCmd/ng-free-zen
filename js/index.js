import { dataFromAPI } from './data.js';
import { App } from './App.js';
import { onThemeClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataFromAPI));

const $themeButton = document.querySelector('#theme')
$themeButton?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));

const $logo = document.querySelector('#logo');
$logo?.addEventListener('click', handleLogoClick);

const $burger = document.querySelector('#burger');
$burger?.addEventListener('click', handleBurgerClick);

