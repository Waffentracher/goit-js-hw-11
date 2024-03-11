import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showMessage, addLoader } from './js/render-functions.js';

window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();

  if (!query) {
    showMessage('Please enter a search query.', 'warning');
    return;
  }

  addLoader(); // Додано виклик функції для відображення завантажувача

  try {
    const images = await fetchImages(query);

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
  }
}
