/*
 * @lc app=leetcode id=935 lang=javascript
 *
 * [935] Knight Dialer
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/**
 * state: dp[i][j]表示以i结尾的j步之后的不同数字数量
 * state transition: dp[i][j] = sum(dp[i上一个数字][j - 1])
 * base case: dp[i][1] = 1
 */
var knightDialer = function (N) {
  let mod = 10 ** 9 + 7;
  let arr = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4]
  ];
  let dp = new Array(10).fill(null).map(v => new Array(N + 1).fill(0));
  for (let i = 0; i < 10; i++) dp[i][1] = 1;
  for (let j = 2; j <= N; j++) {
    for(let i = 0; i < 10; i++) {
      for(k = 0; k < arr[i].length; k++) {
        dp[i][j] += dp[arr[i][k]][j - 1] % mod;
      }
    }
  }
  let res = 0;
  for(let i = 0; i < 10; i++) {
    res += dp[i][N];
  }
  return res % mod;
};
// @lc code=end