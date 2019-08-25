/*
 * @lc app=leetcode id=280 lang=javascript
 *
 * [280] Wiggle Sort
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 思路：遍历数组，偶数位不满足nums[i] <= nums[i + 1]交换，
 * 奇数位不满足nums[i] >= nums[i + 1]交换
 */
var wiggleSort = function(nums) {
  if(nums.length < 2) return;
  for(let i = 0; i < nums.length - 1; i++) {
    if(i % 2 === 0 && nums[i] > nums[i + 1] || i % 2 === 1 && nums[i] < nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];  
    }
  }
};

