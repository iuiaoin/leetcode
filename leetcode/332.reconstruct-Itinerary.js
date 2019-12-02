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
 */
var findItinerary = function (tickets) {
  let map = {};
  let res = [];
  if (!tickets.length) return res;
  for (let i = 0; i < tickets.length; i++) {
    map[tickets[i][0]] = [];
  }
  for (let i = 0; i < tickets.length; i++) {
    let [start, end] = tickets[i];
    if(!map[start].length) {
      map[start].push(end);
      continue;
    }
    for (let j = 0, len = map[start].length; j < len; j++) {
      let str = map[start][j];
      if(map[str]) {
        if(map[end] && end < str) {
          map[start].splice(j, 0, end);
          break;
        }
      } else {
        if(!map[end] && end < str) {
          map[start].splice(j, 0, end);
          break;
        }
      }
      map[start].push(end);
    }
  };

  let key = 'JFK';
  while (key) {
    res.push(key);
    if (!map[key]) break;
    key = map[key].shift();
  }
  return res;
};