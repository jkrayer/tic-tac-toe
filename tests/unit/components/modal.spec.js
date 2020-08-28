import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import Modal from '@/components/Modal';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    winner: false,
    wins: { X: 2, O: 3 },
    currentPlayer: 'X'
  },
  getters: {
    gameOver(state) {
      return state.winner;
    }
  },
  actions: {
    reset: jest.fn()
  }
});

describe('components/Modal', () => {
  let modal;

  beforeEach(() => {
    modal = mount(Modal, {
      store,
      localVue
    });
  });

  test('the modal composes a win message', () => {
    expect(modal.vm.winMessage).toBe('X and 0 tie!');
    store.state.winner = true;
    expect(modal.vm.winMessage).toBe('X wins!');
  });

  test('the modal shows a win tally', () => {
    expect(modal.vm.winTally).toMatchObject(['X 2', 'O 3']);
    expect(modal.find('p[data-testid="tally"]').text()).toBe('Wins: X 2 | O 3');
  });

  test('clicking play again resets the game', async () => {
    const spy = jest.spyOn(modal.vm.$store, 'dispatch');
    await modal.find('button').trigger('click');

    expect(spy).toHaveBeenCalledWith('reset');
    spy.mockRestore();
  });
});
