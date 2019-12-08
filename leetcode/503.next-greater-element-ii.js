/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 思路：维护一个栈，在其中放入元素，若遇到比其大的则出栈，将大的数放入结果中
 */
var nextGreaterElements = function(nums) {
  let len = nums.length;
  let res = new Array(len).fill(-1);
  let stack = [];
  for(let i = 0; i < 2 * len; i++) {
    let num = nums[i % len];
    while(stack.length && nums[stack[stack.length - 1]] < num) {
      let val = stack.pop();
      res[val] = num;
    }
    if(i < len) stack.push(i);
  }
  return res;
};
// @lc code=end

