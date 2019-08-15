/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0,
      right = nums.length - 1;
  while(left < right) {
    let mid = (left + right) >> 1;
    if(nums[mid] > nums[right]) {
      left = mid + 1;
    } else if(nums[mid] === nums[right]) {
      right--;
    } else {
      right = mid; 
    }
  }
  return nums[left];
};

