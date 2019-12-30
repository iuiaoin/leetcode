/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length;
  let l = 0;
  let r = len - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums[mid] >= nums[0] && nums[mid] >= nums[len - 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  let ro = l;
  l = 0;
  r = len - 1;
  while(l <= r) {
    let mid = l + r >> 1;
    let realmid = (mid + ro) % len;
    if(nums[realmid] === target) return realmid;
    if(nums[realmid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};
// @lc code=end

