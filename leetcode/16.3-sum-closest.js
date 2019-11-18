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
 * 思路：先将nums排序，使用3个指针分别指向currnet元素，next元素和last元素，若3者之和小于target，则next后移，否则last前移，返回与target差最小的sum
 */
var threeSumClosest = function(nums, target) {
  let len = nums.length;
  if(len < 3) return -1;
  nums.sort((a, b) => a - b);
  let dis = Infinity;
  let res;
  for(let i = 0; i < len - 2; i++) {
    let start = i + 1;
    let end = len - 1;
    while(start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if(sum === target) return sum;
      if(sum < target) {
        start++;
      } else {
        end--;
      }
      if(Math.abs(sum - target) < dis) {
        dis = Math.abs(sum - target);
        res = sum;
      }
    }
  }
  return res;
};
// @lc code=end

