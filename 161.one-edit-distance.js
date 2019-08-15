/*
 * @lc app=leetcode id=161 lang=javascript
 *
 * [161] One Edit Distance
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  let l1 = s.length,
    l2 = t.length;
  if (s === t || l1 - l2 > 1 || l2 - l1 > 1) return false;
  if (l1 > l2) return helper(s, t, l1);
  if (l2 > l1) return helper(t, s, l2);
  if (l1 === l2) return helper(s, t, l1, true);

  function helper(s1, s2, l, both) {
    for(let i = 0; i < l; i++) {
      if(cut(s1, i) === (both ? cut(s2, i) : s2)) return true;
    }
    return false;
  }

  function cut(s, i) {
    return s.slice(0, i) + s.slice(i + 1);
  }
};