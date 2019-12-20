/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   let len = nums.length;
//   if(!len) return 0;
//   let dp = new Array(len).fill(1);
//   for(let i = 1; i < len; i++) {
//     for(let j = 0; j < i; j++) {
//       if(nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[j] + 1, dp[i]);
//       }
//     }
//   }
//   return Math.max(...dp);
// };

var lengthOfLIS = function(nums) {
  let len = nums.length;
  if(!len) return 0;
  let dp = [];
  for(let i = 0; i < len; i++) {
    let l = 0;
    let r = dp.length - 1;
    while(l <= r) {
      let mid = l + r >> 1;
      if(dp[mid] < nums[i]) {
        l++;
      } else {
        r--;
      }
    }
    dp[l] = nums[i];
  }
  return dp.length;
};
// @lc code=end

