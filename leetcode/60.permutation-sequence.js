/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
/**
 * 思路：按顺序举出排列，输出第k个
 */
var getPermutation = function(n, k) {
  let arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  
  function backtrack(arr, start) {
    for(let i = start; i < n; i++) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      backtrack(arr, i + 1);
      [arr[i], arr[start]] = [arr[start], arr[i]];
    }
  }
};
// @lc code=end

