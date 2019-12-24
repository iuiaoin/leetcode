/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if(!matrix.length || !matrix[0].length) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while(i < m && j >= 0) {
    if(target < matrix[i][j]) {
      j--;
    } else if(target > matrix[i][j]) {
      i++;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end