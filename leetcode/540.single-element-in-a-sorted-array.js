/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：使用异或去掉重复的数字
 */
var singleNonDuplicate = function(nums) {
  let res = 0;
  for(let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
// @lc code=end

