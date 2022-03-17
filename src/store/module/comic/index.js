import { actions } from './actions';
import { mutations } from './mutations';
import { COMIC } from './types';

export const module = {
  namespaced: true,
  state: {
    isLoading: false,
    data: {},
    lastId: 0,
    currentId: 0,
    ratings: {},
  },
  actions,
  mutations,
};

export const name = COMIC;
