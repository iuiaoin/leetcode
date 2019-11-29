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
 * 
 * arr存每个顶点的入度，map存每个顶点对应出度的顶点，queue存入度为0的顶点
 */
var canFinish = function (numCourses, prerequisites) {
  let arr = new Array(numCourses).fill(0);
  let map = {};
  let pre = prerequisites;
  for (let i = 0; i < pre.length; i++) {
    let [a, b] = pre[i];
    arr[a]++;
    map[b] = (map[b] || []).concat(a);
  }

  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) queue.push(i);
  }

  while (queue.length) {
    let val = queue.shift();
    numCourses--;
    if (map[val]) {
      map[val].forEach(v => {
        arr[v]--;
        if (arr[v] === 0) queue.push(v);
      })
    }
  }
  return numCourses === 0;
};
