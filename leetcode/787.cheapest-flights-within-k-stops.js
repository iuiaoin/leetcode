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
 * 思路：Dijkstra算法求最短路径
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  let totalPrice = Infinity;
  let prices = {};
  for (let f of flights) {
    if (!prices[f[0]]) prices[f[0]] = {};
    prices[f[0]][f[1]] = f[2];
  }
  let queue = [[0, src, K + 1]];
  let visited = {};
  while (queue.length) {
    let arr = queue.shift();
    let [price, city, stops] = arr;
    if (stops > 0) {
      let adj = prices[city] || {};
      Object.keys(adj).forEach((a) => {
        let updatedPrice = price + adj[a];
        if(a == dst && updatedPrice < totalPrice) totalPrice = updatedPrice;
        if(visited[a] < updatedPrice) return;
        visited[a] = updatedPrice;
        queue.push([updatedPrice, a, stops - 1]);
      })
    }
  }
  return totalPrice === Infinity ? -1 : totalPrice;
};

// @lc code=end