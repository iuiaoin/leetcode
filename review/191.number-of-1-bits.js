/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0;
  while(n > 0) {
    if(n & 1) res++;
    n >>>= 1;
  }  
  return res;
};
// @lc code=end

