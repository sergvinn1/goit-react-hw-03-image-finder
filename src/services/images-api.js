export const fetchImages = (query = '', pageNumber = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=20300449-ccc28e6e1b766fb7038aab942&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 2000))) 
    .then(res => res.json())
    .then(data => data.hits);
};

export { fetchImages as default };
