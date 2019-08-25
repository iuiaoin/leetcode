/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：设dp[i][j]为第i行第j列的路径数，则dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */
var uniquePaths = function(m, n) {
  if(m < 1 || n < 1) return 0;
  let dp = new Array(m).fill(null).map(v => new Array(n).fill(0));
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(i === 0 && j === 0) dp[i][j] = 1;
      if(i > 0) dp[i][j] += dp[i - 1][j];
      if(j > 0) dp[i][j] += dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

