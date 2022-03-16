import { actions } from './actions';
import { mutations } from './mutations';
import { COMIC_RATING } from './types';

export const module = {
  namespaced: true,
  state: {
    data: {},
    lastId: 0,
    currentId: 0,
    ratings: {},
  },
  actions,
  mutations,
};

export const name = COMIC_RATING;
