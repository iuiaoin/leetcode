/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var triangleNumber = function(nums) {
//   nums.sort((a, b) => a - b);
//   let len = nums.length;
//   if(len < 3) return 0;
//   let res = 0;
//   backtrack([], 0);
//   return res;

//   function backtrack(cur, index) {
//     if(cur.length > 3) return;
//     if(cur.length === 3) {
//       let [a, b, c] = cur;
//       if(a + b > c && Math.abs(a - b) < c) res++;
//       return;
//     }
//     for(let l = index; l < len; l++) {
//       cur.push(nums[l]);
//       backtrack(cur, l + 1);
//       cur.pop();
//     }
//   }
// };

// 双指针优化
var triangleNumber = function(nums) {
  let len = nums.length;
  if(len < 3) return 0;
  nums.sort((a, b) => a - b);
  let r = len - 1;
  let res = 0;
  while(r >= 2) {
    let i = r - 1;
    let l = 0;
    while(l < i) {
      if(nums[l] + nums[i] > nums[r]) {
        res += i - l;
        i--;
      } else {
        l++;
      }
    }
    r--;
  }
  return res;
};
// @lc code=end

