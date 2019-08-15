/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let sIdx = 0,
      pIdx = 0,
      starIdx = -1,
      matchIdx = 0;
  while(sIdx < s.length) {
    if(pIdx < p.length && (s[sIdx] === p[pIdx] || p[pIdx] === '?')) {
      sIdx++;
      pIdx++;
    } else if(pIdx < p.length && p[pIdx] === '*') {
      starIdx = pIdx;
      matchIdx = sIdx;
      pIdx++;
    } else if(starIdx !== -1) {
      pIdx = starIdx;
      pIdx++;
      matchIdx++;
      sIdx = matchIdx;
    } else {
      return false;
    }
  }
  while(pIdx < p.length) {
    if(p[pIdx] !== '*') return false;
    pIdx++;
  }
  return true;
};

