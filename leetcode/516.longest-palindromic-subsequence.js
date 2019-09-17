/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i][j]表示s.slice(i, j)的最长回文串
 * state transition: 若s[i] == s[j], dp[i][j] = dp[i + 1][j - 1] + 2, 否则dp[i][j] = max{dp[i + 1][j], dp[[i],[j - 1]]};
 * initialization: dp[i][i] = 1
 */
var longestPalindromeSubseq = function(s) {
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

