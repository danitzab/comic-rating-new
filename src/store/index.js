import Vue from 'vue';
import Vuex from 'vuex';

import { name as nameComicRating, module as moduleComicRating } from './module/comicRating';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [nameComicRating]: moduleComicRating,
  },
});
