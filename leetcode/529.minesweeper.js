/*
 * @lc app=leetcode id=529 lang=javascript
 *
 * [529] Minesweeper
 */
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
/**
 * 思路：根据规则实现
 */
var updateBoard = function (board, click) {
  let [i, j] = click,
  m = board.length - 1,
    n = board[0].length - 1;
  if (board[i][j] === 'M') {
    board[i][j] = 'X';
    return board;
  }

  function hasM(i, j) {
    return board[i][j] === 'M';
  }

  function update(i, j) {
    if (i < 0 || i > m || j < 0 || j > n || board[i][j] !== 'E') return;
    let num = 0;
    if (i > 0 && hasM(i - 1, j)) num++;
    if (j > 0 && hasM(i, j - 1)) num++;
    if (i > 0 && j > 0 && hasM(i - 1, j - 1)) num++;
    if (i < m && hasM(i + 1, j)) num++;
    if (j < n && hasM(i, j + 1)) num++;
    if (i < m && j < n && hasM(i + 1, j + 1)) num++;
    if (i > 0 && j < n && hasM(i - 1, j + 1)) num++;
    if (i < m && j > 0 && hasM(i + 1, j - 1)) num++;
    if (num > 0) {
      board[i][j] = String(num);
    } else {
      board[i][j] = 'B';
      update(i - 1, j);
      update(i - 1, j - 1);
      update(i, j - 1);
      update(i + 1, j);
      update(i + 1, j + 1);
      update(i, j + 1);
      update(i - 1, j + 1);
      update(i + 1, j - 1);
    }
  }
  update(i, j);
  return board;
};