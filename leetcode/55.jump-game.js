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
/**
 * 思路：将能够到达last index的位置称为good index，不能的称为bad index，那么问题则为判断0是否是good index, 从右往左遍历，满足 i + nums[i] >= lastPos的即为good index，并且以good index来更新lastPos，最后只需判断lastPos是否等于1即可
 */
var canJump = function(nums) {
  if(!nums.length) return true;
  let lastPos = nums.length - 1;
  for(let i = lastPos; i >= 0; i--) {
    if(i + nums[i] >= lastPos) lastPos = i;
  }
  return lastPos === 0;
};
// @lc code=end

