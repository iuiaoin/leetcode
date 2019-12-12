/**
 * 判圈算法
 * 描述：给定一个有向图，判断其中是否有环
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// BFS
function canFinish(numCourses, prerequisites) {
  let pr = prerequisites;
  let nums = new Array(numCourses).fill(0);
  let map = {};
  for(let [pre, cur] of pr) {
    map[pre] = (map[pre] || []).concat(cur);
    nums[cur]++;
  }
  let queue = [];
  for(let i = 0; i < numCourses; i++) {
    if(nums[i] === 0) queue.push(i);
  }
  while(queue.length) {
    let course = queue.shift();
    numCourses--;
    let arr = map[course];
    if(arr) {
      for(let i = 0; i < arr.length; i++) {
        nums[arr[i]]--;
        if(nums[arr[i]] === 0) queue.push(arr[i]);
      }
    }
  }
  return numCourses === 0;
}

// DFS
function canFinish(numCourses, prerequisites) {
  let pr = prerequisites;
  let map = {};
  let visit = new Array(numCourses).fill(false);
  for(let [pre, cur] of pr) {
    map[pre] = (map[pre] || []).concat(cur);
  }
  for(let i = 0; i < numCourses; i++) {
    if(!dfs(i)) return false;
  }
  return true;

  function dfs(i) {
    if(visit[i]) return false;
    visit[i] = true;
    let arr = map[i];
    if(arr) {
      for(let i = 0; i < arr.length; i++) {
        if(!dfs(arr[i])) return false;
      }
    } 
    visit[i] = false;
    return true;
  }
}