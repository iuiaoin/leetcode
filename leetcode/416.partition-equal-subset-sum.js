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
 * 思路：
 * 这个问题实际上是要找到一个集合，它们的和等于一个具体的数字，在这里是sum / 2
 * 这是0，1背包问题，对于每个数字可以选或不选
 * state: dp[i][j]表示在0~i中能否找到数字和等于j
 * state transition: dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]  (对于num[i]是选或不选))
 * base case: dp[i][0] = true, dp[0][j] = false(j > 0);
 */
var canPartition = function(nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0),
      len = nums.length;
  if(sum % 2) return false;
  sum >>= 1;
  let dp = new Array(len + 1).fill(null).map(() => new Array(sum + 1).fill(false));
  for(let row of dp) {
    row[0] = true;
  };
  for(let i = 1; i < len + 1; i++) {
    for(let j = 1; j < sum + 1; j++) {
      dp[i][j] = dp[i - 1][j];
      if(j >= nums[i]) dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i]];
    }
  }
  return dp[len][sum];
};

