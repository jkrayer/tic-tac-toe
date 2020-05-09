<template lang="html">
  <div class="game">
    <board />
    <p>{{ currentPlayer }} Goes!</p>
    <p>
      Winner? {{ winner }}
      <button v-if="winner !== null" @click="handleClick" type="button">
        Play Again
      </button>
    </p>
    <!-- Winner Overlay Play again button -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Board from "./Board.vue";

export default {
  name: "Game",

  components: {
    Board
  },

  computed: {
    ...mapGetters(["currentPlayer"]),
    ...mapState(["winner"])
  },

  methods: {
    handleClick() {
      this.$store.dispatch("reset");
    }
  }
};
</script>

<style lang="css" scoped></style>
