/*
 * @lc app=leetcode id=969 lang=javascript
 *
 * [969] Pancake Sorting
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
/**
 * 思路：对于当前的最大值x，在index处，则reverse前index + 1个值，x在A[0], reverse前x个值则x会被放到x - 1处，重复n次
 */
var pancakeSort = function(A) {
  let len = A.length,
      res = [];
  for(let i = len; i > 0; i--) {
    let index = A.indexOf(i);
    reverse(index);
    res.push(index + 1);
    reverse(i - 1);
    res.push(i);
  }
  return res;

  function reverse(index) {
    for(let i = 0, j = index; i < j; i++, j--) {
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
};
// @lc code=end

