/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let len = nums.length;
  let res = [];
  for(let i = 0; i < len; i++) {
    let num = Math.abs(nums[i]);
    if(nums[num - 1] < 0) {
      res.push(num);
    } else {
      nums[num - 1] = -nums[num - 1];
    }
  }
  return res;
};
// @lc code=end

