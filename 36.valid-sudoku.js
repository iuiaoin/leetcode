/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
/**
 * 思路：按照规则去验证，用数组存储出现过的值的次数
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let rowCount = new Array(9).fill(0),
      colCount = new Array(9).fill(0);
    for (let j = 0; j < 9; j++) {
      let rowNum = board[i][j],
        colNum = board[j][i];
      if(rowNum !== '.') {
        rowCount[rowNum - 1]++;
        if(rowCount[rowNum - 1] > 1) return false;
      }
      if(colNum !== '.') {
        colCount[colNum - 1]++;
        if(colCount[colNum - 1] > 1) return false;
      }
    }
  }
  for(let m = 0; m < 9; m += 3) {
    for(let n = 0; n < 9; n += 3) {
      let boxCount = new Array(9).fill(0);
      for(let k = 0; k < 3; k++) {
        for(let l = 0; l < 3; l++) {
          let boxNum = board[m + k][n + l];
          if(boxNum !== '.'){
            boxCount[boxNum - 1]++;
            if(boxCount[boxNum - 1] > 1) return false;
          }
        }
      }
    }
  }
  return true;
};