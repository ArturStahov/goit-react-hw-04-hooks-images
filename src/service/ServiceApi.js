import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '18487031-50da0da9ba31764b7f32dc2fc';

export default function ServiceApi(query, page) {
  return axios
    .get(
      `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&page=${page}&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
}
