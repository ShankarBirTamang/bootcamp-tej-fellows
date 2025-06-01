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
    return (
      //Above Row
      this.getCell(row - 1, col - 1) +
      this.getCell(row - 1, col) +
      this.getCell(row - 1, col + 1) +
      //left & right
      this.getCell(row, col - 1) +
      this.getCell(row, col + 1) +
      //Below Row
      this.getCell(row + 1, col - 1) +
      this.getCell(row + 1, col) +
      this.getCell(row + 1, col + 1)
    );
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */
  conwayRule(cell, livingNeighbors) {
    return cell === 1
      ? livingNeighbors === 2 || livingNeighbors === 3
        ? 1
        : 0
      : livingNeighbors === 3
      ? 1
      : 0;
  }

  tick() {
    const newBoard = this.makeBoard();

    this.forEachCell((row, col, cell) => {
      const neighbors = this.livingNeighbors(row, col);
      newBoard[row][col] = this.conwayRule(cell, neighbors);
    });
    this.board = newBoard;
  }
}
