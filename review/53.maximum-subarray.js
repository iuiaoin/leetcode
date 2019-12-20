/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  if(!len) return 0;
  let dp = new Array(len).fill(0);
  dp[0] = nums[0];
  for(let i = 1; i < len; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  return Math.max(...dp);
};
// @lc code=end

