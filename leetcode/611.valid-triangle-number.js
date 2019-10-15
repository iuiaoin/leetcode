/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：找到所有的3个一组的数对，判断是否可以组成三角形并累加
 */
var triangleNumber = function(nums) {
  let count = 0,
      len = nums.length;
  for(let i = 0; i < len - 2; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      for(let k = j + 1; k < len; k++) {
        if(canBeTriangle(nums[i], nums[j], nums[k])) count++;
      }
    }
  }
  return count;
  function canBeTriangle(a, b, c) {
    return a + b > c && Math.abs(a - b) < c;
  }
};
// @lc code=end

