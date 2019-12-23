/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board.length || !board[0].length) return false;
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;

  function dfs(i, j, index) {
    if (index === word.length) return true;
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === '*' || board[i][j] !== word[index]) return false;
    let temp = board[i][j];
    board[i][j] = '*';
    if (dfs(i - 1, j, index + 1) || dfs(i + 1, j, index + 1) || dfs(i, j - 1, index + 1) || dfs(i, j + 1, index + 1)) return true;
    board[i][j] = temp;
  }
};
// @lc code=end