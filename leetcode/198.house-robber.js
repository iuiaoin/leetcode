/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：
 * state: cur 表示前i项可以拿到的最多的钱
 * state transition: cur = max{ cur, pre + nums[i] }
 */
var rob = function(nums) {
  let len = nums.length,
      cur = 0,
      pre = 0;

  for(let i = 0; i < len; i++) {
    let temp = cur;
    cur = Math.max(pre + nums[i], cur);
    pre = temp;
  }
  return cur;
};
// @lc code=end

