class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
    this.generation = 0;
    this.prevBoard = null;
    this.stable = false;
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
    //store current board as prev before updating
    this.prevBoard = this.board.map((row) => [...row]);
    const newBoard = this.makeBoard();

    this.forEachCell((row, col, cell) => {
      const neighbors = this.livingNeighbors(row, col);
      newBoard[row][col] = this.conwayRule(cell, neighbors);
    });
    this.stable = this.boardsEqual(this.prevBoard, newBoard); //check if board is stable
    this.board = newBoard;
    if (!this.stable) {
      this.generation++;
    }
    return this.generation;
  }

  boardsEqual(board1, board2) {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (board1[row][col] !== board2[row][col]) {
          return false;
        }
      }
    }
    return true;
  }

  randomize() {
    this.forEachCell((row, col) => {
      this.setCell(Math.random() > 0.85 ? 1 : 0, row, col);
    });
    this.generation = 0;
  }

  clear() {
    this.forEachCell((row, col) => {
      this.setCell(0, row, col);
    });
    this.generation = 0;
  }
}
