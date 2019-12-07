/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
/**
 * 思路：对于每一个温度，向后找比他大的数字
 */
var dailyTemperatures = function(T) {
  let res = [];
  for(let i = 0; i < T.length; i++) {
    let found = false;
    for(let j = i + 1; j < T.length; j++) {
      if(T[i] < T[j]) {
        res.push(j - i);
        found = true;
        break;
      }
    }
    if(!found) res.push(0);
  }
  return res;
};
// @lc code=end

