import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  const lightbox = new SimpleLightbox('.gallery a');

  const html = images
    .map(
      image => `
    <div class="card">
      <a href="${image.largeImageURL}" title="${image.tags}" data-lightbox="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <div class="card-content">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </div>
  `
    )
    .join('');
  gallery.innerHTML = html;

  lightbox.refresh();
}

export function showErrorMessage() {
  iziToast.info({
    title: 'Info',
    message: 'No images found for your query. Please try again!',
  });
}
