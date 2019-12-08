/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785] Is Graph Bipartite?
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
/**
 * 思路：能二分意味着，集合中的点不能有边相连，dfs将数组中的点放入和i不同的另一个集合中，若两个集合出现重复则返回false
 */
var isBipartite = function(graph) {
  let setA = new Set();
  let setB = new Set();
  let visit = new Array(graph.length).fill(false);
  let res = true;
  for(let i = 0; i < graph.length; i++) {
    setA.add(i);
    dfs(i, setA, setB);
  }
  return res;

  function dfs(i, setA, setB) {
    if(visit[i]) return;
    visit[i] = true;
    if(setB.has(i)) return res = false;
    for(let j = 0; j < graph[i].length; j++) {
      setB.add(graph[i][j]);
    }
    for(let j = 0; j < graph[i].length; j++) {
      dfs(graph[i][j], setB, setA);
    } 
  }
};
// @lc code=end

