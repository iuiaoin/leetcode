/*
 * @lc app=leetcode id=1053 lang=javascript
 *
 * [1053] Previous Permutation With One Swap
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var prevPermOpt1 = function(A) {
  let len = A.length;
  if(len <= 1) return A;
  let left = -1;
  for(let i = len - 1; i > 0; i--) {
    if(A[i] < A[i - 1]) {
      left = i - 1;
      break;
    }
  }
  if(left === -1) return A;
  let max = -Infinity;
  let right = -1;
  for(let i = left + 1; i < len; i++) {
    if(A[i] < A[left] && A[i] > max) {
      max = A[i];
      right = i;
    }
  }
  [A[left], A[right]] = [A[right], A[left]];
  return A;
};
// @lc code=end

