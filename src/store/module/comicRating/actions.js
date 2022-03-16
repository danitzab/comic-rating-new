import comicRatingApi from '@/api/comicRatingApi';
import { types } from './types';

export const actions = {
  [types.actions.GET_LAST_COMIC]({ commit }) {
    comicRatingApi.getLastComic().then((response) => {
      commit(types.mutations.SET_DATA, response.data);
      commit(types.mutations.SET_LAST_ID, response.data.num);
      commit(types.mutations.SET_CURRENT_ID, response.data.num);
    }).catch((error) => {
      console.error(`Error: ${error}`);
    });
  },

  [types.actions.GET_COMIC_BY_ID]({ commit }, payload) {
    comicRatingApi.getComicById(payload).then((response) => {
      commit(types.mutations.SET_DATA, response.data);
      commit(types.mutations.SET_CURRENT_ID, response.data.num);
    }).catch((error) => {
      console.error(`Error: ${error}`);
    });
  },

  [types.actions.UPDATE_RATING]({ commit, state }, { data, rating }) {
    const { ratings } = state;
    commit(types.mutations.SET_RATINGS, {
      ...ratings,
      [data.num]: {
        id: data.num,
        title: data.title,
        year: data.year,
        img: data.img,
        rating,
      },
    });
  },
};

export default {};
