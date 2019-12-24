/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let len = nums.length;
  if(!len) return -1;
  let l = 0;
  let r = len - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums[mid] >= nums[0] && nums[mid] > nums[len - 1]) {
      l = mid + 1;
    } else{
      r = mid - 1;
    }
  } 
  return nums[l];
};
// @lc code=end

