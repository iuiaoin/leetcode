/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：二分查找，区分左右两边的条件是在遇到single number之前，偶数位index永远满足nums[index] === nums[index + 1]
 */
var singleNonDuplicate = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while(l <= r) {
    let mid = l + ((r - l) >> 1);
    if(mid % 2) mid--;
    if(nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid - 2;
    }
  }
  return nums[l];
};
// @lc code=end

