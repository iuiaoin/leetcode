/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：当n偶数除以2，当n为奇数时，二进制结尾为01时应该减一，结尾为11时应该加1(尽可能的制造多的尾随0也即为偶数的次数多),n为3时要特殊处理(因为接近1)
 */
var integerReplacement = function(n) {
  if(n === 1) return 0;
  let res = 0;
  while(n !== 1) {
    if(n % 2 === 0) {
      n >>>= 1;
    } else if(n === 3 || ((n >>> 1) & 1) === 0) {
      n--;
    } else {
      n++;
    }
    res++;
  }
  return res;
};

