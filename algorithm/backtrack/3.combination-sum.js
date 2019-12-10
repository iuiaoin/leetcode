/**
 * 组合求和
 * 给定数组nums(无重复数字)，找出所有和等于target的组合
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// nums中的每个数字可以取多次
function combinationSum(nums, target) {
  let res = [];
  backtrack([], 0, 0);
  return res;

  function backtrack(cur, sum, start) {
    if(sum > target) return;
    if(sum === target) return res.push(cur.slice());
    for(let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      backtrack(cur, sum + nums[i], i);
      cur.pop();
    }
  }
}

// nums中的数字只能使用一次, 且nums中有重复数字
function combinationSum(nums, target) {
  let res = [];
  nums.sort((a, b) => (a - b));
  backtrack([], 0, 0);
  return res;

  function backtrack(cur, sum, start) {
    if(sum > target) return;
    if(sum === target) return res.push(cur.slice());
    for(let i = start; i < nums.length; i++) {
      if(i > start && nums[i - 1] === nums[i]) continue;
      cur.push(nums[i]);
      backtrack(cur, sum + nums[i], i + 1);
      cur.pop();
    }
  }
}