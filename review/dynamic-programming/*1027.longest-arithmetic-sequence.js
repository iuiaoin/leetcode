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
 * #出现负数使用map来存
 * state: dp[i][j]表示以A[i]为结尾，差为j的las长度
 * state transition: dp[i][j] = dp[k][j] + 1
 * base case: dp[i][j] = 1
 */
var longestArithSeqLength = function(A) {
  let dp = {};
  let len = A.length;
  if(len < 1) return 0;
  let res = 1;
  for(let i = 0; i < len; i++) {
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

