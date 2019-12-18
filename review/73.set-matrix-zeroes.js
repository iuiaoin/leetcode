/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length;
  if(m < 1) return;
  let n = matrix[0].length;
  let isRowZero = false;
  for(let j = 0; j < n; j++) {
    if(matrix[0][j] === 0) {
      isRowZero = true;
      break;
    }
  }
  let isColZero = false;
  for(i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      isColZero = true;
      break;
    } 
  }
  for(let i = 1; i < m; i++) { 
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if(isRowZero) matrix[0].fill(0);
  if(isColZero) {
    for(let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
// @lc code=end

