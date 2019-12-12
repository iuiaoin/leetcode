/**
 * 拓扑排序
 * 描述：给定一个有向图，若无环则打印它的拓扑排序
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// DFS
function canFinish(numCourses, prerequisites) {
  let pr = prerequisites;
  let nums = new Array(numCourses).fill(0);
  let map = {};
  for(let [pre, cur] of pr) {
    map[pre] = (map[pre] || []).concat(cur);
    nums[cur]++;
  }
  let arr = [];
  let res = [];
  for(let i = 0; i < numCourses; i++) {
    if(nums[i] === 0) arr.push(i);
  }
  for(let i = 0; i < arr.length; i++) {
    dfs(arr[i]);
  }
  function dfs(i) {
    res.push(i);
    numCourses--;
    let arr = map[i];
    if(arr) {
      for(let i = 0; i < arr.length; i++) {
        nums[arr[i]]--;
        if(nums[arr[i]] === 0) dfs(arr[i]);
      }
    }
  }
  console.log(res);
  return numCourses === 0;
}