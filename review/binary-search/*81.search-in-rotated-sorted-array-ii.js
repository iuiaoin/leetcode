/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let len = nums.length;
  let l = 0;
  let r = len - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums[mid] === target) return true;
    if(nums[mid] > nums[l]) {
      if(target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if(nums[mid] < nums[l]) {
      if(target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      l++;
    }
  }
  return false;
};
// @lc code=end