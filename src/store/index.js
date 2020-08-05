import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = () => ({
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  winner: null,
  turn: 0,
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

  mutations: {
    setSquare(state, [x, y]) {
      state.board = state.board.map((row, bY) => {
        return row.map((cell, bX) => {
          return bY === y && bX === x ? state.currentPlayer : cell;
        });
      });
    },

    nextPlayer(state) {
      console.log('play', state.players[state.currentPlayer]);
      state.currentPlayer = state.players[state.currentPlayer];
    },

    incrementTurn(state) {
      state.turn = state.turn + 1;
    },

    setWinner(state, winner) {
      state.winner = winner;
    },

    tallyWin(state) {
      const { currentPlayer, wins } = state;
      const tally = wins[currentPlayer] + 1;
      state.wins = Object.asign(wins, { [currentPlayer]: tally });
    },

    reset(state) {
      Object.assign(state, defaultState());
    }
  },

  actions: {
    play({ commit, dispatch, state }, coordinates) {
      commit('setSquare', coordinates);
      commit('incrementTurn');

      dispatch('getWinner', coordinates).then(winner => {
        if (winner[0] === false) {
          if (state.turn < 9) {
            console.log('play');
            return commit('nextPlayer');
          }
          return commit('setWinner', winner);
        }
        commit('tallyWin');
        return commit('setWinner', winner);
      });
    },

    reset({ commit }) {
      commit('reset');
    },

    getWinner({ getters, state }, [x, y]) {
      const { board } = state;
      const player = getters['currentPlayer'];

      if (board[y].every(n => n === player)) {
        return [true, player, 'row', y + 1];
      }

      if (board.every(row => row[x] === player)) {
        return [true, player, 'col', x + 1];
      }

      // diagonal left
      if (x === y) {
        let dl = true;
        for (let xy = 0; xy < board.length; xy++) {
          dl = board[xy][xy] === player;
          if (dl === false) break;
        }
        if (dl === true) {
          return [true, player, 'dia', 1];
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
          return [true, player, 'dia', 2];
        }
      }

      return [false, '', '', ''];
    }
  }
});
