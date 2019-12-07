/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
/**
 * 思路：使用map存accouts的name和email
 */
var accountsMerge = function(accounts) {
  let res = [];
  let map = new Map();
  for(let i = 0; i < accounts.length; i++) {
    let name = accounts[i].shift();
    if(map.has(name)) {
      let arr = map.get(name);
      let isDup = false;
      for(let j = 0; j < arr.length; j++) {
        let s = new Set([...arr[j], ...accounts[i]]);
        if(s.size < new Set(accounts[i]).size + arr[j].size) {
          arr.splice(j, 1);
          for(let k = 0; k < arr.length; k++) {
            let set = new Set([...arr[k], ...s]);
            if(set.size < arr[k].size + s.size) {
              s = set;
              arr.splice(k, 1);
              k--;
            }
          }
          arr.push(s);
          isDup = true;
          break;
        }
      }
      if(!isDup) arr.push(new Set(accounts[i]));
    } else {
      map.set(name, [new Set(accounts[i])]);
    }
  };
  for(let [key, value] of map) {
    for(let i = 0; i < value.length; i++) {
      res.push([key].concat([...value[i]].sort()));
    }
  }
  return res;
};
// @lc code=end

