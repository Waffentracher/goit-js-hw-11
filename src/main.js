import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showMessage,
  addLoader,
  removeLoader,
} from './js/render-functions.js';

window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  } else {
    console.error('Form element not found.');
  }
});

async function handleSubmit(event) {
  event.preventDefault();

  const queryInput = event.target.elements.query;
  if (!queryInput) {
    showMessage('Search input not found.', 'error');
    return;
  }

  const queryValue = queryInput.value.trim();

  if (!queryValue) {
    showMessage('Please enter a search query.', 'warning');
    return;
  }

  addLoader();
  clearGallery();

  try {
    const images = await fetchImages(queryValue);

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
  if (gallery) {
    gallery.innerHTML = '';
  } else {
    console.error('Gallery element not found.');
  }
}
