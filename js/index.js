import { handleThemeBtnClick } from './handlers.js';
import { handleOrderOpenBtnClick } from './handlers.js';
import { handleOrderCloseBtnClick } from './handlers.js';
import { handleBurgerBtnClick } from './handlers.js';
import { data } from './data.js';
import { Header } from './widget/Header/Header.js';
import { Download } from './widget/Download/Download.js';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root.insertAdjacentHTML('beforeend', Download(data.download));

// DOM
const $themeButton = document.querySelector('#theme');
const $orderOpenBtn = document.querySelector('#order-open');
const $orderCloseBtn = document.querySelector('#order-close');
const $burgerBtn = document.querySelector('#burger');

// Слушатели:
// - модальное окно
$themeButton.addEventListener('click', handleThemeBtnClick);
$orderOpenBtn.addEventListener('click', handleOrderOpenBtnClick);
$orderCloseBtn.addEventListener('click', handleOrderCloseBtnClick);

// - меню
$burgerBtn.addEventListener('click', handleBurgerBtnClick);
