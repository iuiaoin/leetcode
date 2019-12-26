/*
 * @lc app=leetcode id=161 lang=javascript
 *
 * [161] One Edit Distance
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if(s === t) return false;
  let len1 = s.length;
  let len2 = t.length;
  if(len1 < len2) {
    [len1, len2] = [len2, len1];
    [s, t] = [t, s];
  }
  if(len1 === len2) {
    for(let i = 0; i < len1; i++) {
      if(s.slice(0, i) + s.slice(i + 1) === t.slice(0, i) + t.slice(i + 1)) return true;
    }
    return false;
  }
  for(let i = 0; i < len1; i++) {
    if(s.slice(0, i) + s.slice(i + 1) === t) return true;
  }
  return false;
};
// @lc code=end

