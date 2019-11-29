/*
 * @lc app=leetcode id=694 lang=javascript
 *
 * [694] Number of Distinct Islands
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 思路：遍历grid，dfs将遍历过的1变为0，同时记录岛屿的坐标路径作为区分
 */
var numDistinctIslands = function(grid) {
  if(!grid.length || !grid[0].length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let set = new Set();
  let val = '';
  let x = 0;
  let y = 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 0) continue;
      val = '';
      x = i;
      y = j;
      dfs(i, j);
      set.add(val);
    }
  }
  return set.size;

  function dfs(i, j) {
    if(grid[i][j] === 1) {
      grid[i][j] = 0;
      val += '' + (i - x) + (j - y);
      if(i > 0) dfs(i - 1, j);
      if(j > 0) dfs(i, j - 1);
      if(i < m - 1) dfs(i + 1, j);
      if(j < n - 1) dfs(i, j + 1);
    }
  }
};
// @lc code=end

