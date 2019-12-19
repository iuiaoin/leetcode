/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s) return true;
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '[':
      case '{':
        stack.push(s[i]);
        break;
      case ')':
        if(stack[stack.length - 1] !== '(') return false;
        stack.pop();
        break;
      case ']':
        if(stack[stack.length - 1] !== '[') return false;
        stack.pop();
        break;
      case '}':
        if(stack[stack.length - 1] !== '{') return false;
        stack.pop();
        break;
    }
  }
  return !stack.length;
};
// @lc code=end

