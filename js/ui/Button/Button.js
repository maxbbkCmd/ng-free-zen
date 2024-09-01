/**
 * @typedef {import('./types').ButtonData} ButtonData
 */

/**
 * @function Button
 * @param {ButtonData} data
 * @param {string} className
 * @param {string} id
 * @param {string} type
 * @returns {string} HTML
 */

export const Button = (data, className, id, type) => {
  return `
    <button class="${className}"
      id="${id}"
      type="${type}"
    >
      ${data}
    </button>
  `;
};
