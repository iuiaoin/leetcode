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
 * 思路：使用回溯，数组倒序排列，从第一个数开始取
 */
var change = function(amount, coins) {
  let res = 0;
  backtrack(amount, 0);
  return res;
  
  function backtrack(amount, start) {
    if(amount === 0) {
      res++;
    } else if(amount > 0) {
      for(let i = start; i < coins.length; i++) {
        amount -= coins[i];
        backtrack(amount, i);
        amount += coins[i];
      }
    }
  }
};
// @lc code=end

