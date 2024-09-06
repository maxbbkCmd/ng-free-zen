/**
 * @typedef {import('./types').DeveloperData} DeveloperData
 */

/**
 * @function Developer
 * @param {DeveloperData} data
 * @returns {string} HTML
 */

export const Developer = (data) => {
  return `
  <a class="footer__dev" href="${data.developer.url}">
    <img src="${data.developer.content.data}" alt="Developer">
  </a>
  `;
};
