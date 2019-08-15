/*
 * @lc app=leetcode id=186 lang=javascript
 *
 * [186] Reverse Words in a String II
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  let arr = reverse(s, 0, s.length - 1);
  let l = 0,
      r = arr.indexOf(' ') - 1;
  while(r !== -2) {
    reverse(arr, l, r);
    l = r + 2;
    r = arr.indexOf(' ', l) - 1;
  }
  reverse(arr, l, s.length - 1)
};

function reverse(s, l, r) {
  while(l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s;
}

