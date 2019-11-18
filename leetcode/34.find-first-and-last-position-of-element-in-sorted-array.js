/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 思路：将target加减0.5作为新的target，然后在nums中使用二分查找target的值
 */
var searchRange = function(nums, target) {
  let l = bs(nums, target - 0.5);
  let r = bs(nums, target + 0.5);
  if(l === r) return [-1, -1];
  return [l, r - 1];
};

function bs(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while(l <= r) {
    let mid = (l + r) >> 1;
    if(nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  };
  return l;
}
// @lc code=end

