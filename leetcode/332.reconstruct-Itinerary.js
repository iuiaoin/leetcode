/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
/**
 * 思路：遍历数组，将出发地和目的存入map中，从JFK开始放入结果中
 * mistake: 应使用栈来存放，因为字符排序小的行程可能没有目的地
 * 
 */
var findItinerary = function (tickets) {
  let map = {};
  let res = [];
  if (!tickets.length) return res;
  for (let i = 0; i < tickets.length; i++) {
    let [start, end] = tickets[i];
    if(!map[start]) {
      map[start] = [ end ];
    } else {
      let len = map[start].length;
      for (let j = 0; j < len; j++) {
        let str = map[start][j];
        if(end < str) {
          map[start].splice(j, 0, end);
          break;
        } else if(j === len - 1) {
          map[start].push(end);
        }
      }
    }
  };

  let stack = ['JFK'];
  while(stack.length) {
    while(map[stack[stack.length - 1]] && map[stack[stack.length - 1]].length) {
      stack.push(map[stack[stack.length - 1]].shift());
    }
    res.unshift(stack.pop());
  }
  return res;
};
