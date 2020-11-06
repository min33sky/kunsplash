import axios from 'axios';
require('dotenv').config();

const key = process.env.REACT_APP_API_KEY;

export function getSplashImage(page = 1) {
  return axios
    .get(`https://api.unsplash.com/photos/?client_id=${key}&page=${page}&per_page=20`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
