/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity,
      pro = 0;
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] <= min) {
      min = prices[i];
    } else if(prices[i] - min > pro){
      pro = prices[i] - min;
    }
  }
  return pro;
};

