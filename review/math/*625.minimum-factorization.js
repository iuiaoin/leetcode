/*
 * @lc app=leetcode id=625 lang=javascript
 *
 * [625] Minimum Factorization
 */

// @lc code=start
/**
 * @param {number} a
 * @return {number}
 */
var smallestFactorization = function(a) {
  if(a < 10) return a;
  let s = '';
  let num = 9;
  while(a > 1) {
    if(a % num === 0) {
      s = num + s;
      a = a / num;
    } else {
      num--;
      if(num === 1) return 0;
    }
  }
  let res = parseInt(s);
  return res > 2 ** 31 - 1 ? 0 : res;
};
// @lc code=end

