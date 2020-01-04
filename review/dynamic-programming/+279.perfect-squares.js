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
 * state: dp[i] 数字i的需要的最少平方数
 * state transition: dp[i] = min{dp[i - j] + 1}
 * base case: dp[0] = 0
 */
var numSquares = function(n) {
  let arr = [];
  for(let i = 1; i * i <= n; i++) {
    arr.push(i * i);
  }
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for(let i = 1; i <= n; i++) {
    for(let j = 0; arr[j] <= i; j++) {
      dp[i] = Math.min(dp[i - arr[j]] + 1, dp[i]);
    }
  }
  return dp[n];
};
// @lc code=end

