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
// var findTargetSumWays = function(nums, S) {
//   let len = nums.length;
//   if(!len) return 0;
//   let sum = nums.reduce((pre, cur) => pre + cur, 0);
//   let target = S + sum;
//   if(target % 2) return 0;
//   target /= 2;
//   let dp = new Array(target + 1).fill(0);
//   dp[0] = 1;
//   for(let i = 1; i <= target; i++) {
//     for(let j = 0; j < len; j++) {
//       if(i >= nums[j]) {
//         dp[i] += dp[i - nums[j]];
//       }
//     }
//   }
//   return dp[target];
// };
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
  console.log(dp);
  return dp[target];
};
// @lc code=end

