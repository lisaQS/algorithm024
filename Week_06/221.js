/**
 * @param {character[][]} matrix
 * @return {number}
 */
/**
 * 
 * 1. 重复性：dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
 * 2. 定义状态数组：dp[i][j]
 * 3. DP方程：dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;
  const dp = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let max = Number.MIN_VALUE;

  for (let i = 0; i <= rows; i++) {
      i === 0 ? dp[i] = Array(cols + 1).fill(0) : dp[i] = [0];
  }

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
        dp[i][j] = matrix[i - 1][j - 1] === "1" ? Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1 : 0;
        max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
};