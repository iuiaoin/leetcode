/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * state: dp[i][j]表示到i,j的path的数量
 * state transition: dp[i][j] = 0(grid[i][j] = 1); dp[i][j] = dp[i - 1][j] + dp[i][j - 1](grid[i][j] = 0)
 * base case: dp[0][0] = grid[0][0] === 0 ? 1 : 0
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let grid = obstacleGrid;
  if(!grid.length || !grid[0].length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m + 1).fill(null).map(v => new Array(n + 1).fill(0));
  dp[1][1] = grid[0][0] === 1 ? 0 : 1;
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(i === 1 && j === 1) continue;
      if(grid[i - 1][j - 1] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

