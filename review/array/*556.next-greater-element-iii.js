/*
 * @lc app=leetcode id=556 lang=javascript
 *
 * [556] Next Greater Element III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  let s = n.toString();
  let len = s.length;
  let l = -1;
  for(let i = len - 1; i > 0; i--) {
    if(s[i] > s[i - 1]) {
      l = i - 1;
      break;
    }
  }
  if(l === -1) return -1;
  for(let i = len - 1; i > l; i--) {
    if(s[i] === s[i - 1]) continue;
    if(s[i] > s[l]) {
      let arr = s.split('');
      [arr[i], arr[l]] = [arr[l], arr[i]];
      let newArr = arr.slice(0, l + 1).concat(arr.slice(l + 1).sort());
      let res = parseInt(newArr.join(''));
      return res > 2 ** 31 - 1 ? -1 : res;
    }
  }
};
// @lc code=end

