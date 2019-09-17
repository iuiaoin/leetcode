/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i][j]表示到i, j有多少条路径
 * state transition:grid[i][j] === 1, dp[i][j] = 0 否则 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let grid = obstacleGrid;
  if (!grid.length) return 0;
  let m = grid.length,
    n = grid[0].length,
    dp = new Array(m).fill(null).map(v => new Array(n).fill(0));

  for (let j = 0; j < n; j++) {
    if(grid[0][j] === 0) {
      dp[0][j] = 1;
    } else {
      for(let k = j; k < n; k++) dp[0][k] = 0;
      break;
    }
  }
  for (let i = 0; i < m; i++) {
    if(grid[i][0] === 0) {
      dp[i][0] = 1;
    } else {
      for(let k = i; k < m; k++) dp[i][0] = 0;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};