/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let str = s.trim().replace(/\s+/g, ' ');
  let arr = str.split(' ');
  let l = 0,
      r = arr.length - 1;
  while(l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr.join(' ');
};

