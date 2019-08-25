/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
/**
 * 思路：使用栈来存储数字，碰到数字入栈，碰到符号则取栈顶两个元素
 * 进行计算，并将结果入栈，最后返回栈顶元素
 */
var evalRPN = function(tokens) {
  if(!tokens.length) return 0;
  let stack = [];
  for(let i = 0; i < tokens.length; i++) {
    let t = tokens[i];
    if(!Number.isNaN(parseInt(t))) {
      stack.push(t);
    } else {
      let num2 = parseInt(stack.pop()),
          num1 = parseInt(stack.pop()),
          res = null;
      switch(t) {
        case '+':
          res = num1 + num2;
          break;
        case '-':
          res = num1 - num2;
          break;
        case '*':
          res = num1 * num2;
          break;
        case '/':
          res = Math.trunc(num1 / num2);
          break;
      }
      stack.push(res);
    }
  }
  return stack.pop();
}; 

