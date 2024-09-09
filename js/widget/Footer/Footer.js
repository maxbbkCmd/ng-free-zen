import { Column } from '../../ui/Column/index.js';
import { Developer } from '../../ui/Developer/index.js';

/**
 * @typedef {import('./types').SecondaryInfoData} SecondaryInfoData
 */

/**
 * @function Footer
 * @param {SecondaryInfoData} data
 * @returns {string} HTML
 */

export const Footer = (data) => {
  const { categories, info } = data;
  return `
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__columns">
        ${categories.map((category) => Column(category)).join('')}
      </div>
      <div class="footer__info">
        <a class="footer__logo" href="${info.logo.url}">
          <img src="${info.logo.content.data}" alt="ZEN logo">
        </a>
        ${info.texts
          .map((text) => `<p class="footer__copy">${text}</p>`)
          .join('')}
        ${Developer(info)}
      </div>
    </div>
  </footer>
  `;
};
