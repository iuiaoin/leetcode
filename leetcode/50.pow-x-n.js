/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：若n大于0则相乘，小于0相乘取倒数，等于0返回1
 */
var myPow = function(x, n) {
  if(n === 0 || x === 1) return 1;
  if(x === -1 && n % 2 === 1) return -1;
  if(x === -1 && n % 2 === 0) return 1;
  let res = 1;
  if(n > 0) {
    for(let i = 0; i < n; i++) {
      res *= x;
    }
  }
  if(n < 0) {
    for(let i = 0; i < -n; i++) {
      res *= x;
    }
    res = 1 / res;
  }
  return res;
};

