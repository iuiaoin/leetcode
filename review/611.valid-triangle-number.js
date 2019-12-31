/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  if(len < 3) return 0;
  let res = 0;
  backtrack([], 0);
  return res;

  function backtrack(cur, index) {
    if(cur.length > 3) return;
    if(cur.length === 3) {
      let [a, b, c] = cur;
      if(a + b > c && Math.abs(a - b) < c) res++;
      return;
    }
    for(let i = index; i < len; i++) {
      cur.push(nums[i]);
      backtrack(cur, i + 1);
      cur.pop();
    }
  }
};
// @lc code=end

