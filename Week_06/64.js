/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 重复性：dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 * 定义状态数组：dp[i,j]
 * DP方程：dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 */
var minPathSum = function(grid) {
  const dp = grid;
  const m = grid.length;
  const n = grid[0].length;

  for(let i = 1; i < m; i++) {
    dp[i][0] += dp[i - 1][0];
  }

  for(let j = 1; j < n; j++) {
    dp[0][j] += dp[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          dp[i][j] += Math.min(dp[i-1][j], dp[i][j-1])
      }
  }
  return dp[m - 1][n - 1];
};