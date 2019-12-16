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
// var findMedianSortedArrays = function (nums1, nums2) {
//   let m = nums1.length;
//   let n = nums2.length;
//   let len = Math.floor((m + n) / 2) + 1;
//   let arr = [];
//   for (let i = 0; i < len; i++) {
//     let num1 = nums1.length ? nums1[0] : Infinity;
//     let num2 = nums2.length ? nums2[0] : Infinity;
//     if(num1 < num2) {
//       arr.push(nums1.shift());
//     } else {
//       arr.push(nums2.shift());
//     }
//   }
//   if((m + n) % 2) {
//     return arr[len - 1];
//   } else {
//     return (arr[len - 1] + arr[len - 2]) / 2;
//   }
// };

var findMedianSortedArrays = function (nums1, nums2) {
  if(nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  let m = nums1.length;
  let n = nums2.length;
  let len = m + n;
  let half = len % 2 ? Math.floor(len / 2) - 1 : Math.floor(len / 2) - 2;
  let l = 0;
  let r = m - 1;
  if(m === 0 || nums1[m - 1] <= nums2[0]) {
    if(len % 2) {
      return nums2[Math.floor(len / 2) - m];
    } else {
      if(m === n) return (nums1[m - 1] + nums2[0]) / 2;
      let index = Math.floor(len / 2) - m - 1;
      return (nums2[index] + nums2[index+1]) / 2;
    }
  }
  while(l <= r) {
    let mid = l + r >> 1;
    if(nums1[mid] > nums2[half - mid + 1]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  if(len % 2) {
    return Math.max(nums1[r] === undefined ? -Infinity :nums1[r], nums2[half - r]);
  } else {
    return (Math.max(nums1[r], nums2[half - r]) + Math.min(nums1[r + 1], nums2[half - r + 1])) / 2;
  }
}

// @lc code=end