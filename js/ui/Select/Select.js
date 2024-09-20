import { IconArrow } from '../../ui/Icons/IconArrow/IconArrow.js';

/**
 * @typedef {import('./types').SelectData} SelectData
 */

/**
 * @function Select
 * @param {SelectData[]} data
 * @returns {string} HTML
 */

export const Select = (data) => {
  const currentLang = localStorage.getItem('currentLang') ?? 'ru';

  return `
  ${IconArrow()}
    <select id="lang">
      ${data.map((selectItem) => `
        <option value="${selectItem.key}" ${selectItem.key === currentLang ? 'selected' : ''}>
          ${selectItem.name}
        </option>
      `).join('')}
    </select>
  `
  };
