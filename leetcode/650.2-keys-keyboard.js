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
 * 思路：这是个找规律题😂,可以列出得到AAAAAAAA的三种不同操作方式可知，最小操作次数为AAAA -> AAAAAAAA的方式，dp[8] = dp[4] + 8 / 4
 * state: dp[i]表示要得到i个A的最小操作次数
 * state transition: dp[i] = dp[j] + i / j
 * base case: dp[0] = dp[1] = 0
 */
var minSteps = function(n) {
  let dp = new Array(n + 1).fill(0);
  for(let i = 2; i <= n; i++) {
    dp[i] = i;
    for(let j = i - 1; j > 1; j--) {
      if(i % j === 0) {
        dp[i] = dp[j] + i / j;
        break;
      }
    }
  }
  return dp[n];
};
// @lc code=end

