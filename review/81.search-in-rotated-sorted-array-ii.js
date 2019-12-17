/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let len = nums.length;
  let l = 0;
  let r = len - 1;
  while (l <= r) {
    let mid = l + r >> 1;
    if (nums[mid] >= nums[0] && nums[mid] >= nums[len - 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  let ro = l;
  l = 0;
  r = len - 1;
  while (l <= r) {
    let mid = l + r >> 1;
    let realmid = (mid + ro) % len;
    if (nums[realmid] === target) return true;
    if (nums[realmid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};
// @lc code=end