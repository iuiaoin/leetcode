/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//   let len = nums.length;
//   let l = 0;
//   let r = l + k < len ? l + k : len - 1;
//   while(l < r) {
//     for(let i = l + 1; i <= r; i++) {
//       if(Math.abs(nums[l] - nums[i]) <= t) return true;
//     }
//     l++;
//     if(r < len - 1) r++;
//   }
//   return false;
// };


var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length;
  let map = {};
  if(t < 0) return false;
  for (let i = 0; i < len; i++) {
    let bucket = Math.floor(nums[i] / (t + 1));
    if (map[bucket] !== void 0 ||
      map[bucket - 1] !== void 0 && nums[i] - map[bucket - 1] <= t ||
      map[bucket + 1] !== void 0 && map[bucket + 1] - nums[i] <= t) {
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
// @lc code=end