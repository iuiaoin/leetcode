/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let begin = 0,
      end = nums.length - 1;
  for(let i = 0; i <= end;) {
    if(nums[i] < 1) {
      [nums[begin], nums[i]] = [nums[i], nums[begin]];
      begin++;
      i++;
    } else if(nums[i] > 1) {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      end--;
    } else {
      i++;
    }
  }
};