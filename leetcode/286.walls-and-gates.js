/*
 * @lc app=leetcode id=286 lang=javascript
 *
 * [286] Walls and Gates
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
/**
 * 思路：对于gate使用bfs来更新它的邻居
 */
var wallsAndGates = function(rooms) {
  if(!rooms.length || !rooms[0].length) return;
    let m = rooms.length;
    let n = rooms[0].length;
    let queue = [];
    const INF = 2 ** 31 - 1;
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        if(rooms[i][j] === 0) queue.push([i, j]);
      }
    }
    while(queue.length) {
      let [x, y] = queue.shift();
      if(x > 0 && rooms[x - 1][y] === INF) {
          rooms[x - 1][y] = rooms[x][y] + 1;
          queue.push([x - 1, y]);
      }
      if(y > 0 && rooms[x][y - 1] === INF) {
          rooms[x][y - 1] = rooms[x][y] + 1;
          queue.push([x, y - 1]);
      }
      if(x < m - 1 && rooms[x + 1][y] === INF) {
          rooms[x + 1][y] = rooms[x][y] + 1;
          queue.push([x + 1, y]);
      }
      if(y < n - 1 && rooms[x][y + 1] === INF) {
          rooms[x][y + 1] = rooms[x][y] + 1;
          queue.push([x, y + 1]);
      }
    }
};
