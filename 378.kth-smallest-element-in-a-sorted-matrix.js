/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
/**
 * 思路：排序之后返回第k个                                                                                                                                                   
 */
var kthSmallest = function(matrix, k) {
  return [].concat(...matrix).sort((a,b) => a - b)[k-1];
};

// var kthSmallest = function(matrix, k) {
//   var n = matrix.length, lo = matrix[0][0]
//   var hi = matrix[n-1][n-1];
//   var mid, count;
  
//   while(lo < hi) {
//       mid = (lo + (hi - lo) / 2) >> 0;
//       count = countLEQ(matrix, mid);
//       if (count < k) {
//           lo = mid + 1;
//       } else {
//           hi = mid;
//       }
//   }
//   return lo;
// };

// var countLEQ = function (matrix, x) {
//   var n = matrix.length;
//   var count = 0;
//   var j;
  
//   matrix.forEach(function(row){
//       for(j = 0; j < n && row[j] <= x; j++){ ;}
//       count += j
//   });
//   return count;
// };