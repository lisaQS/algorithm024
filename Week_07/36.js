/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const columns = new Array(9).fill(0).map(() => new Map());
  const rows = new Array(9).fill(0).map(() => new Map());
  const boxes = new Array(9).fill(0).map(() => new Map());

  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        const value = board[i][j];
        if(value === '.') continue;
        
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor( j / 3);
        if ( boxes[boxIndex].has(value) || 
        rows[i].has(value) || 
        columns[j].has(value)) {
            return false
        } else {
            boxes[boxIndex].set(value,1);
            rows[i].set(value,1);
            columns[j].set(value,1);
        }
    }
  }
  return true;
};