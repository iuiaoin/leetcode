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
 * 思路：使用dfs来判断是否可以同时流到两边
 */
var pacificAtlantic = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  let res = [],
      m = matrix.length,
      n = matrix[0].length;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      let set = new Set();
      flow(i, j, set);
      if(set.size === 2) res.push([i, j]);  
    }
  }
  return res;

  function isLower(val, l, r) {
    return (l < 0 || l >= m || r < 0 || r >= n) || val >= matrix[l][r];
  }

  function flow(i, j, set) {
    if(set.size === 2) return;
    if(i < 0 || j < 0) return set.add('~');
    if(i >= m || j >= n) return set.add('*');
    if(matrix[i][j] === '#') return;
    let temp = matrix[i][j];
    matrix[i][j] = '#';
    if(isLower(temp, i - 1, j)) flow(i - 1, j, set);
    if(isLower(temp, i + 1, j)) flow(i + 1, j, set);
    if(isLower(temp, i, j - 1)) flow(i, j - 1, set);
    if(isLower(temp, i, j + 1)) flow(i, j + 1, set);
    matrix[i][j] = temp;
  }
};
