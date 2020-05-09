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
      state.board = state.board.map((row, bY) => {
        return row.map((cell, bX) => {
          return bY === y && bX === x
            ? state.players[state._currentPlayer]
            : cell;
        });
      });
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
