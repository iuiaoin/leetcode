/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if(num.length <= k) return '0';
  while(k) {
    for(let i = 0; i < num.length; i++) {
      if(num[i] > num[i + 1] || i === num.length - 1) {
        num = num.slice(0, i) + num.slice(i + 1);
        break;
      }
    }
    k--;
  }
  while(num[0] === '0') num = num.slice(1);
  return num || '0';
};
// @lc code=end

