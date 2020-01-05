/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
/**
 * state: dp[i][j]表示以i - 1, j - 1为右下角的square的边长
 * state transition: dp[i][j] = min{dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]} + 1
 * base case: dp[0][0] = 0
 */
var maximalSquare = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let len = 0;
  let dp = new Array(m + 1).fill(null).map(v => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        len = Math.max(len, dp[i][j]);
      }
    }
  }
  return len ** 2;
};
// @lc code=end