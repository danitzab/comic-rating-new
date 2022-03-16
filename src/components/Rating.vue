<template>
  <v-rating
    v-model="rating"
    color="yellow darken-3"
    background-color="grey darken-1"
    empty-icon="$ratingFull"
    half-increments
    hover
    :size="size"
  ></v-rating>
</template>

<script>
export default {
  props: {
    value: { type: Number, required: true },
    size: { type: String, default: () => '30' },
  },
  computed: {
    rating: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
