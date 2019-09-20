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
 * state: dp[i][step]step步表示数字i(0~9)结尾的number个数
 * state transition: dp[i][step] = sum{dp[i对应的knight move数字格子][step - 1]}
 * state initialization: dp表示dp[][step - 1], dp2表示dp[][step]
 */
var knightDialer = function (N) {
  const mod = 10 ** 9 + 7;
  const map = {
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    5: [],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
    0: [4, 6],
  };
  let dp = new Array(10).fill(1);
  for (let i = 1; i < N; i++) {
    let dp2 = new Array(10).fill(0);
    for (let j = 0; j < 10; j++) {
      for (let num of map[j]) {
        dp2[j] += dp[num] % mod;
      }
    }
    dp = dp2;
  }
  return dp.reduce((pre, cur) => pre + cur, 0) % mod;
};