<template lang="html">
  <div class="game">
    <board />
    Directions Winner Overlay Play again button
  </div>
</template>

<script>
import Board from "./Board.vue";

export default {
  name: "Game",

  components: {
    Board
  }
};
</script>

<style lang="css" scoped></style>
