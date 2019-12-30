/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(s, nums) {
//   let len = nums.length;
//   let res = Infinity;
//   for(let i = 0; i < len; i++) {
//     let sum = 0;
//     let count = 0;
//     for(let j = i; j >= 0; j--) {
//       sum += nums[j];
//       count++;
//       if(sum >= s) {
//         res = Math.min(res, count);
//         break;
//       }
//     }
//   }
//   return res === Infinity ? 0 : res;
// };

var minSubArrayLen = function(s, nums) {
  let len = nums.length;
  if(!len) return 0;
  let i = 0;
  let j = 0;
  let sum = 0;
  let res = Infinity;
  while(i < len) {
    sum += nums[i];
    i++;
    while(sum >= s) {
      res = Math.min(res, i - j);
      sum -= nums[j];
      j++;
    }
  }
  return res === Infinity ? 0 : res;
};
// @lc code=end

