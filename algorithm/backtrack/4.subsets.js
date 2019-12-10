/**
 * 子集
 * 描述：给定没有重复元素的数字，找出它所有子集(幂集)
 * @param {number[]} nums
 * @return {number[][]}
 */

// nums没有重复数字
function subsets(nums) {
  let res = [];
  backtrack([], 0);
  return res;

  function backtrack(cur, start) {
    res.push(cur.slice());
    for(let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      backtrack(cur, i + 1);
      cur.pop();
    }
  }
}

// nums有重复数字
function subsets(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack([], 0);
  return res;

  function backtrack(cur, start) {
    res.push(cur.slice());
    for(let i = start; i < nums.length; i++) {
      if(i > start && nums[i - 1] === nums[i]) continue;
      cur.push(nums[i]);
      backtrack(cur, i + 1);
      cur.pop();
    }
  }
}