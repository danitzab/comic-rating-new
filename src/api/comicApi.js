import axios from 'axios';

const URL_BASE = process.env.VUE_APP_API_URL;

const getLastComic = () => axios.get(`${URL_BASE}/info.0.json`);

const getComicById = (comicId) => axios.get(`${URL_BASE}/${comicId}/info.0.json`);

export default {
  getLastComic,
  getComicById,
};
