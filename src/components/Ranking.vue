<template>
  <div class="card-ranking p-5">
    <div
      class="
        font-caveat-brush
        has-text-primary
        is-size-3
        has-text-weight-bold has-text-centered
        mt-3
      "
    >
      Top {{ top }} - Mejores Comic
    </div>

    <div v-for="(item, index) in ranking" :key="index">
      <v-divider v-if="index !== 0"></v-divider>
      <div class="m-4">
        <div class="columns is-mobile">
          <div class="column is-6-mobile is-4-tablet">
            <v-badge
              :content="`#${index + 1}`"
              :left="true"
              color="primary"
            >
              <v-img
                max-width="100"
                max-height="400"
                :src="item.img"
                :alt="item.alt"
              ></v-img>
            </v-badge>
          </div>
          <div class="column">
            <div class="is-size-5 has-text-weight-semibold">
              {{ item.title }}
            </div>
            <div class="">{{ item.year }}</div>
            <div class="has-text-yellow has-text-weight-semibold">
              <span class="is-size-5">{{
                parseFloat(item.rating).toFixed(1)
              }}</span>
              /
              <span class="is-size-6">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { types } from '@/store/module/comic/types';

export default {
  data() {
    return {
      top: 3,
      ranking: [],
    };
  },
  computed: {
    ...mapState(types.PATH, ['ratings']),
  },
  watch: {
    ratings: function watchRatings(val) {
      this.updateRanking(val);
    },
  },
  methods: {
    updateRanking(data) {
      this.ranking = Object.values(data)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, this.top);
    },
  },
};
</script>
