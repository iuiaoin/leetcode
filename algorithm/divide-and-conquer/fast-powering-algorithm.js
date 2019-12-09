/**
 * 快速算次方
 * O(logn) 递归实现
 * @param {number} base 
 * @param {number} power
 * @return {number}
 */
/**
 * 思路：x^8 = x^4 * x^4
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

function fastPower(base, power) {
  let res = 1;
  let mult = base;
  for(let i = power; i > 0; i = Math.floor(i / 2)) {
    if(i % 2) res *= mult;
    mult *= mult;
  }
  return res;
}