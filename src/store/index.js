import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = () => ({
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  winner: false,
  turn: 1,
  currentPlayer: 'X'
});

export default new Vuex.Store({
  state: {
    wins: { X: 0, O: 0 },
    players: {
      X: 'O',
      O: 'X'
    },
    ...defaultState()
  },

  getters: {
    gameOver(state) {
      return state.winner || state.turn > 9;
    }
  },

  mutations: {
    setSquare(state, [x, y]) {
      state.board = state.board.map((row, bY) => {
        return row.map((cell, bX) => {
          return bY === y && bX === x ? state.currentPlayer : cell;
        });
      });
    },

    nextPlayer(state) {
      state.currentPlayer = state.players[state.currentPlayer];
    },

    incrementTurn(state) {
      state.turn = state.turn + 1;
    },

    setWinner(state) {
      state.winner = true;
    },

    tallyWin(state) {
      const { currentPlayer, wins } = state;
      state.wins = Object.assign(wins, {
        [currentPlayer]: wins[currentPlayer] + 1
      });
    },

    reset(state) {
      Object.assign(state, defaultState());
    }
  },

  actions: {
    play({ commit, dispatch, getters }, coordinates) {
      commit('setSquare', coordinates);

      dispatch('getWinner').then(winner => {
        if (winner) {
          commit('tallyWin');
          commit('setWinner');
        } else {
          if (!getters['gameOver']) {
            commit('incrementTurn');
            commit('nextPlayer');
          }
        }
      });
    },

    reset({ commit }) {
      commit('reset');
    },

    getWinner({ state }) {
      // can't have a winner before the 5th turn
      if (state.turn < 5) {
        return false;
      }

      const three = (x, y, z) => {
        if (x === null || y === null || z === null) return false;
        return x === y && y === z;
      };
      const [nw, n, ne, w, c, e, sw, s, se] = state.board.flat();

      return (
        three(nw, n, ne) ||
        three(w, c, e) ||
        three(sw, s, se) ||
        three(nw, w, sw) ||
        three(n, c, s) ||
        three(ne, e, se) ||
        three(nw, c, se) ||
        three(ne, c, sw)
      );
    }
  }
});
