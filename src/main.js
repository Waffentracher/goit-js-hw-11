// main.js

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImages } from './js/pixabay-api.js';
import { renderImages, showErrorMessage } from './js/render-functions.js';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    iziToast.error({
      title: 'Помилка',
      message: 'Будь ласка, введіть пошуковий запит.',
    });
    return;
  }

  loader.style.display = 'block';

  try {
    const images = await searchImages(searchTerm);
    if (images.length === 0) {
      showErrorMessage();
    } else {
      renderImages(images);
    }
  } catch (error) {
    console.error('Помилка отримання зображень:', error);
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося отримати зображення. Будь ласка, спробуйте пізніше.',
    });
  } finally {
    loader.style.display = 'none';
  }
});
