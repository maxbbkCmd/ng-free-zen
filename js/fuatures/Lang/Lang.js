import { Select } from '../../ui/Select/Select.js';

/**
 * @typedef {import('./types.js').LangsData} LangsData
 */

/**
 * @function Lang
 * @param {string[]} data
 * @returns {string} HTML
 */

export const Lang = (data) => `
    ${Select(data.langs)}
`;
