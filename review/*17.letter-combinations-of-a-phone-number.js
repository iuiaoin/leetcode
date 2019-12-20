/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if(!digits) return [];
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let len = digits.length;
  let res = [];
  dfs('', 0);
  return res;

  function dfs(cur, index) {
    if(cur.length === len) return res.push(cur);
    let arr = map[digits[index]];
    for(let i = 0; i < arr.length; i++) {
      dfs(cur + arr[i], index + 1);
    }
  }
};
// @lc code=end