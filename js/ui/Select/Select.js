import { IconArrow } from '../../ui/Icons/IconArrow/IconArrow.js';

/**
 * @typedef {import('./types').SelectData} SelectData
 */

/**
 * @function Select
 * @param {string[]} data
 * @returns {string} HTML
 */

export const Select = (data) => `
  ${IconArrow()}
  <select id="lang">
  ${data.map((selectItem) => `
    <option value="${selectItem.key}">${selectItem.name}</option>
  `).join('')}
</select>
`;




