/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
/**
 * state: dp[i][j][k]表示k步后落在i,j的概率
 * state transition: dp[i][j][k] = sum(dp[i + dr][j + dc][k - 1] / 8)
 * base case: dp[r][c][0] = 1
 */
var knightProbability = function(N, K, r, c) {
  let arr = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2]
  ];
  let dp = new Array(N).fill(null).map(v => new Array(N).fill(null).map(v => new Array(K + 1).fill(0)));
  dp[r][c][0] = 1;
  let res = 0;
  for(let i = 1; i <= K; i++) {
    for(let j = 0; j < N; j++) {
      for(let k = 0; k < N; k++) {
        for(let l = 0; l < 8; l++) {
          let [a, b] = arr[l];
          let x = j + a;
          let y = k + b;
          if(x >= 0 && x < N && y >= 0 && y < N) {
            dp[j][k][i] += dp[x][y][i - 1] / 8;
          }
        }
      }
    }
  }
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      res += dp[i][j][K];
    }
  }
  return res;
};
// @lc code=end

