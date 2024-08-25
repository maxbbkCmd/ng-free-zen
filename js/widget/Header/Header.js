import { Logo } from '../../fuatures/logo/index.js';
import { Navigation } from '../../fuatures/Navigation/index.js';
import { Lang } from '../../fuatures/Lang/index.js';
import { Theme } from '../../fuatures/Theme/index.js';
import { Burger } from '../../fuatures/Burger/index.js';

/**
 * @typedef {import('./types').HeaderData} HeaderData
 */

/**
 * @function Header
 * @param {HeaderData} data
 * @returns {string} HTML
 */

export const Header = (data) => `
  <header class="header">
    <div class="header__wrapper">
      ${Logo('header__logo')}
      <nav class="header__nav">
        ${Navigation(data.navigation)}
      </nav>
      <div class="header__actions">
        <label class="header__lang">
          ${Lang(data)}
        </label>
        ${Theme('header__theme')}
        ${Burger('burger')}
      </div>
    </div>
  </header>
`;
