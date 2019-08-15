/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if(dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;
  const isNeg = dividend > 0 !== divisor > 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let res = 0,
      base = divisor,
      count = 1;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= (dividend >> 1)) {
      base = base << 1;
      count = count << 1;
    }
    res += count;
    dividend -= base;
  }
  return isNeg ? -res : res;
};

