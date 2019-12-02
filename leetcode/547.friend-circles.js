/*
* @lc app=leetcode id=547 lang=javascript
*
* [547] Friend Circles
*/

/**
 * @param {number[][]} M
 * @return {number}
 */
/**
 * 思路：求有几个连通图，采用bfs遍历每一个节点，将该节点的邻居推入队列，并用集合记录，集合中出现过的跳过，计次
 */
var findCircleNum = function(M) {
  if(!M.length) return 0;
  let res = 0;
  let m = M.length;
  let set = new Set();
  for(let j = 0; j < m; j++) {
    if(set.has(j)) continue;
    res++;
    let queue = [j];
    while(queue.length) {
      let val = queue.shift();
      if(set.has(val)) continue;
      set.add(val);
      for(let i = 0; i < m; i++) {
        if(M[val][i] === 1 && val !== i) {
          queue.push(i);
        }
      }
    }
  }
  return res;
};

