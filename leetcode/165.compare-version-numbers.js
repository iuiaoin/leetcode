/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
/**
 * 思路：split之后逐位比较
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let len1 = v1.length;
  let len2 = v2.length;
  let len = len1;
  if(len1 > len2) {
    v2 = v2.concat(new Array(len1 - len2).fill(0));
  } else {
    len = len2;
    v1 = v1.concat(new Array(len2 - len1).fill(0));
  }
  for(let i = 0; i < len; i++) {
    if(+v1[i] > +v2[i]) return 1;
    if(+v1[i] < +v2[i]) return -1;
  }
  return 0;
};
// @lc code=end

