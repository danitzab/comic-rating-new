import { types } from './types';

export const mutations = {
  [types.mutations.SET_DATA](state, payload) {
    state.data = payload;
  },
  [types.mutations.SET_CURRENT_ID](state, payload) {
    state.currentId = payload;
  },
  [types.mutations.SET_LAST_ID](state, payload) {
    state.lastId = payload;
  },
  [types.mutations.SET_RATINGS](state, payload) {
    state.ratings = payload;
  },
};

export default {};
