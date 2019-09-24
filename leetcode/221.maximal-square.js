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
 * state: dp[i][j]表示以i, j为右下角的square的大小
 * state transition: 
 * - 若matrix[i][j] = '0', dp[i][j] = 0
 * - 若dp[i - 1][j - 1] = 0, dp[i][j] = 1
 * - 若matrix[i][j]...matrix[i][j - len], matrix[i][j]...matrix[i - len][j] 中先出现的0位置较短长度记为count, dp[i][j] = count * 2
 * - dp[i][j] = (len + 1) ^ 2 ( len为sqrt(dp[i - 1][j - 1]))
 * base case: dp[i][0] = matrix[0][j], dp[0][j] = matrix[0][j]
 */
var maximalSquare = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let m = matrix.length,
    n = matrix[0].length,
    dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) dp[i][0] = +matrix[i][0];
  for (let j = 0; j < n; j++) dp[0][j] = +matrix[0][j];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === '0') {
        dp[i][j] = 0;
      } else if (dp[i - 1][j - 1] === 0) {
        dp[i][j] = 1;
      } else {
        let row = 0,
          col = 0,
          flag = false,
          len = Math.sqrt(dp[i - 1][j - 1]);
        for (let k = i; k >= i - len; k--) {
          if (matrix[k][j] === '0') {
            flag = true;
            break;
          }
          row++;
        }
        for (let l = j; l >= j - len; l--) {
          if (matrix[i][l] === '0') {
            flag = true;
            break;
          }
          col++;
        }
        if (flag) {
          dp[i][j] = Math.min(row, col) ** 2;
        } else {
          dp[i][j] = (len + 1) ** 2;
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};
