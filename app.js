function isSolved(board) {
  const X = 1,
    O = 2,
    emptyField = 0,
    unfinished=-1;
  // returns 1 fi "x" wins or 2 if "o" wins in a row
  for (i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== emptyField
    ) {
      return board[i][0];
    }
  }
  // returns 1 fi "x" wins or 2 if "o" wins in a column
  for (j = 0; j < 3; j++) {
    if (
      board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== emptyField
    ) {
      return board[0][j];
    }
    
  }
  // returns 1 fi "x" wins or 2 if "o" wins in a diagonal
  if (
    board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== emptyField
  ) {
    return board[0][0];
  }
  if (
     board[0][2] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== emptyField
  ) {
    return board[0][2];
  }
  //return -1 if not yet finished
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (board[i][j] === emptyField) {
        return unfinished;
      }
    }
  }
  //return 0 if it's a cat's game
  return emptyField;
}

module.exports = isSolved;
