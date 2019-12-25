/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let min = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > min) res += prices[i] - min;
    min = prices[i];
  }
  return res;
};
// @lc code=end