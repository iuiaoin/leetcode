/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let direction = 0;
  let res = [];
  while(matrix[0] && matrix[0].length) {
    direction %= 4;
    switch(direction) {
      case 0: 
        res = res.concat(matrix.shift());
        break;
      case 1:
        for(let i = 0; i < matrix.length; i++) {
          res.push(matrix[i].pop());
        }
        break;
      case 2:
        res = res.concat(matrix.pop().reverse());
        break;
      case 3:
        for(let i = matrix.length - 1; i >= 0; i--) {
          res.push(matrix[i].shift());
        }
        break;
    }
    direction++;
  }
  return res;
};
// @lc code=end

