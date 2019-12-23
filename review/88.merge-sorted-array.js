/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = nums1.length;
  for (let i = len - 1; i >= 0; i--) {
    if(!n) break;
    if(m === 0 || nums2[n - 1] >= nums1[m - 1]) {
      nums1[i] = nums2[n - 1];
      n--;
    } else {
      [nums1[m - 1], nums1[i]] = [nums1[i], nums1[m - 1]];
      m--;
    }
  }
};
// @lc code=end