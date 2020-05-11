<template>
  <div id="app">
    <h1 class="title">Tic-Tac-Toe</h1>
    <board />
    <p>{{ turnInstruction }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Board from "./components/Board.vue";

export default {
  name: "App",

  components: {
    Board
  },

  computed: {
    ...mapGetters(["currentPlayer"]),
    ...mapState(["turn"]),

    turnInstruction() {
      return this.turn === 0
        ? "X takes the first turn."
        : `${this.currentPlayer}'s Turn!`;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  width: 82vw;
  max-width: 400px;
  margin: 60px auto 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}
</style>
