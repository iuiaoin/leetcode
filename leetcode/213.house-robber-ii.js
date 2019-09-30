/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：房子是环状不能相邻rob，可以转化为求 max{ 0 ~ i-1, 1 ~ i }
 */
var rob = function(nums) {
  let len = nums.length;
  if(len === 1) return nums[0];
  return Math.max(robber(0, len - 1), robber(1, len));

  function robber(l, r) {
    let cur = 0,
        pre = 0;
    for(let i = l; i < r; i++) {
      let temp = cur;
      cur = Math.max(pre + nums[i], cur);
      pre = temp;
    }
    return cur;
  }
};
// @lc code=end

