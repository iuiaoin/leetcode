/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let direction = 0,
      res = [];
  while(matrix.length) {
    direction = direction % 4;
    switch (direction) {
      case 0:
        res = res.concat(matrix.shift());
        break;
      case 1:
        for(let i = 0; i < matrix.length; i++) {
          let val = matrix[i].pop();
          if(val != undefined) res.push(val);
        }
        break;
      case 2:
        res = res.concat(matrix.pop().reverse());
        break;
      case 3:
        for(let j = matrix.length - 1; j >= 0; j--) {
          let val = matrix[j].shift();
          if(val != undefined) res.push(val);
        };
        break;
    }
    direction++;
  }
  return res;
};

