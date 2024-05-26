const YOUR_API_KEY = '42806027-cb009af69a31f8552609fdd7f';

export async function searchImages(query) {
  const url = `https://pixabay.com/api/?key=${YOUR_API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.hits.length === 0) {
      return [];
    } else {
      return data.hits.map(image => ({
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
        likes: image.likes,
        views: image.views,
        comments: image.comments,
        downloads: image.downloads,
      }));
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
