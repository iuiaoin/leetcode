/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(!nums.length) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;
  let res = [-1, -1];
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums[mid] < target - 0.5) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  res[0] = nums[l] === target ? l : -1;
  l = 0;
  r = nums.length - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums[mid] < target + 0.5) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  res[1] = nums[r] === target ? r : -1;
  return res;
};
// @lc code=end

