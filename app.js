function isSolved(board) {
  // returns 1 if x wins in a row
  for (i = 0; i < 3; i++) {
    if (
      board[i][0] === 1 &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== 0
    ) {
      return 1;
    }
    // returns 2 if O wins in a row

    if (
      board[i][0] === 2 &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== 0
    ) {
      return 2;
    }
  }
  // returns 1 if x wins in a column
  for (j = 0; j < 3; j++) {
    if (
      board[0][j] === 1 &&
      board[0][j] === board[1][j] &&
      board[1][j] === board[2][j] &&
      board[0][j] !== 0
    ) {
      return 1;
    }
    // returns 2 if O wins in a column
    if (
      board[0][j] === 2 &&
      board[0][j] === board[1][j] &&
      board[1][j] === board[2][j] &&
      board[0][j] !== 0
    ) {
      return 2;
    }
  }
  // returns 1 if X wins in a diagonal
  if (
    board[0][0] === 1 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== 0
  ) {
    return 1;
  }
  if (
    board[2][0] === 1 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[0][2] &&
    board[2][0] !== 0
  ) {
    return 1;
  }
  // returns 2 if O wins in a diagonal

  if (
    board[0][0] === 2 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== 0
  ) {
    return 2;
  }
  if (
    board[2][0] === 2 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[0][2] &&
    board[2][0] !== 0
  ) {
    return 2;
  }
  //return -1 if not yet finished
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        return -1;
      }
    }
  }
  //return 0 if it's a cat's game

  return 0;
}

module.exports = isSolved;
