/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if(!s) return 0;
  let res = 0;
  let sign = 1;
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') continue;
    if(s[i] === '+') {
      sign = 1;
    } else if(s[i] === '-') {
      sign = -1;
    } else if(isNum(s[i])) {
      let num = 0;
      while(isNum(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
      }
      i--;
      res += sign * num;
    } else if(s[i] === '(') {
      stack.push(res);
      res = 0;
      stack.push(sign);
      sign = 1;
    } else {
      res = stack.pop() * res + stack.pop();
    }
  }
  return res;
};

function isNum(char) {
  return parseInt(char) >= 0;
}
// @lc code=end

