/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;
  if(len <= 1) return s;
  let res = '';
  for(let i = 0; i < len; i++) {
    let p1 = palindrom(i, i);
    let p2 = palindrom(i, i + 1);
    let p = p1.length > p2.length ? p1 : p2;
    res = p.length > res.length ? p : res;
  }
  return res;

  function palindrom(i, j) {
    while(i >= 0 && j <= len - 1 && s[i] === s[j]) {
      i--;
      j++;
    }
    return s.slice(i + 1, j);
  }
};
// @lc code=end

