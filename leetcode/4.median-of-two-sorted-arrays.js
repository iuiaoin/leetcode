/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length,
      n = nums2.length;
  if(m > n) {
    [ m, n ] = [ n, m ];
    [ nums1, nums2 ] = [ nums2, nums1 ];
  };
  let minIdx = 0,
      maxIdx = m,
      half = (m + n + 1) >> 1,
      maxLeft = 0,
      minRight = 0,
      odd = (m + n) % 2;
  while(minIdx <= maxIdx) {
    let i = (minIdx + maxIdx) >> 1,
        j = half - i;
    if(i < maxIdx && nums2[j - 1] > nums1[i]) {
      minIdx = i + 1;
    } else if(i > minIdx && nums1[i - 1] > nums2[j] ) {
      maxIdx = i - 1;
    } else {
      if(i === 0) maxLeft = nums2[j - 1];
      else if(j === 0) maxLeft = nums1[i - 1];
      else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      if(odd) return maxLeft;
      
      if(i === m) minRight = nums2[j];
      else if(j === n) minRight = nums1[i];
      else minRight = Math.min(nums1[i], nums2[j]);
      return (maxLeft + minRight) / 2;
    }
  }
  return 0;
};

