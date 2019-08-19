/*
 * @lc app=leetcode id=490 lang=javascript
 *
 * [490] The Maze
 */
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
/**
 * 思路：使用dfs来进行4个方向的搜索，标记走过的格子，(进行回溯 ✘)
 * 
 * 注意点：
 * 1. 只需要标记停留的点即可
 * 2. 不需要回溯
 * 3. 不能在原矩阵中标记，否则会影响碰墙判定
 */
var hasPath = function(maze, start, destination) {
  if(!maze.length || !maze[0].length) return false;
  let m = maze.length,
      n = maze[0].length,
      des = destination;
      visited = new Array(m).fill(null).map(v => [ false ]);
  return search(start[0], start[1]);

  function search(i, j) {
    if(i === des[0] && j === des[1]) return true;
    if(visited[i][j]) return false;
    let up = i - 1,
        down = i + 1, 
        left = j - 1,
        right = j + 1;
    visited[i][j] = true;
    while(up >= 0 && maze[up][j] === 0) up--;
    if(search(up + 1, j)) return true;
    while(down < m && maze[down][j] === 0) down++;
    if(search(down - 1, j)) return true;
    while(left >= 0 && maze[i][left] === 0) left--;
    if(search(i, left + 1)) return true;
    while(right < n && maze[i][right] === 0) right++;
    if(search(i, right - 1)) return true;
    return false;
  }
};
