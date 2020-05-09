import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ],
    players: ["X", "O"],
    currentPlayer: 0
  },

  mutations: {
    setSquare(state, [x, y]) {
      console.log("setSquare");
      state.board[y][x] = state.players[state.currentPlayer];
      console.log(state.board);
    },

    nextPlayer(state) {
      console.log("nextPlayer");
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      console.log(state.currentPlayer);
    }
  },

  actions: {
    play({ commit }, coordinates) {
      console.log(29, coordinates);
      commit("setSquare", coordinates);
      commit("nextPlayer");
      // check winner
    }
  }
});
