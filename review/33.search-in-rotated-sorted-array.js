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
  if(r < 0) return bs(0, len - 1);
  if(target >= nums[0]) {
    return bs(0, r);
  } else {
    return bs(r + 1, len - 1);
  }

  function bs(l, r) {
    while(l <= r) {
      let mid = l + r >> 1;
      if(nums[mid] === target) return mid;
      if(nums[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return -1;
  }
};
// @lc code=end

