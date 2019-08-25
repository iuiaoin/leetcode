/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
/**
 *  思路：变成数组后遍历，处理对应的情况
 */
var simplifyPath = function(path) {
  let arr = path.split('/'),
      stack = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '' || arr[i] === '.') continue;
    if(arr[i] === '..') {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return '/' + stack.join('/');
};

