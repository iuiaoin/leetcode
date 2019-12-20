/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  let min = Infinity;
  for(let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    res = Math.max(res, prices[i] - min);
  }
  return res;
};
// @lc code=end

