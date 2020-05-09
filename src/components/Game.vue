<template lang="html">
  <div class="game">
    <board />
    <p>{{ currentPlayer }} Goes!</p>
    <!-- Winner Overlay Play again button -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Board from "./Board.vue";

export default {
  name: "Game",

  components: {
    Board
  },

  computed: {
    ...mapGetters(["currentPlayer"])
  }
};
</script>

<style lang="css" scoped></style>
