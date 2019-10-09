/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
/**
 * 思路：使用dfs记录从src到dst的所有花费，取最小值
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  if(!flights.length) return -1;
  let len = flights.length;
  let res = -1;
  dfs(src, 0, 0);
  return res;
  
  function dfs(s, cost, k) {
    if(k <= K + 1 && s === dst) return res = res === -1 ? cost : Math.min(res, cost);
    if(cost === -1) return;
    for(let i = 0; i < len; i++) {
      if(flights[i][0] === s) {
        dfs(flights[i][1], cost + flights[i][2], k + 1);
      }
    }
  }
};
// @lc code=end

