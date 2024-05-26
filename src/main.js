import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showMessage,
  addLoader,
  removeLoader,
} from './js/render-functions.js';

let queryValue = '';

window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();

  queryValue = event.target.elements.query.value.trim();
  console.log('Query:', queryValue);

  if (!queryValue) {
    showMessage('Please enter a search query.', 'warning');
    return;
  }

  addLoader();
  clearGallery();

  try {
    const images = await fetchImages(queryValue);
    console.log('Fetched images:', images);

    if (images.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    renderImages(images);
  } catch (error) {
    console.error('Error processing search:', error);
    showMessage(
      'An error occurred while processing your search. Please try again later.'
    );
  } finally {
    removeLoader();
  }
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
