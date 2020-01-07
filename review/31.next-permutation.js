/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length;
  let left = -1;
  for(let i = len - 1; i > 0; i--) {
    if(nums[i] > nums[i - 1]) {
      left = i - 1;
      break;
    }
  }
  if(left === -1) return reverse(0, len - 1);
  for(let i = len - 1; i > left; i--) {
    if(nums[i] > nums[left]) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      return reverse(left + 1, len - 1);
    }
  }

  function reverse(i, j) {
    while(i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
};
// @lc code=end

