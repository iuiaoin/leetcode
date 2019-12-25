/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let pre = prerequisites;
  let nums = new Array(numCourses).fill(0);
  let map = {};
  for(let i = 0; i < pre.length; i++) {
    let [c, p] = pre[i];
    nums[c]++;
    map[p] = (map[p] || []).concat(c);
  }
  let queue = [];
  for(let i = 0; i < numCourses; i++) {
    if(nums[i] === 0) queue.push(i);
  }
  let res = [];
  while(queue.length) {
    let course = queue.shift();
    numCourses--;
    res.push(course);
    if(map[course]) {
      let arr = map[course];
      for(let i = 0; i < arr.length; i++) {
        nums[arr[i]]--;
        if(nums[arr[i]] === 0) queue.push(arr[i]);
      }
    }
  }
  return numCourses === 0 ? res : [];
};
// @lc code=end

