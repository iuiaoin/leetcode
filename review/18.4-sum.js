/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function(nums, target) {
//   let len = nums.length;
//   if(len < 4) return [];
//   nums.sort((a, b) => a - b);
//   let res = [];
//   backtrack([], 0, 0, 0);
//   return res;

//   function backtrack(cur, index, sum, start) {
//     if(index === 4) {
//       if(sum === target) res.push(cur.slice());
//       return;
//     }
//     for(let i = start; i < len; i++) {
//       if(i > start && nums[i - 1] === nums[i]) continue;
//       cur.push(nums[i]);
//       backtrack(cur, index + 1, sum + nums[i], i + 1);
//       cur.pop();
//     }
//   }
// };

var fourSum = function(nums, target) {
  let len = nums.length;
  if(len < 4) return [];
  let res = [];
  nums.sort((a, b) => a - b);
  for(let i = 0; i < len - 3; i++) {
    for(let j = i + 1; j < len - 2; j++) {
      
    }
  }
};
// @lc code=end

