/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 思路：空间优化为一维数组
 * state: dp[i]表示在数组中能否找到和等于i的集合
 * state transition: dp[i] = dp[i] || dp[i - nums[j]]
 * base case: dp[0] = true
 * line24从右往左遍历的原因，数字只能使用没组合过数字(比如[1,2,5], 不能用3)
 */
var canPartition = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  if (sum % 2) return false;
  sum /= 2;
  let dp = Array(sum + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j >= nums[i]; j--) {   //line 24
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return dp[sum];
};
