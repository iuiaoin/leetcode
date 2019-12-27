/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let s = num.toString();
  for(let i = 0; i < s.length; i++) {
    let index = -1;
    let max = -Infinity;
    for(let j = i + 1; j < s.length; j++) {
      if(s[j] > s[i] && s[j] >= max) {
        max = s[j];
        index = j;
      }
    }
    if(index > -1) {
      let arr = s.split('');
      [arr[i], arr[index]] = [arr[index], arr[i]];
      return parseInt(arr.join(''));
    }
  }
  return num;
};
// @lc code=end

