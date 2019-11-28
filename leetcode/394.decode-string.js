/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * 思路：遍历s，cur存字母，遇到数字cur入栈然后数字入栈，遇到[跳过，遇到字母加到cur后，遇到]与栈顶元素合并，栈顶是字母直接拼接，是数字则重复
 */
var decodeString = function(s) {
  if(!s) return '';
  let stack = [];
  let cur = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '[') continue;
    if(isNum(s[i])) {
      if(cur) {
        stack.push(cur);
        cur = '';
      }
      let str = '';
      while(isNum(s[i])) {
        str += s[i];
        i++;
      }
      stack.push(str);
      i--;
    } else if(isChar(s[i])) {
      while(isChar(s[i])) {
        cur += s[i];
        i++;
      }
      i--;
    } else if(s[i] === ']') {
      while(stack.length) {
        let val = stack.pop();
        if(isNum(val)) {
          let temp = '';
          for(let j = 0; j < +val; j++) {
            temp += cur;
          }
          cur = temp;
          break;
        } else {
          cur = val + cur;;
        }
      }
    }
  } 
  return stack.join('') + cur;
};

function isNum(str) {
  return parseInt(str) >= 0;
}

function isChar(str) {
  if(!str) return false;
  let s = str.toLowerCase();
  return s >= 'a' && s <= 'z';
}

/**
 * mistakes: 
 * 1. 一开始思路没理清楚
 * 2. stack里的值忘记加上了
 * 3. 字母判断一开始有问题
 * 4. 没考虑i的边界
 */
// @lc code=end

