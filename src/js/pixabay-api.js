import axios from 'axios';

import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(query, page) {
  const {
    data: { hits, totalHits },
  } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '51039483-d1ef6922b01cd3fd853d7df89',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return { hits, totalHits };
}
