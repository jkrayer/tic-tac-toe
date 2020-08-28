import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import Board from '@/components/Board';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    board: [
      [null, 'X', null],
      [null, null, null],
      [null, null, null]
    ],
    winner: false,
    wins: {},
    currentPlayer: 'X'
  },
  getters: {
    gameOver(state) {
      return state.winner;
    }
  },
  mutations: {
    setWinner(state) {
      state.winner = true;
    }
  },
  actions: {
    play() {}
  }
});

describe('components/Board', () => {
  const board = mount(Board, {
    store,
    localVue,
    options: {
      methods: {
        play: jest.fn()
      }
    }
  });

  test('the board is rendered properly', () => {
    expect(board.findAll('button').length).toBe(9);
  });

  test('clicking a button dispatches an event', () => {
    const spy = jest.spyOn(board.vm, 'play');
    board.find('button').trigger('click');
    expect(spy).toHaveBeenCalledWith([0, 0]);
    spy.mockRestore();
  });

  test('buttons can not be clicked twice', () => {
    const spy = jest.spyOn(board.vm, 'play');
    board.findAll('button').at(1).trigger('click');
    expect(spy).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });

  test('there is no modal before a winner has been declared', () => {
    const modal = board.find('div.overlay');
    expect(modal.exists()).toBe(false);
  });

  test('buttons can not be clicked when the game is over', async () => {
    const spy = jest.spyOn(board.vm, 'play');
    store.commit('setWinner');

    await board.vm.$nextTick();

    board.findAll('button').at(3).trigger('click');
    expect(spy).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });

  test('there is no modal before a winner has been declared', () => {
    const modal = board.find('div.overlay');
    expect(modal.exists()).toBe(true);
  });
});
