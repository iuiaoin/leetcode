/*
 * @lc app=leetcode id=159 lang=javascript
 *
 * [159] Longest Substring with At Most Two Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 思路：使用滑动窗口，map存字符出现的最后位置
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let map = new Map();
  if (s.length < 1) return 0;
  let l = 0;
  let r = 0;
  let res = 0;
  while (r < s.length) {
    if (map.size <= 2) {
      map.set(s[r], r);
      r++;
    }
    if (map.size > 2) {
      let left = Infinity;
      let char = '';
      for (let [key, value] of map) {
        if (value < left) {
          left = value;
          char = key;
        }
      }
      l = left + 1;
      map.delete(char);
    }
    res = Math.max(res, r - l);
  }
  return res;
};
// @lc code=end