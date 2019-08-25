/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  function getNum(char) {
    let NumA = 'A'.charCodeAt(0);
    return char.charCodeAt(0) - NumA + 1;
  }
  let res = 0;
  let j = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    res += getNum(s[i]) * Math.pow(26, j);
    j++;
  }
  return res;
};

