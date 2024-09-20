import { Select } from '../../ui/Select/Select.js';

/**
 * @typedef {import('./types.js').LangsData} LangsData
 */

/**
 * @function Lang
 * @param {LangsData[]} data
 * @returns {string} HTML
 */

export const Lang = (data) => {
  return `
    ${Select(data)}
  `;
};

