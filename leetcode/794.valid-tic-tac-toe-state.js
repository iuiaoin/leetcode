/*
 * @lc app=leetcode id=794 lang=javascript
 *
 * [794] Valid Tic-Tac-Toe State
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {boolean}
 */
/**
 * 思路：按照条件验证
 */
var validTicTacToe = function(board) {
  let xNum = 0;
  let oNum = 0;
  let col = [];
  let dia = ['', ''];
  let isOver = false;
  let xWin = false;
  let oWin = false;
  for(let i = 0; i < 3; i++) {
    if(isEnd(board[i])) isOver = true; 
    col.push('');
    for(let j = 0; j < 3; j++) {
      col[j] += board[i][j];
      if(i === j) dia[0] += board[i][j];
      if(i + j === 2) dia[1] += board[i][j];
      if(board[i][j] === 'X') {
        xNum++;
      } else if(board[i][j] === 'O') {
        oNum++;
      }
    }
  }
  if(oNum > xNum || xNum - oNum > 1) return false;
  if(col.some(c => isEnd(c))) isOver = true;
  if(dia.some(d => isEnd(d))) isOver = true;
  if(isOver) {
    if(oWin && xWin) return false;
    if(oWin && oNum !== xNum) return false;
    if(xWin && xNum - oNum !== 1) return false;
  }
  return true;

  function isEnd(str) {
    if(str === 'XXX') {
      xWin = true;
    } else if(str === 'OOO') {
      oWin = true;
    } else {
      return false;
    }
    return true;
  }
};


// @lc code=end

