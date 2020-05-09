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
    _currentPlayer: 0
  },

  getters: {
    currentPlayer: state => state.players[state._currentPlayer]
  },

  mutations: {
    setSquare(state, [x, y]) {
      console.log("setSquare");
      state.board[y][x] = state.players[state._currentPlayer];
      console.log(state.board);
    },

    nextPlayer(state) {
      state._currentPlayer = state._currentPlayer === 0 ? 1 : 0;
      console.log(state._currentPlayer);
    }
  },

  actions: {
    play({ commit }, coordinates) {
      commit("setSquare", coordinates);
      commit("nextPlayer");
      // check winner
    }
  }
});
