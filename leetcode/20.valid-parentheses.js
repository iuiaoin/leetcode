/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s) return true;
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if(isPair(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

function isPair(char, target) {
  switch(char) {
    case '(':
      return target === ')';
    case '[':
      return target === ']';
    case '{':
      return target === '}';
    default:
      return false;
  }
}

