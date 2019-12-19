/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;
  let res = parseInt(str);
  return Math.min(Math.max(res, MIN), MAX) || 0;
};
// @lc code=end

