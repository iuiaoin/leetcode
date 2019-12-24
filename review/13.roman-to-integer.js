/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if(!s) return 0;
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let res = map[s[0]];
  for(let i = 1; i < s.length; i++) {
    res += map[s[i]];
    if(map[s[i]] > map[s[i - 1]]) res -= 2 * map[s[i - 1]];
  }
  return res;
};
// @lc code=end

