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
var dailyTemperatures = function(T) {
  let len = T.length;
  if(!len) return [];
  let res = new Array(len).fill(0);
  let stack = [];
  for(let i = 0; i < len; i++) {
    while(stack.length && T[stack[stack.length - 1]] < T[i]) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};
// @lc code=end

