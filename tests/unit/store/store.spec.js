import Store from '@/store/';

test('default state', () => {
  expect(Store.state).toMatchObject({
    wins: { X: 0, O: 0 },
    players: {
      X: 'O',
      O: 'X'
    },
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    winner: false,
    turn: 1,
    currentPlayer: 'X'
  });
});

test('game over (man!)', () => {
  expect(Store.getters.gameOver).toBe(false);
  Store.commit('setWinner');
  expect(Store.getters.gameOver).toBe(true);
});

test('setSquare', () => {
  Store.commit('setSquare', [0, 0]);

  expect(Store.state.board).toMatchObject([
    ['X', null, null],
    [null, null, null],
    [null, null, null]
  ]);
});

test('nextPlayer', () => {
  Store.commit('nextPlayer');

  expect(Store.state.currentPlayer).toBe('O');
});

test('incrementTurn', () => {
  Store.commit('incrementTurn');

  expect(Store.state.turn).toBe(2);
});

test('tallyWinds', () => {
  Store.commit('tallyWin');

  expect(Store.state.wins).toMatchObject({ X: 0, O: 1 });
});

test('reset', () => {
  Store.commit('reset');

  expect(Store.state).toMatchObject({
    wins: { X: 0, O: 1 },
    players: {
      X: 'O',
      O: 'X'
    },
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    winner: false,
    turn: 1,
    currentPlayer: 'X'
  });
});

test('play winner', async () => {
  await Store.dispatch('play', [1, 1]);
  await Store.dispatch('play', [0, 2]);
  await Store.dispatch('play', [0, 0]);
  await Store.dispatch('play', [1, 2]);
  await Store.dispatch('play', [2, 2]);

  expect(Store.state).toMatchObject({
    wins: { X: 1, O: 1 },
    players: {
      X: 'O',
      O: 'X'
    },
    board: [
      ['X', null, null],
      [null, 'X', null],
      ['O', 'O', 'X']
    ],
    winner: true,
    turn: 5,
    currentPlayer: 'X'
  });

  Store.commit('reset');
});

test('play draw', async () => {
  await Store.dispatch('play', [0, 0]); // x
  await Store.dispatch('play', [1, 1]);
  await Store.dispatch('play', [0, 2]); // x
  await Store.dispatch('play', [0, 1]);
  await Store.dispatch('play', [2, 1]); // x
  await Store.dispatch('play', [1, 0]);
  await Store.dispatch('play', [2, 0]); // x
  await Store.dispatch('play', [2, 2]);
  await Store.dispatch('play', [1, 2]); // x

  expect(Store.state).toMatchObject({
    wins: { X: 1, O: 1 },
    players: {
      X: 'O',
      O: 'X'
    },
    board: [
      ['X', 'O', 'X'],
      ['O', 'O', 'X'],
      ['X', 'X', 'O']
    ],
    winner: false,
    turn: 10,
    currentPlayer: 'O'
  });

  Store.commit('reset');
});

test('getWinner', async () => {
  Store.state.board = [
    ['X', 'O', null],
    ['X', 'X', 'O'],
    ['X', null, 'O']
  ];
  Store.state.turn = 7;

  await Store.dispatch('getWinner').then(x => expect(x).toBe(true));
  await Store.dispatch('reset');

  Store.state.board = [
    ['O', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'X']
  ];
  Store.state.turn = 10;

  await Store.dispatch('getWinner').then(x => expect(x).toBe(false));
});
