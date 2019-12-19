/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let len1 = s.length;
  let len2 = p.length;
  let i = 0;
  let j = 0;
  let index = -1;
  let sPos = 0;
  while(i < len1) {
    if(s[i] === p[j] || p[j] === '?') {
      i++;
      j++;
    } else if(p[j] === '*') {
      index = j;
      sPos = i;
      j++;
    } else if(index > -1) {
      sPos++;
      i = sPos;
      j = index;
    } else {
      return false;
    }
  }
  for(let k = j; k < len2; k++) {
    if(p[k] !== '*') return false;
  }
  return true;
};
// @lc code=end

