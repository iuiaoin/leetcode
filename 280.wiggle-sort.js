/*
 * @lc app=leetcode id=280 lang=javascript
 *
 * [280] Wiggle Sort
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 思路：排序后将后面的一半大数插入前面的数中
 */
var wiggleSort = function(nums) {
  let len = nums.length;
  if(len < 2) return;
  nums.sort((a, b) => a - b);
  let index = ((len - 1) >> 1) + 1,
      pos = 1;
  for(let i = index; i < len; i++) {
    let num = nums.splice(i, 1);
    nums.splice(pos, 0, num[0]);
    pos += 2;
  }
};

