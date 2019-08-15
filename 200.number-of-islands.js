/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (40.48%)
 * Total Accepted:    316K
 * Total Submissions: 778.5K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let num = 0;
  let n = grid.length;
  if(!n) return num;
  let m = grid[0].length;
  for(let i = 0; i < n; i++ ) {
    for(let j = 0; j < m; j++) {
      if(grid[i][j] === '1') {
        dfs(i, j);
        num++;
      }
    }
  }
  return num;
  function dfs(i, j) {
    if(i < 0 || i > n - 1 || j < 0 || j > m - 1 || grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};