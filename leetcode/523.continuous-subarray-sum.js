/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * 思路：利用余数定理，遍历数组将数字和与k取余，若之前曾出现过相同的余数，则说明他们之间存在这样的和满足条件
 * 注意：结果数组的size >= 2, 取余时k !== 0
 */
var checkSubarraySum = function(nums, k) {
  let map = {0: -1},
      sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(k !== 0) sum %= k;
    if(map[sum] !== void 0) {
      if(i - map[sum] > 1) return true;
    } else {
      map[sum] = i;
    }
  }
  return false;
};

