/*
* @lc app=leetcode id=1239 lang=javascript
*
* [1239] Maximum Length of a Concatenated String with Unique Characters
*/

/**
 * @param {string[]} arr
 * @return {number}
 */
/**
 * 思路：找出所有满足条件的字符串取最长
 */
var maxLength = function(arr) {
  if(!arr.length) return 0;
  let res = 0;
  for(let i = 0; i < arr.length; i++) {
    let s = arr[i];
    if(!isUnique(s)) continue;
    res = Math.max(res, s.length);
    for(let j = i + 1; j < arr.length; j++) {
      if(isUnique(s + arr[j])) {
        s += arr[j];
        res = Math.max(res, s.length);
      }
    }
  }
  return res;
};

function isUnique(s) {
  return s.length === new Set(s).size;
}
