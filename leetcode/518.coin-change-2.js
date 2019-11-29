/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
/**
 * 思路：
 * state: dp[i]表示金额为i的面额组合数
 * state transition: dp[i] = {dp[i - coin_1] + ... + dp[i - coin_k]}
 * base case: dp[0] = 1
 */
var change = function(amount, coins) {
  let dp = new Array(amount+1).fill(0);
  dp[0] = 1;
  for(let i = 0; i < coins.length; i++) {
    for(let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
};
// @lc code=end

