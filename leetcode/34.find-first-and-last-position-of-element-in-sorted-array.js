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
 * 思路：二分查找，找到之后向左右遍历找到不重复的，否则返回-1
 */
var searchRange = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let pos = -1;
  let res = [-1, -1];
  while(l <= r) {
    let mid = (l + r) >> 1;
    if(nums[mid] < target) {
      l = mid + 1;
    } else if(nums[mid] > target) {
      r = mid - 1;
    } else {
      pos = mid;
      break; 
    }
  }
  if(pos === -1) return res;
  for(let i = pos; i >= 0; i--) {
    if(nums[i] !== target) break;
    res[0] = i;
  }
  for(let j = pos; j < nums.length; j++) {
    if(nums[j] > target) break;
    res[1] = j;
  }
  return res;
};
// @lc code=end

