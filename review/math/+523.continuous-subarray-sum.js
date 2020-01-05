/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var checkSubarraySum = function(nums, k) {
//   let len = nums.length;
//   if(len < 2) return false;
//   for(let i = 1; i < len; i++) {
//     let sum = nums[i];
//     for(let j = i - 1; j >= 0; j--) {
//       sum += nums[j];
//       if(sum % k === 0 || sum === 0 && k === 0) return true;
//     }
//   }
//   return false;
// };

// 余数定理
var checkSubarraySum = function(nums, k) {
  let len = nums.length;
  if(len < 2) return false;
  let map = {0: -1};
  let sum = 0;
  for(let i = 0; i < len; i++) {
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
// @lc code=end

