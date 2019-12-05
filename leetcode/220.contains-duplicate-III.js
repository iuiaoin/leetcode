/*
* @lc app=leetcode id=220 lang=javascript
*
* [220] Contains Duplicate III
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
/**
 * 思路：使用size为t+1的桶，桶的个数保持k个，遍历nums若在桶中或前后桶存在且差值小于等于t返回true
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let map = {};
  if(k < 1 || t < 0) return false;
  for(let i = 0; i < nums.length; i++) {
    let bucket = Math.floor(nums[i] / (t + 1));
    if(map[bucket] !== void 0
      || map[bucket - 1] !== void 0 && nums[i] - map[bucket - 1] <= t
      || map[bucket + 1] !== void 0 && map[bucket + 1] - nums[i] <= t) {
        return true;
    } 
    map[bucket] = nums[i];
    if(i >= k) {
      let lastBucket = Math.floor(nums[i - k] / (t + 1));
      delete map[lastBucket];
    }
  }
  return false;
};

