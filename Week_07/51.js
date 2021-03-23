/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const cols = new Set();
  const pie = new Set();
  const na = new Set();
  const result = [];

  const helper = (row) => {
    if (row === n) {
      const stringBoard = board.slice();
      for (let i = 0; i < n; i++) {
        stringBoard[i] = stringBoard[i].join('');
      }
      result.push(stringBoard);
      return ;
    }

    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !pie.has(row + col) && !na.has(row - col)) {
        board[row][col] = 'Q';
        cols.add(col);
        pie.add(row + col);
        na.add(row - col);
        helper(row + 1);
        board[row][col] = '.';
        cols.delete(col);
        pie.delete(row + col);
        na.delete(row - col);
      }
    }
  };
  helper(0);
  return result;
};