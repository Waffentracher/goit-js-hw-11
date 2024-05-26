import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImages } from './js/pixabay-api.js';
import { renderImages, showErrorMessage } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const gallery = document.getElementById('gallery');
  const loader = document.getElementById('loader');

  const lightbox = new SimpleLightbox('.gallery a');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const queryValue = event.target.elements.query.value.trim();

    if (!queryValue) {
      iziToast.error({
        title: 'Помилка',
        message: 'Будь ласка, введіть пошуковий запит.',
      });
      return;
    }

    loader.style.display = 'block';

    try {
      const images = await searchImages(queryValue);
      if (images.length === 0) {
        showErrorMessage();
      } else {
        renderImages(images);
      }
    } catch (error) {
      console.error('Помилка отримання зображень:', error);
      iziToast.error({
        title: 'Помилка',
        message:
          'Не вдалося отримати зображення. Будь ласка, спробуйте пізніше.',
      });
    } finally {
      loader.style.display = 'none';
    }
  });
});
