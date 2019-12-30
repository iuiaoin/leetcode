/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(!nums.length) return -1;
  let len = nums.length;
  let l = 0;
  let r = len - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums[mid] > nums[len - 1]) {
      l = mid + 1;
    } else if(nums[mid] < nums[len - 1]) {
      r = mid - 1;
    } else if(nums[mid] > nums[l]){
      r--;
    } else {
      l++;
    }
  }
  return l === len ? nums[l - 1] : nums[l]; 
};
// @lc code=end

