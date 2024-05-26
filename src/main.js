// main.js

import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showMessage,
  addLoader,
  removeLoader,
} from './js/render-functions.js';

let queryValue = '';
let isSearching = false;

window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();

  if (isSearching) {
    return;
  }

  isSearching = true;

  queryValue = event.target.elements.query.value.trim();

  if (!queryValue) {
    showMessage('Please enter a search query.', 'warning');
    isSearching = false;
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
    } else {
      renderImages(images);
    }
  } finally {
    removeLoader();
    isSearching = false;
  }
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
