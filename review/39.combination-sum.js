/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let can = candidates;
  if(!can.length) return [];
  let res = [];
  backtrack([], 0, 0);
  return res;
  
  function backtrack(cur, sum, start) {
    if(sum > target) return;
    if(sum === target) return res.push(cur.slice());
    for(let i = start; i < can.length; i++) {
      cur.push(can[i]);
      backtrack(cur, sum + can[i], i);
      cur.pop();
    }
  }
};
// @lc code=end

