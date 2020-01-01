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
var pancakeSort = function(A) {
  let len = A.length;
  let res = [];
  for(let i = len; i >= 1; i--) {
    let index = A.indexOf(i);
    reverse(index);
    res.push(index + 1);
    reverse(i - 1);
    res.push(i);
  }
  return res;
  
  function reverse(r) {
    let l = 0;
    while(l < r) {
      [A[l], A[r]] = [A[r], A[l]];
      l++;
      r--;
    }
  }
};
// @lc code=end