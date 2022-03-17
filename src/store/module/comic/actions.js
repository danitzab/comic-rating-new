import comicApi from '@/api/comicApi';
import { types } from './types';

export const actions = {
  [types.actions.GET_LAST_COMIC]({ commit }) {
    commit(types.mutations.SET_IS_LOADING, true);
    comicApi.getLastComic().then((response) => {
      commit(types.mutations.SET_DATA, response.data);
      commit(types.mutations.SET_LAST_ID, response.data.num);
      commit(types.mutations.SET_CURRENT_ID, response.data.num);
      commit(types.mutations.SET_IS_LOADING, false);
    }).catch((error) => {
      console.error(`Error: ${error}`);
    });
  },

  [types.actions.GET_COMIC_BY_ID]({ commit }, payload) {
    commit(types.mutations.SET_IS_LOADING, true);
    comicApi.getComicById(payload).then((response) => {
      commit(types.mutations.SET_DATA, response.data);
      commit(types.mutations.SET_CURRENT_ID, response.data.num);
      commit(types.mutations.SET_IS_LOADING, false);
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
