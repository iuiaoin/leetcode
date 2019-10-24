/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：遍历数组，将char和count存入map，不同的任务分别执行，不满足n的加idle，得到最后执行时间
 */
var leastInterval = function (tasks, n) {
  let map = new Map();
  tasks.forEach(char => {
    let count = map.get(char) || 0;
    map.set(char, count + 1);
  })
  let arr = [];
  while (map.size > 0) {
    for (let m of map) {
      let [char, count] = m;
      if (count === 0) {
        map.delete(m[0]);
        continue;
      };
      map.set(char, count - 1);
      let preIndex = arr.lastIndexOf(char);
      if (preIndex === -1) {
        arr.push(char);
      } else {
        while(arr.length - preIndex - 1 < n) arr.push('idle');
        arr.push(char);
      }
    }
  }
  return arr.length;
};
// @lc code=end