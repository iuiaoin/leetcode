/*
 * @lc app=leetcode id=935 lang=javascript
 *
 * [935] Knight Dialer
 */
/**
 * @param {number} N
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i][j][step]代表step步之后，以i, j的数字结尾的number的个数
 * state transition: dp[i][j][step] = sum{dp[i + dr][j + dc][step - 1]}
 * state initialization: dp表示dp[][][step - 1], dp2表示dp[][][step]
 */
var knightDialer = function (N) {
  if (N < 1) return 0;
  const m = 10 ** 9 + 7;
  let dp = new Array(4).fill(null).map(v => new Array(3).fill(1));
  dp[3][0] = dp[3][2] = 0;
  let dr = [1, 1, -1, -1, 2, 2, -2, -2],
    dc = [2, -2, 2, -2, 1, -1, 1, -1];
  for (let n = 1; n < N; n++) {
    let dp2 = new Array(4).fill(null).map(v => new Array(3).fill(0));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 3 && (j === 0 || j === 2)) continue;
        for (let k = 0; k < 8; k++) {
          let r = i + dr[k],
            c = j + dc[k];
          if (r >= 0 && r < 4 && c >= 0 && c < 3 || r === 3 && c === 1) {
            dp2[i][j] += dp[r][c];
          }
        }
        dp2[i][j] %= m;
      }
    }
    dp = dp2;
  }
  let res = 0;
  for(let row of dp) {
    for(let val of row) {
      res += val;
    }
  }
  return res % m;
};
