/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let len = Math.floor((m + n) / 2) + 1;
  let arr = [];
  for (let i = 0; i < len; i++) {
    let num1 = nums1.length ? nums1[0] : Infinity;
    let num2 = nums2.length ? nums2[0] : Infinity;
    if(num1 < num2) {
      arr.push(nums1.shift());
    } else {
      arr.push(nums2.shift());
    }
  }
  if((m + n) % 2) {
    return arr[len - 1];
  } else {
    return (arr[len - 1] + arr[len - 2]) / 2;
  }
};
// @lc code=end