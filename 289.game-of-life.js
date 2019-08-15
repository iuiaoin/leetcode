/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * 思路: 按照规则来计算update之后的board状态
 */
var gameOfLife = function(board) {
  if(!board.length || !board[0].length) return;
  let m = board.length,
      n = board[0].length;
  function getNbs(i, j) {
    if(i < 0 || j < 0 || i >= m || j >= n) return 0;
    let cell = board[i][j];
    return cell < 0 ? 1 : (cell > 1 ? 0 : cell);
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      let cell = board[i][j];
      let nbs = getNbs(i - 1, j - 1) + getNbs(i - 1, j) + getNbs(i, j - 1) + getNbs(i + 1, j) + getNbs(i, j + 1) + getNbs(i + 1, j + 1) + getNbs(i - 1, j + 1) + getNbs(i + 1, j - 1);
      if(cell === 1) {
        if(nbs < 2 || nbs > 3) {
          board[i][j] = -1;
        }
      } else {
        if(nbs === 3) {
          board[i][j] = 2;
        }
      }
    }
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      let cell = board[i][j];
      if(cell < 0) {
        board[i][j] = 0;
      } else if(cell > 1) {
        board[i][j] = 1;
      }
    }
  }
};

