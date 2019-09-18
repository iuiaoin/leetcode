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
 * 思路：
 * state: dp[i][j][step]表示在step步之后停留在i, j格子的概率
 * state transition: dp[i][j][step] = sum{ dp[i + dr][j + dc] / 8};
 * initialization: 为了减少space使用dp表示dp[][][step - 1]，dp2表示dp[][][step]
 */
var knightProbability = function(N, K, r, c) {
  let dp = new Array(N).fill(null).map(v => new Array(N).fill(0));
  let dr = [1, 1, 2, 2, -1, -1, -2, -2],
      dc = [2, -2, 1, -1, 2, -2, 1, -1];
  dp[r][c] = 1;
  for(let k = 0; k < K; k++) {
    let dp2 = new Array(N).fill(null).map(v => new Array(N).fill(0));
    for(let i = 0; i < N; i++) {
      for(let j = 0; j < N; j++) {
        for(let l = 0; l < 8; l++) {
          let rr = i + dr[l];
          let cc = j + dc[l];
          if(rr >= 0 && rr < N && cc >= 0 && cc < N) {
            dp2[i][j] += dp[rr][cc] / 8;
          }
        }
      }
    }
    dp = dp2;
  }
  let res = 0;
  for(let i = 0; i < dp.length; i++) {
    for(let j = 0; j < dp[0].length; j++) {
      res += dp[i][j];
    }
  }
  return res;
};

