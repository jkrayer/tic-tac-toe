<template lang="html">
  <div class="board">
    <div v-for="(row, y) in board" :key="y" class="row">
      <button
        v-for="(char, x) in row"
        :key="y + x"
        @click="play([x, y])"
        type="button"
        :disabled="char !== '-'"
      >
        {{ char }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    board: state => {
      console.log("map", state);
      return state.board;
    }
  }),

  methods: {
    play(coordinates) {
      this.$store.dispatch("play", coordinates);
    }
  }
};
</script>

<style lang="css" scoped></style>
