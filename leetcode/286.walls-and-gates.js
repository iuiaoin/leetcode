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
 * 思路：使用bfs来寻找最短距离
 */
var wallsAndGates = function(rooms) {
  let m = rooms.length;
  if(m < 1) return;
  let n = rooms[0].length;
  const INF = 2 ** 31 - 1;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(rooms[i][j] === INF) {
        bfs(i, j);
      }
    }
  }

  function bfs(i, j) {
    let visited = new Array(m).fill(null).map(v => new Array(n).fill(0));
    let queue = [[i, j]];
    let count = 0;
    while(queue.length) {
      let len = queue.length;
      for(let k = 0; k < len; k++) {
        let [x, y] = queue.shift();
        visited[x][y] = 1;
        if(rooms[x][y] === 0) return rooms[i][j] = count;
        if(x > 0 && !visited[x - 1][y] && rooms[x - 1][y] !== -1) queue.push([x - 1, y]);
        if(y > 0 && !visited[x][y - 1] && rooms[x][y - 1] !== -1) queue.push([x, y - 1]);
        if(x < m - 1 && !visited[x + 1][y] && rooms[x + 1][y] !== -1) queue.push([x + 1, y]);
        if(y < n - 1 && !visited[x][y + 1] && rooms[x][y + 1] !== -1) queue.push([x, y + 1]);
      }
      count++;
    }
  }
};
/**
 * 总结一下，思路没问题，但是细节方面很多小错误，bfs不熟练，做的太慢
 * 
 * mistakes:
 * 1. x, y 写成了 i, j
 * 2. x < m - 1 的边界 写成了 x < m
 * 3. count的累加应该以bfs的一层为单位 写成了每次shift的时候+1
 * 4. 没考虑rooms为空数组的情况
 */
