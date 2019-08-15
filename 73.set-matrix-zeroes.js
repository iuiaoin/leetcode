/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length,
      n = matrix[0].length,
      isCol = false;
  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) isCol = true;
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if(matrix[0][0] === 0) matrix[0].fill(0);
  if(isCol) {
    for(let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

