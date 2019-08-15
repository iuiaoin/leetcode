/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = [[''], [''], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
  if(!digits) return [];
  let res = [];
  combos(0, '');
  return res;
  function combos(index, s) {
    if(index === digits.length) return res.push(s);
    map[digits[index]].forEach(ch => {
      let idx = index + 1;
      combos(idx, s + ch);
    })
  }
};

