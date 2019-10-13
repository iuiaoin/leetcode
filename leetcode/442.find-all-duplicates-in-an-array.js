/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 思路：不能使用额外space，那么想到使用数组本身来做标记来区分重复数字，因为1 ≤ a[i] ≤ n，所以可以标记nums[nums[i] - 1]为负数，如果发现nums[i] - 1位置上的数字已经为负数，则说明重复了
 */
var findDuplicates = function(nums) {
 let res = [];
 for(let i = 0; i < nums.length; i++) {
   let index = Math.abs(nums[i]) - 1;
   if(nums[index] < 0) {
     res.push(Math.abs(nums[i]));
   } else {
     nums[index] = -nums[index];
   }
 }
 return res;
};
// @lc code=end

