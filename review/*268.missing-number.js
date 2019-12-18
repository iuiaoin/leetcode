/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let len = nums.length;
  if(len < 1) return -1;
  let res = len;
  for(let i = 0; i < len; i++) {
    res ^= nums[i] ^ i;
  }
  return res;
};
// @lc code=end

