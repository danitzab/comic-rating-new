import comicApi from '@/api/comicApi';
import { types } from './types';

export const actions = {
  async [types.actions.GET_LAST_COMIC]({ commit }) {
    try {
      commit(types.mutations.SET_IS_LOADING, true);
      const response = await comicApi.getLastComic();
      commit(types.mutations.SET_DATA, response.data);
      commit(types.mutations.SET_LAST_ID, response.data.num);
      commit(types.mutations.SET_CURRENT_ID, response.data.num);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      commit(types.mutations.SET_IS_LOADING, false);
    }
  },

  async [types.actions.GET_COMIC_BY_ID]({ commit }, payload) {
    try {
      commit(types.mutations.SET_IS_LOADING, true);
      const response = await comicApi.getComicById(payload);
      commit(types.mutations.SET_DATA, response.data);
      commit(types.mutations.SET_CURRENT_ID, response.data.num);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      commit(types.mutations.SET_IS_LOADING, false);
    }
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
