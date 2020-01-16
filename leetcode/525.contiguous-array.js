/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// todo(TLE)
var findMaxLength = function(nums) {
  let len = nums.length;
  if(len < 2) return 0;
  let res = 0;
  for(let i = 0; i < len; i++) {
    let val0 = 0;
    let val1 = 0;
    for(let j = i; j >= 0; j--) {
      if(nums[j] === 0) val0++;
      if(nums[j] === 1) val1++;
      if(val0 === val1) res = Math.max(res, val0 + val1); 
    }
  }
  return res;
};
// @lc code=end

