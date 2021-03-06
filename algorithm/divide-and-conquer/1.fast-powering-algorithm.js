/**
 * 快速算次方
 * 描述：给定底和幂，在不使用Math的情况下计算次方
 * O(logn) 
 * @param {number} base 
 * @param {number} power
 * @return {number}
 */
/**
 * 思路：x^8 = x^4 * x^4
 * 递归实现
 */
function fastPower(base, power) {
  if(power === 0) return 1;
  if(power % 2 === 0) {
    const mult = fastPower(base, power / 2);
    return mult * mult;
  }
  const mult = fastPower(base, Math.floor(power / 2));
  return mult * mult * base;
}

/**
 * 迭代实现
 */
function fastPower(base, power) {
  let res = 1;
  let mult = base;
  for(let i = power; i > 0; i = Math.floor(i / 2)) {
    if(i % 2) res *= mult;
    mult *= mult;
  }
  return res;
}