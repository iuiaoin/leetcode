/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix.length || !matrix[0].length) return false;
  let m = matrix.length,
      n = matrix[0].length,
      row = 0,
      col = n - 1;
  while(row < m && col > -1) {
    if(matrix[row][col] === target) return true;
    if(matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
};

