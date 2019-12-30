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
var leastInterval = function(tasks, n) {
  let map = {};
  let len = tasks.length;
  let maxNum = 0;
  let maxCount = 0;
  for(let i = 0; i < len; i++) {
    let c = tasks[i];
    map[c] = (map[c] || 0) + 1;
    maxNum = Math.max(maxNum, map[c]);
  }
  Object.values(map).forEach(v => {
    if(v === maxNum) maxCount++; 
  });
  let idles = (maxNum - 1) * n;
  let rest = len - maxCount * maxNum;
  let need = idles - (maxCount - 1) * (maxNum - 1) - rest;
  return need <= 0 ? len : len + need;
};
// @lc code=end

