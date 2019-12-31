/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length;
  let p = len - 1;
  for(let i = len - 1; i >= 0; i--) {
    if(p - i <= nums[i]) p = i;
  }
  return p === 0;
};
// @lc code=end

