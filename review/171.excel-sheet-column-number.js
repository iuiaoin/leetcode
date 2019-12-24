/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  if(!s) return 0;
  let len = s.length;
  let res = 0;
  let mult = 1;
  for(let i = len - 1; i >= 0; i--) {
    let c = s[i];
    let num = c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    res += num * mult;
    mult *= 26;
  }
  return res;
};
// @lc code=end

