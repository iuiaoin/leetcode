/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if(!s) return 0;
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let res = 0;
  let arr = s.split('').map(char => map[char]);
  for(let i = 0; i < s.length; i++) {
    if(arr[i] < arr[i + 1]) {
      res -= arr[i];
    } else {
      res += arr[i]
    }
  }
  return res;
};

