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
/**
 * 思路：采用递归的方式来遍历nums，若在set中没出现过则推入结果中
 */
var subsetsWithDup = function(nums) {
  let len = nums.length;
  let res = [[]];
  let set = new Set();
  for(let i = 1; i <= len; i++) {
    helper(nums, set, i, [], res, 0);
  }
  return res;

  function helper(nums, set, k, cur, res, start) {
    if(cur.length > k) return;
    if(cur.length === k) {
      let clone = cur.slice();
      let str = clone.sort().toString();
      if(!set.has(str)) {
        res.push(clone);
        set.add(str);
      }
      return;
    }
    for(let i = start; i < len; i++) {
      cur.push(nums[i]);
      helper(nums, set, k, cur, res, i + 1);
      cur.pop();
    }
  }
};
// @lc code=end

