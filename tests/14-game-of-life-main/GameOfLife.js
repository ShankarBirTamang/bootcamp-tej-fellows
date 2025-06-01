class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array filled with zeros
   */

  makeBoard() {
    return Array.from({ length: this.height }, () =>
      new Array(this.width).fill(0)
    );
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */
  cellExists(row, col) {
    return row >= 0 && row < this.height && col >= 0 && col < this.width;
  }

  getCell(row, col) {
    return this.cellExists(row, col) ? this.board[row][col] : 0;
  }

  setCell(value, row, col) {
    if (this.cellExists(row, col)) {
      this.board[row][col] = value;
    }
  }

  toggleCell(row, col) {
    this.board[row][col] = this.getCell(row, col) === 1 ? 0 : 1;
  }

  forEachCell(iterator) {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        iterator(row, col, this.board[row][col]);
      }
    }
  }

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
