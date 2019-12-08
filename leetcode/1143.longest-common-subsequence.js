/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i][j] 表示第i，j个字符作为结尾的lcs的长度
 * state transition: text1[i] === text2[j], dp[i][j] = dp[i - 1][j - 1] + 1; dp[i][j] = max{dp[i - 1][j], dp[i][j - 1]}
 * base case: dp[0][0] = dp[0][1] = dp[1][0] = 0
 */
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;
  let dp = new Array(len1 + 1).fill(null).map(v => new Array(len2 + 1).fill(0));
  for(let i = 1; i <= len1; i++) {
    for(let j = 1; j <= len2; j++) {
      if(text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2];
};
// @lc code=end

