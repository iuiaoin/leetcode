/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/**
 * 思路：采用回溯，从1开始往数组中添加之后的数，满足条件时添加到结果中
 */
var combine = function(n, k) {
  let res = [];
  backtrack(res, [], 1, n, k);
  return res;

  function backtrack(res, cur, start, n, k ) {
    if(k === 0) {
      res.push(cur.slice());
      return;
    }
    for(let i = start; i <= n - k + 1; i++) {
      cur.push(i);
      backtrack(res, cur, i + 1, n, k - 1);
      cur.pop();
    }
  }
};
// @lc code=end

