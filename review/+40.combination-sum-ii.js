/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let can = candidates;
  let res = [];
  if(!can.length) return res;
  can.sort((a, b) => a - b);
  dfs([], 0, 0);
  return res;
  
  function dfs(cur, sum, start) {
    if(sum > target) return;
    if(sum === target) return res.push(cur.slice());
    for(let i = start; i < can.length; i++) {
      if(i > start && can[i - 1] === can[i]) continue;
      cur.push(can[i]);
      dfs(cur, sum + can[i], i + 1);
      cur.pop();
    }
  }
};
// @lc code=end

