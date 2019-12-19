/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z|0-9]+/g, '');
  let l = 0;
  let r = s.length - 1;
  while(l < r) {
    if(s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
// @lc code=end

