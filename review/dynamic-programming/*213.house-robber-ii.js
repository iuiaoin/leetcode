/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 求max{0 ~ i - 1, 1 ~ i}
 */
var rob = function(nums) {
  let len = nums.length;
  if(!len) return 0;
  if(len === 1) return nums[0];
  return Math.max(robber(nums.slice(0, len - 1)), robber(nums.slice(1, len)));

  function robber(num) {
    let dp = new Array(len).fill(0);
    dp[1] = num[0];
    for(let i = 2; i < len; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + num[i - 1]);
    }
    return dp[len - 1];
  }
};
// @lc code=end

