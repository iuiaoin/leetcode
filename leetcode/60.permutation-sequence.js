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
  let res = '';
  backtrack(arr, []);
  return res;
  
  function backtrack(arr, cur) {
    if(cur.length === n) {
      k--;
      if(k === 0) {
        return res = cur.join('');
      }
    }
    for(let i = 0; i < n; i++) {
      if(cur.indexOf(arr[i]) > -1) continue;
      cur.push(arr[i]);
      backtrack(arr, cur);
      cur.pop();
    }
  }
};
// @lc code=end

