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
var uniquePathsWithObstacles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  if (grid[0][0] == 1) return 0;

  grid[0][0] = 1;

  for (let i = 1; i < m; i++)
    grid[i][0] = (grid[i][0] === 0 && grid[i - 1][0] === 1) ? 1 : 0;

  for (let i = 1; i < n; i++)
    grid[0][i] = (grid[0][i] === 0 && grid[0][i - 1] === 1) ? 1 : 0;


  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0; 
        continue;
      }
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }

  return grid[m - 1][n - 1]
};