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
  backtrack('', 0);
  return res;

  function backtrack(cur, start) {
    res = Math.max(cur.length, res);
    for(let i = start; i < arr.length; i++) {
      if(isUnique(cur + arr[i])) {
        let len = cur.length;
        cur += arr[i];
        backtrack(cur, i + 1);
        cur = cur.slice(0, len);
      }
    }
  }
};

function isUnique(s) {
  return s.length === new Set(s).size;
}
