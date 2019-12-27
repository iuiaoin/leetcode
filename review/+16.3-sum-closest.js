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
// var threeSumClosest = function(nums, target) {
//   let res = Infinity;
//   if(nums.length < 3) return res;
//   backtrack(0, 0, 0);
//   return res;

//   function backtrack(sum, count, start) {
//     if(count === 3) {
//       if(Math.abs(sum - target) < Math.abs(res - target)) {
//         res = sum;
//       }
//       return;
//     }
//     for(let i = start; i < nums.length; i++) {
//       backtrack(sum + nums[i], count + 1, i + 1);
//     }
//   }
// };

// 双指针优化
var threeSumClosest = function(nums, target) {
  if(nums.length < 3) return -1;
  let res = -1;
  let dis = Infinity;
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for(let i = 0; i < len - 2; i++) {
    let l = i + 1;
    let r = len - 1;
    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if(sum === target) return sum;
      if(sum < target) {
        l++;
      } else {
        r--;
      }
      let curDis = Math.abs(sum - target);
      if(curDis < dis) {
        dis = curDis;
        res = sum;
      }
    }
  }
  return res;
};
// @lc code=end

