<template>
  <div id="app">
    <h1 class="title">Tic-Tac-Toe</h1>
    <board />
    <div class="row">
      <div class="col">
        <p>
          <span class="b">Wins:</span> X {{ wins[0] }}
          <span class="super">|</span> O {{ wins[1] }}
        </p>
      </div>
      <div class="col">
        <p class="text-right">{{ turnInstruction }}</p>
      </div>
    </div>
    <!-- TODO: Make this a modal -->
    <div v-if="winner !== null">
      {{ winner ? winner[0] : "" }}
      <button v-if="winner !== null" @click="handleClick" type="button">
        Play Again
      </button>
    </div>
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
    ...mapState(["winner", "turn", "wins"]),

    turnInstruction() {
      return this.turn === 0
        ? "X takes the first turn."
        : `${this.currentPlayer}'s Turn!`;
    }
  },

  methods: {
    handleClick() {
      this.$store.dispatch("reset");
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
  color: #222;
}

.title {
  text-align: center;
}

.row {
  display: flex;
}

.col {
  flex-grow: 1;
}

.text-right {
  text-align: right;
}

.b {
  font-weight: 700;
}

.super {
  position: relative;
  top: -2px;
  display: inline-block;
}
</style>
