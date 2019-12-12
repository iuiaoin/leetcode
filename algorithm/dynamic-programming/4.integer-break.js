/**
 * 整数分割
 * 描述：给定一个正整数，将其分解为至少两个正整数，并返回其最大乘积
 * @param {number} n
 * @return {number}
 */
/**
 * state: dp[i] 正整数i的被分解数的最大积
 * state transition: dp[i] = max{dp[i], max{dp[i - j], i - j} * max{dp[j], j}}, 1 <= j <= i / 2
 * base case: dp[1] = 1
 */
function integerBreak(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for(let i = 2; i < n + 1; i++) {
    for(let j = 1; j <= i >> 1; j++) {
      dp[i] = Math.max(dp[i], Math.max(dp[i - j], i - j) * Math.max(dp[j], j));
    }
  }
  return dp[n];
}