/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let len = nums.length;
  let l = 0;
  let r = len - 1;
  for (let i = 0; i <= r;) {
    if (nums[i] < 1) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      i++;
      l++;
    } else if (nums[i] > 1) {
      [nums[i], nums[r]] = [nums[r], nums[i]];
      r--;
    } else {
      i++;
    }
  }
};
// @lc code=end