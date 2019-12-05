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
 * 思路：滑动窗口，在指针l, l + k之间若存在差值小于等于t的则返回true
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let l = 0;
  let r = l + k < nums.length ? l + k : nums.length - 1;
  while(l < r) {
    for(let j = l + 1; j <= r; j++) {
      if(Math.abs(nums[l] - nums[j]) <= t) return true;
    }
    if(r < nums.length - 1) r++;
    l++;
  }
  return false;
};

