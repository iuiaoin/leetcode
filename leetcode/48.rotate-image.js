/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if(!matrix.length || !matrix[0].length) return;
  let n = matrix.length - 1;
  for(let i = 0; i < n / 2; i++) {
    // 需要遍历的元素数等于n - 2i 
    for(let j = i; j < n - i;j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;
    }
  }
};

