import { Title } from '../../ui/Title/index.js';
import { Image } from '../../ui/Images/index.js';

/**
 * @typedef {import('./types').WarrantyData} WarrantyData
 */

/**
 * @function Warranty
 * @param {WarrantyData} data
 * @returns {string} HTML
 */

export const Warranty = (data) => {
  const { title, texts, images } = data;
  return `
  <section class="warranty" id="warranty">
    <div class="warranty__wrapper">
      <div class="warranty__text-block">
        <!-- Title -->
        ${Title(title, 'warranty__title')}
        <!-- Copy -->
        ${texts.map((text) => `<p class="warranty__copy">${text}</p>`).join('')}
        </div>
        <div class="warranty__image-block">
        <!-- Image -->
        ${Image(images)}
      </div>
    </div>
  </section>
  `;
};
