/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * 思路：当右括号的数量小于n时，可以添加左括号(数量小于n)和右括号,
 * 且右括号的数量不能大于左括号
 */
var generateParenthesis = function(n) {
  if(!n) return [];
  let res = [];
  function gen(lNum, rNum, s) {
    if(rNum === n) return res.push(s);
    if(lNum < n && rNum <= lNum) {
      gen(lNum + 1, rNum, s + '(');
    }
    if(rNum < lNum) {
      gen(lNum, rNum + 1, s + ')');
    }
  }
  gen(0, 0, '');
  return res;
};

