import { Button } from '../../ui/Button/index.js';
import { Title } from '../../ui/Title/index.js';

/**
 * @typedef {import('./types').CashbackData} CashbackData
 */

/**
 * @function Cashback
 * @param {Cashback} data
 * @returns {string} HTML
 */

export const Cashback = (data) => {
  const { title, texts, buttonText } = data;
  return `
    <section class="cashback" id="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          ${Title(title, 'cashback__title')}
          ${texts.map((text) => `<p class="cashback__copy">${text}</p>`).join('')}
          ${Button(buttonText, 'cashback__button', 'order-open', 'button')}
        </div>
      </div>
    </section>
  `;
};
