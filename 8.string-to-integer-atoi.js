/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let INT_MIN = -Math.pow(2, 31),
      INT_MAX = Math.pow(2, 31) - 1;
  let num = parseInt(str);
  if(!num) return 0;
  if(num < INT_MIN) return INT_MIN;
  if(num > INT_MAX) return INT_MAX;
  return num;
};

