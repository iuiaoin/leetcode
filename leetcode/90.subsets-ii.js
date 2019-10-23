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
 * 思路：先将nums排序，采用递归(回溯)的方式来遍历nums, 跳过相同的数字来避免重复
 */
var subsetsWithDup = function(nums) {
  nums.sort();
  let len = nums.length;
  let res = [];
  helper(nums, 0, [], res);
  return res;

  function helper(nums, start, cur, res) {
    let clone = cur.slice();
    res.push(clone);
    for(let i = start; i < len; i++) {
      if(i > start && nums[i] === nums[i - 1]) continue;
      cur.push(nums[i]);
      helper(nums, i + 1, cur, res);
      cur.pop();
    }
  }
};
// @lc code=end

