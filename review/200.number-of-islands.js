/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(!grid.length || !grid[0].length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let res = 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === '1') {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;

  function dfs(i, j) {
    if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};
// @lc code=end

