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
/**
 * 思路：遍历array，使用set存储出现过的数字，将重复的数字推入结果中
 */
var findDuplicates = function(nums) {
  let res = [],
      set = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {
      res.push(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return res;
};
// @lc code=end

