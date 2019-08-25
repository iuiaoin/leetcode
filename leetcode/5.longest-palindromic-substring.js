/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if(s.length < 2) return s;
  let res = '';
  for(let i = 0; i < s.length; i++) {
    findPalidrome(i, i);
    findPalidrome(i, i + 1);
  }
  function findPalidrome(i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;      
    }
    i++;
    j--;
    if(res.length < j - i + 1) {
      res = s.slice(i, j + 1);
    }
  }
  return res;
};
