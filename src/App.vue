<template>
  <v-app class="comic-rating">
    <Header />
    <div class="comic-rating__content">
      <div class="columns m-0">
        <div class="column is-8">
          <Comic />
        </div>
        <div class="column">
          <Ranking />
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Comic from '@/components/Comic.vue';
import Ranking from '@/components/Ranking.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Comic,
    Ranking,
    Footer,
  },
};
</script>
