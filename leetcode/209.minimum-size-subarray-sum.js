/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：遍历nums，累加数字和sum，如果>=s则使sum从头开始减掉先前的数字，记录长度最小值
 */
var minSubArrayLen = function(s, nums) {
  let len = nums.length;
  let res = Infinity;
  let i = 0;
  let j = 0;
  let sum = 0;
  while(i < len) {
    sum += nums[i++];
    while(sum >= s) {
      res = Math.min(res, i - j);
      sum -= nums[j++];
    }
  }
  return res === Infinity ? 0 : res;
};
// @lc code=end

