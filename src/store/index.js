import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultState = () => ({
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ],
  players: ["X", "O"],
  winner: null,
  turn: 0,
  _currentPlayer: 0
});

export default new Vuex.Store({
  state: {
    wins: [0, 0],
    ...defaultState()
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
      state.turn = state.turn + 1;
    },

    setWinner(state, winner) {
      state.winner = winner;
    },

    tallyWin(state) {
      console.log("tally");
      state.wins = state.wins.map((win, i) =>
        i === state._currentPlayer ? win + 1 : win
      );
    },

    reset(state) {
      Object.assign(state, defaultState());
    }
  },

  actions: {
    play({ commit, dispatch, state }, coordinates) {
      commit("setSquare", coordinates);
      commit("incrementTurn");

      dispatch("getWinner", coordinates).then(winner => {
        if (winner[0] === false) {
          if (state.turn < 9) {
            return commit("nextPlayer");
          }
          return commit("setWinner", winner);
        }
        commit("tallyWin");
        return commit("setWinner", winner);
      });
    },

    reset({ commit }) {
      commit("reset");
    },

    getWinner({ getters, state }, [x, y]) {
      const { board } = state;
      const player = getters["currentPlayer"];

      if (board[y].every(n => n === player)) {
        return [true, player, "row", y + 1];
        // return [`${player} wins row ${row}`, `row-${row}`];
      }

      if (board.every(row => row[x] === player)) {
        return [true, player, "col", x + 1];
      }

      // diagonal left
      if (x === y) {
        let dl = true;
        for (let xy = 0; xy < board.length; xy++) {
          dl = board[xy][xy] === player;
          if (dl === false) break;
        }
        if (dl === true) {
          return [true, player, "dia", 1];
        }
      }

      //diagonal right
      if (x + y === board.length - 1) {
        let dr = true;
        for (let by = 0, bx = board.length - 1; by < board.length; by++, bx--) {
          dr = board[by][bx] === player;
          if (dr === false) break;
        }
        if (dr === true) {
          return [true, player, "dia", 2];
        }
      }

      return [false, "", "", ""];
    }
  }
});
