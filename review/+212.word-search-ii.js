/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let trie = {};
  for(let i = 0; i < words.length; i++) {
    let w = words[i];
    let t = trie;
    for(let j = 0; j < w.length; j++) {
      t[w[j]] = t[w[j]] || {};
      t = t[w[j]];
    }
    t.isWord = true;
  }

  let res = [];
  if(!board.length || !board[0].length) return [];
  let m = board.length;
  let n = board[0].length;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      dfs(i, j, trie, '');
    }
  }
  return res;

  function dfs(i, j, trie, s) {
    if(i < 0 || j < 0 || i >= m || j >= n || board[i][j] === '*') return;
    let char = board[i][j];
    let t = trie[char];
    if(!t) return;
    s += char;
    if(t.isWord) {
      res.push(s);
      t.isWord = false;
    }
    board[i][j] = '*';
    dfs(i - 1, j, t, s);
    dfs(i + 1, j, t, s);
    dfs(i, j - 1, t, s);
    dfs(i, j + 1, t, s);
    board[i][j] = char;
  }
};
// @lc code=end

