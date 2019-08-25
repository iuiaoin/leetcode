/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let i = 0,
      sum = 0,
      max = -Infinity;
  while(i < nums.length) {
    if(sum + nums[i] < 0) {
      sum = 0;
    } else {
      let temp = sum + nums[i];
      max = Math.max(max, temp);
      sum = temp;
    }
    i++;
  }
  return max === -Infinity ? Math.max(...nums) : max;
};

