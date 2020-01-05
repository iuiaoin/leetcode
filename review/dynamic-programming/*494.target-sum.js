/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
/**
 * 问题转化为在nums中找出子集满足 (S + sum)/2 的数量
 * state: dp[i]表示和为i的数量
 * state transition: dp[i] = dp[i - nums[j]]
 * base case: dp[0] = 1
 */
var findTargetSumWays = function(nums, S) {
  let len = nums.length;
  if(!len) return 0;
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  if(sum < S || (sum + S) % 2) return 0;
  let target = sum + S >> 1;
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for(let i = 0; i < len; i++) {
    for(let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
};
// @lc code=end

