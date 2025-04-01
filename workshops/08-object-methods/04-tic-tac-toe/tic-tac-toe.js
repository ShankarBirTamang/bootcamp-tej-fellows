// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (givenChar, rowNum, colNum) {
    if (!this.board[rowNum][colNum]) {
      this.board[rowNum][colNum] = givenChar;
    }
    // else {
    //   console.log("Invalid move, spot already taken."); //checkpoint
    //   return "Already occupied";
    // }
    console.log(this.board); //checkpoint
    return this.board;
  },

  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log(this.board);
    return this.board;
  },
};
ticTacToe.move("x", 0, 1);
// ticTacToe.move("O", 0, 1);
// ticTacToe.move("x", 1, 1);
// ticTacToe.move("O", 2, 1);
// ticTacToe.move("x", 2, 2);
