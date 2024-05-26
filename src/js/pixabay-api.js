import axios from 'axios';

const API_KEY = '42806027-cb009af69a31f8552609fdd7f';
const IMAGES_PER_PAGE = 15;

async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${IMAGES_PER_PAGE}`;

  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export { fetchImages };
