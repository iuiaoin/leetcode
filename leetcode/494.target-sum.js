/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
/**
 * 思路：O(2^n) dfs计算和若等于target则count++
 */
var findTargetSumWays = function(nums, S) {
  let len = nums.length,
      count = 0;
  caculate(0, 0);
  return count;

  function caculate(index, sum) {
    if(index === len) {
      if(sum === S) count++;
    } else {
      caculate(index + 1, sum + nums[index]);
      caculate(index + 1, sum - nums[index]);
    }
  }
};

