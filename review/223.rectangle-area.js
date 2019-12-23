/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let area = (C - A) * (D - B) + (G - E) * (H - F);
  let left = Math.max(A, E);
  let right = Math.min(C, G);
  let top = Math.min(D, H);
  let bottom = Math.max(B, F);
  if(left >= right || bottom >= top) return area;
  return area - (right - left) * (top - bottom);
};
// @lc code=end

