/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * 思路：将数组排序，找出所有的4组数，若等于target推入结果
 */
var fourSum = function(nums, target) {
  let res = [];
  let len = nums.length;
  let set = new Set();
  nums.sort((a, b) => a - b);
  for(let i = 0; i < len - 3; i++) {
    for(let j = i + 1; j < len - 2; j++) {
      for(let k = j + 1; k < len - 1; k++) {
        for(let l = k + 1; l < len; l++) {
          let sum = nums[i] + nums[j] + nums[k] + nums[l];
          if(sum > target) break;
          if(sum === target && !set.has([nums[i], nums[j], nums[k], nums[l]].toString())) {
            set.add([nums[i], nums[j], nums[k], nums[l]].toString());
            res.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }
  return res;
};
// @lc code=end

