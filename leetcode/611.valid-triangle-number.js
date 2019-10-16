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
/**
 * 思路：先将nums排序，从末尾开始遍历，取len为最长边c，len - 1为次长边b, 0为最短边a,若a + b > c则 0 ~ len - 2都可以为最短边，所以count + len - 1 - 0直至遍历完
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let count = 0;
  for(let i = len - 1; i >= 2; i--) {
    let l = 0;
    let r = i - 1;
    while(l < r) {
      if(nums[l] + nums[r] > nums[i]) {
        count += r - l;
        r--;
      } else {
        l++;
      }
    }
  }
  return count;
};
// @lc code=end

