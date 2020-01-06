/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/**
 * 思路：
 * bottom(i >= m): i = m - 1, j += 2
 * right(j >= n): j = n - 1, i += 2
 * top(i < 0): i = 0
 * left(j < 0): j = 0
 * 以上都要换方向
 */
var findDiagonalOrder = function(matrix) {
  if(!matrix.length || !matrix[0].length) return [];
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;
  let j = 0;
  let d = 0;
  let arr = [[-1, 1], [1, -1]];
  let res = [];
  for(let k = 0; k < m * n; k++) {
    res.push(matrix[i][j]);
    i += arr[d][0];
    j += arr[d][1];
    if(i >= m) {
      i = m - 1;
      j += 2;
      d = 1 - d;
    } else if(j >= n) {
      j = n - 1;
      i += 2;
      d = 1 - d;
    } else if(i < 0) {
      i = 0;
      d = 1 - d;
    } else if(j < 0) {
      j = 0;
      d = 1 - d; 
    }
  }
  return res;
};
// @lc code=end

