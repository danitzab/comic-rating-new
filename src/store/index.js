import Vue from 'vue';
import Vuex from 'vuex';

import { name as nameComic, module as moduleComic } from './module/comic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [nameComic]: moduleComic,
  },
});
