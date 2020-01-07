/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var nextGreaterElements = function(nums) {
//   let len = nums.length;
//   let res = new Array(len).fill(-1);
//   for(let i = 0; i < len; i++) {
//     let j = 0;
//     let k = i + 1;
//     while(j < len - 1) {
//       k %= len;
//       if(nums[i] < nums[k]) {
//         res[i] = nums[k];
//         break;
//       }
//       k++;
//       j++;
//     }
//   }
//   return res;
// };

var nextGreaterElements = function(nums) {
  let len = nums.length;
  let res = new Array(len).fill(-1);
  let stack = [];
  for(let i = 0; i < 2 * len; i++) {
    let num = nums[i % len]
    while(stack.length && nums[stack[stack.length - 1]] < num) {
      let index = stack.pop();
      res[index] = num;
    }
    if(i < len) stack.push(i);
  }
  return res;
};
// @lc code=end

