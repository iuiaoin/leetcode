/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 */
/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
/**
 * 思路：使用dfs，在k move的过程中统计移到board外面和里面的数
 */
var knightProbability = function(N, K, r, c) {
  let sum = 0,
      stay = 0;
  function dfs(i, j, step, out) {
    if(i < 0 || i >= N || j < 0 || j >= N) out = true;
    if(step === 0) {
      if(!out) stay++; 
      sum++;
      return;
    }
    dfs(i - 2, j - 1, step - 1, out);
    dfs(i - 2, j + 1, step - 1, out);
    dfs(i + 2, j - 1, step - 1, out);
    dfs(i + 2, j + 1, step - 1, out);
    dfs(i - 1, j - 2, step - 1, out);
    dfs(i - 1, j + 2, step - 1, out);
    dfs(i + 1, j - 2, step - 1, out);
    dfs(i + 1, j + 2, step - 1, out);
  }
  dfs(r, c, K, false);
  return stay / sum;
};

