/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */
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
  let area1 = (C - A) * (D - B);
  let area2 = (G - E) * (H - F);
  let common = 0;
  let hasCommon = A < G && B < H && C > E && D > F;
  if(hasCommon) {
    let x1 = Math.max(A, E);
    let y1 = Math.max(B, F);
    let x2 = Math.min(C, G);
    let y2 = Math.min(D, H);
    common = (x2 - x1) * (y2 - y1);
  }
  return area1 + area2 - common;
};

