/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
/**
 * 思路：转化为子集和问题，相当于在nums中找到两个subset,一个全为正P,一个全为负N,sum(P) - sum(N) = target，即 2sum(P) = target + sum(nums)
 * 最终为：在nums找到一个全为正数的集合P使得 sum(P) = (target + sum(nums)) / 2
 * 
 * dp[i] 表示和为i的集合的数量
 */
var findTargetSumWays = function(nums, S) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  if(sum < S || (S + sum) % 2) return 0;
  let target = (S + sum) >> 1;
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for(let i = 0; i < nums.length; i++) {
    for(let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
};

