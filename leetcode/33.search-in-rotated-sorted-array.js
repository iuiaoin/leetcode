/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0,
      len = nums.length,
      r = len - 1;
  while(l < r) {
    let mid = (l + r) >> 1;
    if(nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  
  if(target > nums[len - 1]) {
    [l, r] = [0, l];
  } else {
    [l, r] = [l, len - 1];
  }
  while(l <= r) {
    let mid = (l + r) >> 1;
    if(nums[mid] === target) return mid;
    if(nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

