import { data } from './data.js';
import { App } from './App.js';
// import { Header } from './widget/Header/Header.js';
// import { Download } from './widget/Download/Download.js';
// import { Warranty } from './widget/Warranty/Warranty.js';
// import { Care } from './widget/Care/Care.js';
// import { Cashback } from './widget/Cashback/Cashback.js';
// import { Clients } from './widget/Clients/Clients.js';
// import { Footer } from './widget/Footer/Footer.js';
import { onThemeClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(data));
// $root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
// $root?.insertAdjacentHTML('beforeend', Download(data.download));
// $root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
// $root?.insertAdjacentHTML('beforeend', Care(data.care));
// $root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
// $root?.insertAdjacentHTML('beforeend', Clients(data.clients));
// $root?.insertAdjacentHTML('beforeend', Footer(data.secondaryInfo));

const $themeButton = document.querySelector('#theme')
$themeButton?.addEventListener('click', (event) => onThemeClick(event, data.clients.brands));

const $logo = document.querySelector('#logo');
$logo?.addEventListener('click', handleLogoClick);

const $burger = document.querySelector('#burger');
$burger?.addEventListener('click', handleBurgerClick);

