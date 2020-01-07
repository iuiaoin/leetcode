/*
 * @lc app=leetcode id=1239 lang=javascript
 *
 * [1239] Maximum Length of a Concatenated String with Unique Characters
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {number}
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
        let temp = cur;
        cur += arr[i];
        backtrack(cur, i + 1);
        cur = temp;
      }
    }
  }
};

function isUnique(s) {
  return s.length === new Set(s).size;
}
// @lc code=end

