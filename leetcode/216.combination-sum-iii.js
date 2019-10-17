/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
/**
 * 思路：采用回溯，从1~9按照递增的顺序选数，并且记录上次选的index来避免重复
 */
var combinationSum3 = function(k, n) {
  let res = [];
  helper(k, n, 1, []);
  return res;

  function helper(k, n, start, cur) {
    if(cur.length === k && n === 0) {
      return res.push(cur.slice());
    }
    for(let i = start; i <= 9; i++) {
      cur.push(i);
      helper(k, n - i, i + 1, cur);
      cur.pop();
    }
  }
};

// @lc code=end

