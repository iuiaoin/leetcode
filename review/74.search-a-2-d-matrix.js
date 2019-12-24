/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix.length || !matrix[0].length) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let l = 0;
  let r = m - 1;
  let row = -1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(target < matrix[mid][0]) {
      r = mid - 1;
    } else if(target > matrix[mid][n - 1]) {
      l = mid + 1;
    } else {
      row = mid;
      break;
    }
  }
  if(row === -1) return false;
  l = 0;
  r = n - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(matrix[row][mid] === target) {
      return true;
    } else if(matrix[row][mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};
// @lc code=end

