/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
/**
 * 思路：两个指针从左往右遍历，碰到不连续的则推入结果数组中
 */
var summaryRanges = function(nums) {
  if(!nums.length) return [];
  let len = nums.length,
      star = 0,
      cur = 0,
      res = [];
  while(cur < len) {
    if(nums[cur + 1] === nums[cur] + 1) {
      cur++;
    } else {
      if(star === cur) {
        res.push(`${nums[star]}`)
      } else {
        res.push(`${nums[star]}->${nums[cur]}`);
      }
      cur++;
      star = cur; 
    }
  }
  return res;
};

