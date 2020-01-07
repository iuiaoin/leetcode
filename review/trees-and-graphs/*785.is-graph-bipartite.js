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
var isBipartite = function(graph) {
  let len = graph.length;
  let setA = new Set();
  let setB = new Set();
  let visit = new Array(len).fill(false);
  let res = true;
  for(let i = 0; i < len; i++) {
    setA.add(i);
    dfs(i, setA, setB);
    if(!res) return res;
  }
  return res;
  
  function dfs(i, setA, setB) {
    if(visit[i]) return;
    visit[i] = true;
    if(setB.has(i)) return res = false;
    for(let j = 0; j < graph[i].length; j++) {
      setB.add(graph[i][j]);
    };
    for(let j = 0; j < graph[i].length; j++) {
      dfs(graph[i][j], setB, setA);
      if(!res) return;
    }
  }
};
// @lc code=end

