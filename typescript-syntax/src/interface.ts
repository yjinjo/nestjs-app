interface Piece {
  move(from: Cell, to: Cell): boolean;
}

interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row: row,
        col: col,
      });
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
