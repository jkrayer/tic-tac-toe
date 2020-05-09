<template lang="html">
  <div class="game">
    <board />
    <p>{{ currentPlayer }} Goes!</p>
    <p>Winner? {{ winner }}</p>
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
  }
};
</script>

<style lang="css" scoped></style>
