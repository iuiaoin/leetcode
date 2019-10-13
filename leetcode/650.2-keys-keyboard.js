/*
 * @lc app=leetcode id=650 lang=javascript
 *
 * [650] 2 Keys Keyboard
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：这是个找规律题😂,可以列出得到AAAAAAAA的三种不同操作方式可知，最小操作次数为AAAA -> AAAAAAAA的方式，dp[8] = dp[4] + 8 / 4
 */
var minSteps = function (n) {
  let ans = 0,
    d = 2;
  while (n > 1) {
    while (n % d == 0) {
      ans += d;
      n /= d;
    }
    d++;
  }
  return ans;
};
// @lc code=end