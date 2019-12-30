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
var combinationSum3 = function(k, n) {
  let res = [];
  backtrack([], 0, 1);
  return res;

  function backtrack(cur, sum, index) {
    if(cur.length > k) return;
    if(cur.length === k) {
      if(sum === n) res.push(cur.slice());;
      return;
    };
    for(let i = index; i <= 9; i++) {
      cur.push(i);
      backtrack(cur, sum + i, i + 1);
      cur.pop();
    }
  }
};
// @lc code=end

