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
  let m = nums1.length;
  let n = nums2.length;
  if(m > n) {
    [m, n] = [n, m];
    [nums1, nums2] = [nums2, nums1];
  }
  let len = m + n;
  let half = len + 1 >> 1;
  let maxLeft = 0;
  let minRight = 0;
  let odd = len % 2;
  let l = 0;
  let r = m;
  while(l <= r) {
    let i = l + r >> 1;
    let j = half - i;
    if(nums1[i - 1] > nums2[j]) {
      r = i - 1;
    } else if(nums2[j - 1] > nums1[i]) {
      l = i + 1;
    } else {
      if(i === 0) {
        maxLeft = nums2[j - 1];
      } else if(j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      if(odd) return maxLeft;

      if(i === m) {
        minRight = nums2[j];
      } else if(j === n) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }
      return (maxLeft + minRight) / 2;
    }
  }
}

// @lc code=end