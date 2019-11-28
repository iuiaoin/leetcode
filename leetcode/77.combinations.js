/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/**
 * 思路：采用bfs，往数组中推入1 ~ n-1, 接着对于数组中的每个数推入其后的数
 */
var combine = function(n, k) {
  let res = [];
  let queue = [];
  for(let i = 1; i <= n - k + 1; i++) {
    queue.push([i]);
  }
  while(queue.length) {
    let len = queue.length;
    for(let j = 0; j < len; j++) {
      let arr = queue.shift();
      let arrLen = arr.length;
      if(arrLen === k) {
        res.push(arr);
        continue;
      }
      let lastNum = arr[arrLen - 1];
      for(let l = lastNum + 1; l <= n - k + 1 + arrLen; l++) {
        queue.push(arr.concat(l));
      }
    }
  }
  return res;
};
// @lc code=end

