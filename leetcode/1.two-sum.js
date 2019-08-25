/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for(let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if(map[n] != undefined) return [map[n], i];
    map[target - n] = i;
  }
  return [];
};

