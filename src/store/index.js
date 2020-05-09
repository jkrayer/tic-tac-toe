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
    winner: null,
    _turn: 0,
    _currentPlayer: 0
  },

  getters: {
    currentPlayer(state) {
      return state.players[state._currentPlayer];
    }
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
    },

    incrementTurn(state) {
      state._turn = state._turn + 1;
    },

    setWinner(state, winner) {
      state.winner = winner;
    }
  },

  actions: {
    play({ commit, dispatch, state }, coordinates) {
      commit("setSquare", coordinates);
      commit("incrementTurn");

      dispatch("getWinner", coordinates).then(winner => {
        if (winner === false) {
          if (state._turn < 9) {
            return commit("nextPlayer");
          }
          return commit("setWinner", false);
        }
        return commit("setWinner", winner);
      });
    },

    getWinner({ getters, state }, [x, y]) {
      const { board } = state;
      const player = getters["currentPlayer"];

      if (board[y].every(n => n === player)) {
        return `${player} wins row ${y + 1}`;
      }

      if (board.every(row => row[x] === player)) {
        return `${player} wins column ${x + 1}`;
      }

      const li = board.length - 1;
      const { DL, DR } = board.reduce(
        (acc, row, ind) => {
          acc.DL.push([ind, ind]);
          acc.DR.push([li - ind, ind]);
          return acc;
        },
        { DL: [], DR: [] }
      );

      if (DL.every(([x, y]) => board[y][x] === player)) {
        return `${player} wins diagonal left`;
      }

      if (DR.every(([x, y]) => board[y][x] === player)) {
        return `${player} wins diagonal right`;
      }

      return false;
    }
  }
});
