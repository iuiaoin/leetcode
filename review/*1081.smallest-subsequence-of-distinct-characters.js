/*
 * @lc app=leetcode id=1081 lang=javascript
 *
 * [1081] Smallest Subsequence of Distinct Characters
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  let map = {};
  let set = new Set();
  let res = [];
  for(let c of text) {
    map[c] = (map[c] || 0) + 1;
  }
  for(let c of text) {
    map[c]--;
    if(set.has(c)) continue;
    while(res.length && c < res[res.length - 1] && map[res[res.length - 1]] > 0) {
      let d = res.pop();
      set.delete(d);
    }
    res.push(c);
    set.add(c);
  }
  return res.join('');
};
// @lc code=end

