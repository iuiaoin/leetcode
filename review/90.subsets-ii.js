/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let len = nums.length;
  if(!len) return [];
  let res = [];
  nums.sort((a, b) => a - b);
  let visit = new Array(len).fill(false);
  backtrack([], 0);
  return res;

  function backtrack(cur, start) {
    res.push(cur.slice());
    for(let i = start; i < len; i++) {
      if(i > 0 && !visit[i - 1] && nums[i - 1] === nums[i]) continue;
      cur.push(nums[i]);
      visit[i] = true;
      backtrack(cur, i + 1);
      cur.pop();
      visit[i] = false;
    }
  }
};
// @lc code=end

