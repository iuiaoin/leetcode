/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0,
    r = height.length - 1,
    maxL = 0,
    maxR = 0,
    res = 0;
  while (l <= r) {
    if (maxL < maxR) {
      if (maxL < height[l]) {
        maxL = height[l];
      } else {
        res += maxL - height[l];
      }
      l++;
    } else {
      if (maxR < height[r]) {
        maxR = height[r];
      } else {
        res += maxR - height[r];
      }
      r--;
    }
  }
  return res;
};