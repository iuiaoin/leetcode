/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i]代表i用完全平方数表示的最小的数量
 * state transition: dp[i] = Min{ dp[i - j * j] + 1 }, i >= j * j, j > 0
 * base case: dp[0] = 0
 */
var numSquares = function(n) {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j * j <= i; j++ ) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
// @lc code=end

