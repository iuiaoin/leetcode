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
 * 思路：遍历nums，i从1到len，遇到和大于等于s的输出i
 */
var minSubArrayLen = function(s, nums) {
  let len = nums.length;
  for(let i = 1; i <= len; i++) {
    for(let j = 0; j <= len - i; j++) {
      let sum = 0;
      for(let k = j; k < j + i; k++) {
        sum += nums[k];
      }
      if(sum >= s) return i;
    }
  }
  return 0;
};
// @lc code=end

