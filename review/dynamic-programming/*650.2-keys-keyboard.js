/*
 * @lc app=leetcode id=650 lang=javascript
 *
 * [650] 2 Keys Keyboard
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * state: dp[i]表示 i个A需要的最小操作次数
 * state transition: dp[i] = dp[j] + i / j
 * base case: 0 <= i <= 1, dp[i] = 0; i >= 2, dp[i] = i
 */
var minSteps = function(n) {
  let dp = new Array(n + 1).fill(0);
  for(let i = 2; i <= n; i++) {
    dp[i] = i;
    for(let j = i - 1; j >= 2; j--) {
      if(i % j === 0) {
        dp[i] = dp[j] + i / j;
        break;
      }
    }
  }
  return dp[n];
};
// @lc code=end

