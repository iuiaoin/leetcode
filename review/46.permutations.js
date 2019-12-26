/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(!nums.length) return [];
  let res = [];
  backtrack([]);
  return res;
  
  function backtrack(cur) {
    if(cur.length === nums.length) return res.push(cur.slice());
    for(let i = 0; i < nums.length; i++) {
      if(cur.indexOf(nums[i]) > -1) continue;
      cur.push(nums[i]);
      backtrack(cur);
      cur.pop();
    }
  }
};
// @lc code=end

