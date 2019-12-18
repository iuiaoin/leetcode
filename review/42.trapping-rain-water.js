/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let len = height.length;
  if(len <= 2) return 0;
  let left = new Array(len).fill(0);
  let right = new Array(len).fill(0);
  left[0] = height[0];
  right[len - 1] = height[len - 1];
  for(let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }
  for(let i = len - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }
  let res = 0;
  for(let i = 0; i < len; i++) {
    res += Math.min(left[i], right[i]) - height[i];
  }
  return res;
};
// @lc code=end

