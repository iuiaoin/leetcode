/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let res = nums.length;
  for(let i = 0; i < nums.length; i++) {
    res ^= nums[i] ^ i;
  }
  return res;
};

