<template>
  <div id="app">
    <h1>Tic-Tac-Toe</h1>
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
import Board from "./components/Board.vue";

export default {
  name: "App",

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  margin-top: 60px;
}
</style>
