/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if(!nums.length) return 0;
  return nums.reduce((pre, cur) => pre ^ cur);
};

