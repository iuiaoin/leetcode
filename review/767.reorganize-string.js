/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let max = 0;
  let maxChar = '';
  let map = {};
  for(let i = 0; i < S.length; i++) {
    map[S[i]] = (map[S[i]] || 0) + 1;
    if(map[S[i]] > max) {
      max = map[S[i]];
      maxChar = S[i];
    }
  }
  if(max - 1 > S.length - max) return '';
  let arr = new Array(max).fill(maxChar);
  delete map[maxChar];
  let keys = Object.keys(map);
  let j = 0;
  for(let i = 0; i < keys.length; i++) {
    while(map[keys[i]]) {
      map[keys[i]]--;
      arr[j % max] += keys[i];
      j++;
    }
  }
  return arr.join('');
};
// @lc code=end

