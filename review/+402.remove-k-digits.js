/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// var removeKdigits = function(num, k) {
//   if(num.length <= k) return '0';
//   while(k) {
//     for(let i = 0; i < num.length; i++) {
//       if(num[i] > num[i + 1] || i === num.length - 1) {
//         num = num.slice(0, i) + num.slice(i + 1);
//         break;
//       }
//     }
//     k--;
//   }
//   while(num[0] === '0') num = num.slice(1);
//   return num || '0';
// };

/* 用栈优化 */
var removeKdigits = function(num, k) {
  let stack = [];
  for(let c of num) {
    while(stack.length && c < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(c);
  }
  while(stack[0] === '0') stack.shift();
  while(k--) stack.pop();
  return stack.length ? stack.join('') : '0';
};
// @lc code=end

