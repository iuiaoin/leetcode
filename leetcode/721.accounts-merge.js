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
 * 思路：以email为key,index为value的map,使用dfs来合并具有相同email的组
 */
var accountsMerge = function(accounts) {
  let map = new Map();
  accounts.forEach((account, index) => {
    account.slice(1).forEach(email => {
      if(map.has(email)) {
        map.get(email).push(index);
      } else {
        map.set(email, [index]);
      }
    });
  })

  let visit = new Array(accounts.length).fill(false);
  function dfs(i, emails) {
    if(visit[i]) return null;
    visit[i] = true;
    accounts[i].slice(1).forEach((email) => {
      if(!emails.has(email)) {
        emails.add(email);
        map.get(email).forEach(index => {
          dfs(index, emails);
        })
      }
    })
    return emails;
  }
  
  let res = [];
  for(let i = 0; i < accounts.length; i++) {
    let name = accounts[i][0];
    let emails = dfs(i, new Set());
    if(emails) {
      let account = [...emails].sort();
      account.unshift(name);
      res.push(account);
    }
  }
  return res;
};
// @lc code=end

