/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：找到任一peak，可以用二分查找，mid和相邻元素比较，
 * 往peak方向移动
 */
var findPeakElement = function(nums) {
  if(!nums.length) return -1;
  if(nums.length === 1) return 0;
  let len = nums.length, 
      l = 0,
      r = len - 1;
  while(l <= r) {
    let mid = (l + r) >> 1;
    if(mid === 0 && nums[mid] > nums[mid + 1] || mid === len - 1 && nums[mid] > nums[mid - 1]) return mid;
    if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    if(nums[mid] < nums[mid - 1]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

