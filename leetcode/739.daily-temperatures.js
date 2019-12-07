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
 * 思路：使用栈存温度，每次拿新元素与栈顶元素比较
 */
var dailyTemperatures = function(T) {
  let stack = [];
  let res = new Array(T.length).fill(0);
  for(let i = 0; i < T.length; i++) {
    while(stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};
// @lc code=end

