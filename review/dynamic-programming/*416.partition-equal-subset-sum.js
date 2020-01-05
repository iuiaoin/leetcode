/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * state: dp[i][j]表示前i个数能否组成j
 * state transition: dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
 * base case: dp[i][0] = true
 */
// var canPartition = function(nums) {
//   let len = nums.length;
//   if(!len) return true;
//   let sum = nums.reduce((pre, cur) => pre + cur, 0);
//   if(sum % 2) return false;
//   let target = sum / 2;
//   let dp = new Array(len + 1).fill(null).map(v => new Array(target + 1).fill(false));
//   for(let i = 0; i <= len; i++) dp[i][0] = true;
//   for(let i = 1; i <= len; i++) {
//     for(let j = 0; j <= target; j++) {
//       dp[i][j] = dp[i - 1][j];
//       if(j >= nums[i - 1]) dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
//     }
//   }
//   return dp[len][target];
// };


/**
 * 一维优化
 * state: dp[i]表示能否得到和为i
 * state transition: dp[i] = dp[i] || dp[i - nums[j]]
 * base case: dp[0] = true
 */
var canPartition = function(nums) {
  let len = nums.length;
  if(!len) return true;
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  if(sum % 2) return false;
  let target = sum / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for(let i = 0; i < len; i++) {
    for(let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return dp[target];
}
// @lc code=end

