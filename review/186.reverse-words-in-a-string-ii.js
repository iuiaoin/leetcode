/*
 * @lc app=leetcode id=186 lang=javascript
 *
 * [186] Reverse Words in a String II
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  s.reverse();
  s.push(' ');
  let i = 0;
  while(i < s.length) {
    let index0 = s.indexOf(' ', i);
    reverse(i, index0 - 1);
    i = index0 + 1;
  }
  s.pop();

  function reverse(i, j) {
    while(i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  }
};
// @lc code=end

