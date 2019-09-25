/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i][j]表示以i, j为右下角的square的边长
 * state transition: 若matrix[i][j] = '1'，dp[i][j] = min{dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1] } + 1
 * base case: dp[i][j]初始化为0，从1, 1开始
 */
var maximalSquare = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let m = matrix.length,
    n = matrix[0].length,
    dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  let sideLen = 0;
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        sideLen = Math.max(sideLen, dp[i][j]);
      }
    }
  }
  return sideLen ** 2;
};
