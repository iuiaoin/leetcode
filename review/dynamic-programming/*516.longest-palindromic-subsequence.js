/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * // 回文串与首尾两个字符有关因此需要两个变量控制
 * 
 * state: dp[i][j]表示以s[i]为首，s[j]为尾的最长回文串的长度
 * state transition: s[i] === s[j], dp[i][j] = dp[i + 1][j - 1] + 2; dp[i][j] = max{dp[i + 1][j], dp[i][j - 1]}
 * base case: dp[i][i] = 1
 */
var longestPalindromeSubseq = function(s) {
  if(!s) return 0;
  let len = s.length;
  let dp = new Array(len).fill(null).map(v => new Array(len).fill(0));
  for(let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for(let j = i + 1; j < len; j++) {
      if(s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
};
// @lc code=end

