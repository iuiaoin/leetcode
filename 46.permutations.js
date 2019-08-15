/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  function backtrack(nums, first) {
    if(first === nums.length) res.push(nums.slice());
    for(let i = first; i < nums.length; i++) {
      [nums[i], nums[first]] = [nums[first], nums[i]];
      backtrack(nums, first + 1);
      [nums[i], nums[first]] = [nums[first], nums[i]];
    }
  }
  backtrack(nums, 0);
  return res;
};

