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
 * 思路：维护一个长度为2的队列，保存对应字符的个数，统计最大值
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let map = new Map();
  let res = 0;
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      let num = map.get(s[i])[0] + 1;
      map.delete(s[i]);
      map.set(s[i], [num, i]);
    } else {
      if(map.size === 2) {
        let iterator = map.keys();
        let key1 = iterator.next().value;
        let index = map.get(key1)[1];
        let key2 = iterator.next().value;
        map.set(key2, [i - index - 1,map.get(key2)[1]]);
        map.delete(key1);
      }
      map.set(s[i], [1, i]);
    }
    let len = 0;
    for(let [key, value] of map) {
      len += value[0];
    }
    res = Math.max(res, len);
  }
  return res;
};
// @lc code=end

