<template>
  <div
    class="comic is-flex is-align-items-center is-justify-content-center p-5"
  >
    <v-btn
      class="mx-2 has-background-primary has-text-white"
      fab
      small
      elevation="0"
      @click="getComicById(currentId - 1)"
    >
      <v-icon dark>mdi-chevron-left</v-icon>
    </v-btn>

    <div class="has-text-centered">
      <h4
        class="
          font-caveat-brush
          has-text-primary
          is-size-3
          has-text-weight-bold
          mt-3
        "
      >
        {{ data.title }}
      </h4>
      <v-list-item-subtitle class="has-text-weight-semibold">
        {{ data.year }}
      </v-list-item-subtitle>
      <div class="p-5">
        <img
          class="comic-image"
          :src="data.img"
          :alt="data.alt"
        />
      </div>
      <div class="is-size-6 has-text-weight-semibold">Calificación</div>
      <Rating v-model="rating" />
    </div>
    <v-btn
      v-show="currentId != lastId"
      class="mx-2 has-background-primary has-text-white"
      fab
      small
      elevation="0"
      @click="getComicById(currentId + 1)"
    >
      <v-icon dark>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { types } from '@/store/module/comicRating/types';

import Rating from '@/components/Rating.vue';

export default {
  components: {
    Rating,
  },
  computed: {
    ...mapState(types.PATH, ['data', 'currentId', 'lastId', 'ratings']),
    rating: {
      get() {
        return this.ratings[this.data.num]?.rating || 0;
      },
      set(val) {
        this.updateRating({
          data: this.data,
          rating: val,
        });
        return val;
      },
    },
  },
  methods: {
    ...mapActions(types.PATH, {
      getComicById: types.actions.GET_COMIC_BY_ID,
      getLastComic: types.actions.GET_LAST_COMIC,
      updateRating: types.actions.UPDATE_RATING,
    }),
  },
  mounted() {
    this.getLastComic();
  },
};
</script>
