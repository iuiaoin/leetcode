/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let len = nums.length;
  if(!len) return [];
  let res = [];
  nums.sort((a, b) => a - b);
  let visit = new Array(len).fill(false);
  dfs([]);
  return res;

  function dfs(cur) {
    if(cur.length === len) return res.push(cur.slice());
    for(let i = 0; i < len; i++) {
      if(visit[i] || i > 0 && !visit[i - 1] && nums[i - 1] === nums[i]) continue;
      visit[i] = true;
      cur.push(nums[i]);
      dfs(cur);
      visit[i] = false;
      cur.pop(); 
    }
  }
};
// @lc code=end

