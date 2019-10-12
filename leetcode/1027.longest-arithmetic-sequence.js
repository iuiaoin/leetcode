/*
 * @lc app=leetcode id=1027 lang=javascript
 *
 * [1027] Longest Arithmetic Sequence
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
/**
 * 思路：因为差有可能为负数，所以使用map
 * state: dp[i][j]表示以A[i]结尾的，差为j的算数子串的长度
 * state transition: dp[i][j] = (dp[k][j] || 1) + 1，0 <= k < i,求max{ dp[i][j] }
 */
var longestArithSeqLength = function(A) {
  let res = 2,
      dp = {};
  for(let i = 0; i < A.length; i++) {
    dp[i] = {};
    for(let j = 0; j < i; j++) {
      let diff = A[i] - A[j];
      dp[i][diff] = (dp[j][diff] || 1) + 1;
      res = Math.max(res, dp[i][diff]);
    }
  }
  return res;
};
// @lc code=end

