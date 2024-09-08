/**
 * @function Theme
 * @param {string} className
 * @return {string} HTML
 */

export const Theme = (className) => `
  <button
    class="${className}"
    type="button"
    id="theme"
    data-theme="light"
  >
    <img src="./assets/icon/moon.svg" alt="theme">
  </button>
`;
