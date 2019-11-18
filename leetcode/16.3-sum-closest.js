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
/**
 * 思路：遍历nums,找出所有3数的和取绝对值最小的
 */
var threeSumClosest = function(nums, target) {
  let len = nums.length;
  if(!len) return -1;
  let dis = Infinity;
  let res = -1;
  for(let i = 0; i < len - 2; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      for(let k = j + 1; k < len; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let curDis = Math.abs(sum - target);
        if(curDis < dis) {
          dis = curDis;
          res = sum;
        }
      }
    }
  }
  return res;
};
// @lc code=end

