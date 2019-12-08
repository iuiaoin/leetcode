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
/**
 * 思路：找到个数最多的字母，以其来分隔其他字母
 */
var reorganizeString = function(S) {
  let map = {};
  let maxChar = '';
  let maxLen = 0;
  for(let i = 0; i < S.length; i++) {
    if(!map[S[i]]) {
      map[S[i]] = 1;
    } else {
      map[S[i]] = map[S[i]] + 1;
    }
    if(map[S[i]] > maxLen) {
      maxLen = map[S[i]];
      maxChar = S[i];
    }
  }
  delete map[maxChar];
  if(Object.values(map).reduce((pre, cur) => pre + cur, 0) < maxLen - 1) return '';
  let arr = new Array(maxLen).fill(maxChar);
  let len = 0;
  let i = 0;
  Object.entries(map).forEach(([key, value]) => {
    while(value) {
      i = i % maxLen;
      arr[i] += key;
      value--;
      i++;
    }
  })
  return arr.join('');
};
// @lc code=end

