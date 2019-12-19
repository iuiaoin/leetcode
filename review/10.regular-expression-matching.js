/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return match(s.length - 1, p.length - 1);

  function match(i, j) {
    if(j === -1) return i === -1;
    if(i > -1 && s[i] === p[j] || p[j] === '.') return match(i - 1, j - 1);
    if(p[j] === '*') {
      if(i > -1 && (s[i] === p[j - 1] || p[j - 1] === '.') && match(i - 1, j)) return true;
      return match(i, j - 2);
    }
    return false;
  }
};
// @lc code=end

