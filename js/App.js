import { Download, Header } from './widget/index.js';

/**
 * @typedef {import ('./typesGlobal').AppData} AppData
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
  `
};
