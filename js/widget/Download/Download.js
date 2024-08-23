import { Title } from '../../ui/Title/Title.js';
import { Link } from '../../ui/Links/Link.js';
import { Image } from '../../ui/Images/Image.js';

/**
 * @typedef {import('./types').DownloadData} DownloadData
 */

/**
 * @function Download
 * @param {DownloadData} data
 * @return {string} HTML
 */

export const download = (data) => {
  const { title, texts, links, images } = data;
  return `
    <section class="download" id="download">
      <div class="download__wrapper">
        <div class="download__text-block">
        ${Title(title, 'download__title')}
        ${texts.map((text) => `<p class="download__copy">${text}</p>`).join('')}
          <div class="download__links">
          ${links.map((link) => Link(link, 'download__link')).join('')}
          </div>
        </div>
        <div class="download__image-block">
        ${Image(images)}</div>
      </div>
    </section>
  `;
};

// <a class="download__link" href="...">
// <img src="..." alt="..." />
// </a>
// <a class="download__link" href="...">
// <img src="..." alt="..." />
// </a>

// <img src="..." alt="...">
