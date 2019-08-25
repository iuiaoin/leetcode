/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/**
 * 思路：分别使用两个矩阵保存 Pacific 和 Atlantic 访问过的值，
 * 从上左和右下两个边界开始向内访问，最后两个矩阵都访问过的值即为
 * 所求. (可以想象成flood from ocean)
 * 
 * 节省的时间复杂度在于访问过的点不再访问
 */
var pacificAtlantic = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  let res = [],
      m = matrix.length,
      n = matrix[0].length,
      mp = new Array(m).fill(null).map(v => new Array(n).fill(false));
      ma = new Array(m).fill(null).map(v => new Array(n).fill(false));

  for(let i = 0; i < m; i++) {
    flow(i, 0, -Infinity, mp);
    flow(i, n - 1, -Infinity, ma);
  }

  for(let j = 0; j < n; j++) {
    flow(0, j, -Infinity, mp);
    flow(m - 1, j, -Infinity, ma);
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(mp[i][j] && ma[i][j]) res.push([i, j]);
    }
  }
  return res;
      
  function flow(i, j, height, visited) {
    if(i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || matrix[i][j] < height) return;
    visited[i][j] = true;
    let val = matrix[i][j];
    flow(i - 1, j, val, visited);
    flow(i + 1, j, val, visited);
    flow(i, j - 1, val, visited);
    flow(i, j + 1, val, visited);
  }
};
