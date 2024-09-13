import { Header } from './widget/index.js';
import { Download } from './widget/index.js';
import { Warranty } from './widget/index.js';
import { Care } from './widget/index.js';
import { Cashback } from './widget/index.js';
import { Clients } from './widget/index.js';
import { Footer } from './widget/index.js';

/**
 * @typedef {import ('./types.js').AppData} AppData
 */

/**
 * @function App
 * @param {AppData} data
 * @returns {string} HTML
 *
*/

export const App = (data) => {

  return `
    ${Header(data.primaryInfo)}
    ${Download(data.download)}
    ${Warranty(data.warranty)}
    ${Care(data.care)}
    ${Clients(data.clients)}
    ${Cashback(data.cashback)}
    ${Footer(data.secondaryInfo)}
  `
};
