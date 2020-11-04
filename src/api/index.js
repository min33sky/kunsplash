import axios from 'axios';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

export function getSplashImage(page = 1) {
  return axios
    .get(`https://api.unsplash.com/photos/?client_id=${key}&page=${page}&per_page=30`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
