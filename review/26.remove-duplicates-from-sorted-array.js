/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for(let i = 1; i < nums.length;) {
    if(nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};
// @lc code=end

