/**
 * 排列
 * @param {number[]} nums 
 * @return {number[][]}
 */
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