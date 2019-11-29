/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * 思路：将课程看为一个n个顶点的有向图，判断图是否有环
 */
var canFinish = function(numCourses, prerequisites) {
  let arr = new Array(numCourses).fill(0);
  let map = {};
  let pre = prerequisites;
  for(let i = 0; i < pre.length; i++) {
    let [a, b] = pre[i];
    arr[a]++;
    map[b] = (map[b] || []).concat(a);
  }

  while(arr.filter(v => v === 0).length) {
    let nodes = [];
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] === 0) nodes.push(j);
    }
    numCourses -= nodes.length;
    for(let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      arr[node] = Infinity;
      if(map[node]) {
        map[node].forEach(val => {
          arr[val]--;
        })
        delete map[node];
      }
    }
  }
  
  return numCourses === 0;
};

