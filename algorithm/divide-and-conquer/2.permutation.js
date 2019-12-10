/**
 * 排列
 * @param {number[]} nums 
 * @return {number[][]}
 */

// nums中元素不相同
function permute(nums) {
  let res = [];
  let len = nums.length;
  dfs([]);
  return res;

  function dfs(cur) {
    if(cur.length === len) return res.push(cur.slice());
    for(let i = 0; i < len; i++) {
      if(cur.indexOf(nums[i]) !== -1) continue;
      cur.push(nums[i]);
      dfs(cur);
      cur.pop();
    } 
  }
}

// nums中有重复元素
function permute(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let len = nums.length;
  let visit = new Array(len).fill(false);
  dfs([]);
  return res;

  function dfs(cur) {
    if(cur.length === len) return res.push(cur.slice());
    for(let i = 0; i < len; i++) {
      if(visit[i] || i > 0 && nums[i - 1] === nums[i] && !visit[i - 1]) continue;
      cur.push(nums[i]);
      visit[i] = true;
      dfs(cur);
      cur.pop();
      visit[i] = false;
    }
  }
}

