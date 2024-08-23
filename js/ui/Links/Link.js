import { iconApple } from '../Icons/IconApple/IconApple.js';
import { iconGoogle } from '../Icons/IconGoogle/IconGoogle.js';

/**
 * @typedef {import('./types.js').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Link = (data, className) => `
<a class="${className}" href="${data.url}">
  ${data.name === 'Apple' ? iconApple() : ''}
  ${data.name === 'Google' ? iconGoogle() : ''}
</a>
`;
