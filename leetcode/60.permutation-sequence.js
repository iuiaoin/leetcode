/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
/**
 * 思路：模式查找，将在n中找到第k个转化为在n-1中找第k%(n-1)!个
 */
var getPermutation = function(n, k) {
  let fac = [1];
  let nums = [];
  for(let i = 1; i <= n; i++ ) {
    fac[i] = fac[i - 1] * i;
    nums.push(i);
  }
  k--;
  let res = [];
  let j = 1;
  while(res.length < n) {
    let index = Math.floor(k / fac[n - j]);
    k = k % fac[n - j];
    res.push(nums.splice(index, 1)[0]);
    j++;
  }
  return res.join('');
};
// @lc code=end

