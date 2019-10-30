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
 * 思路：把tasks放入对应的slots，首先找到数量最多的任务A,例如n = 2, A ? ? A ? ? A, 将剩余的任务放入slots，空出来的为idle, 则结果为 tasks.length + num(idle), 关键是算出idle的数量
 */
var leastInterval = function (tasks, n) {
  let counter = new Array(26).fill(0);
  let max = 0;
  let maxCount = 0;
  
  function charCode(c) {
    return c.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  for(let i = 0; i < tasks.length; i++) {
    let index = charCode(tasks[i]);
    counter[index]++;
    if(max === counter[index]) {
      maxCount++;
    } else if(max < counter[index]) {
      max = counter[index];
      maxCount = 1;
    }
  }

  let slotsPart = max - 1;
  let emptySlots = slotsPart * (n - ( maxCount - 1 ));
  let availableTasks = tasks.length - maxCount * max;
  let idles = Math.max(emptySlots - availableTasks, 0);
  return tasks.length + idles;
};
// @lc code=end