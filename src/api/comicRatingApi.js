import axios from 'axios';

const getLastComic = () => axios.get('/info.0.json');

const getComicById = (comicId) => axios.get(`/${comicId}/info.0.json`);

export default {
  getLastComic,
  getComicById,
};
