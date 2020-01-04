/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * state: dp[i]前i项能得到的最大值
 * state transition: dp[i] = max{dp[i - 1], dp[i - 2] + nums[i]}
 * base case: dp[0] = 0, dp[1] = nums[0]
 */
// var rob = function(nums) {
//   let len = nums.length;
//   if(!len) return 0;
//   let dp = new Array(len + 1).fill(0);
//   dp[1] = nums[0];
//   for(let i = 2; i <= len; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
//   }
//   return dp[len];
// };

/**
 * state: dp[i]表示[取nums[i], 不取nums[i]]
 * state transition: dp[i] = [dp[i - 1][1] + nums[i], max{dp[i - 1][0], dp[i - 1][1]];
 * base case: dp[0] = [0, 0];
 */
var rob = function(nums) {
  let len = nums.length;
  if(!len) return 0;
  let dp = new Array(len + 1).fill(null).map(v => [0, 0]);
  for(let i = 1; i <= len; i++) {
    dp[i] = [dp[i - 1][1] + nums[i - 1], Math.max(dp[i - 1][0], dp[i - 1][1])];
  }
  return Math.max(...dp[len]);
};

// var rob = function(nums) {
//   let len = nums.length;
//   if(!len) return 0;
//   let pre = 0;
//   let cur = nums[0];
//   let res = cur;
//   for(let i = 2; i <= len; i++) {
//     res = Math.max(cur, pre + nums[i - 1]);
//     pre = cur;
//     cur = res;
//   }
//   return res;
// };
// @lc code=end

