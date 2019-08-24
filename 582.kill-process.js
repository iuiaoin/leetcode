/*
 * @lc app=leetcode id=582 lang=javascript
 *
 * [582] Kill Process
 */
/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
/**
 * 思路：bfs，维护一个队列，将kill推入，在ppid中找到对应子节点的位置，
 * push到队列中，对列为空时返回
 */
var killProcess = function(pid, ppid, kill) {
  let queue = [ kill ],
      res = [];
  while(queue.length) {
    let val = queue.shift();
    res.push(val);
    for(let i = 0; i < ppid.length; i++) {
      if(ppid[i] === val) {
        queue.push(pid[i]);
      }
    }
  }
  return res;
};

