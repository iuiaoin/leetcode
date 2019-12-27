/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let res = Infinity;
  if(nums.length < 3) return res;
  backtrack(0, 0, 0);
  return res;

  function backtrack(sum, count, start) {
    if(count === 3) {
      if(Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      return;
    }
    for(let i = start; i < nums.length; i++) {
      backtrack(sum + nums[i], count + 1, i + 1);
    }
  }
};
// @lc code=end

