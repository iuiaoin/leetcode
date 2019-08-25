/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.51%)
 * Total Accepted:    494K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length;
  const res = [];
  if(len < 3) return res;
  nums = nums.sort((a, b) => a - b);
  for(let i = 0; i < len - 2; i++) {
    if(nums[i] > 0) return res;
    if(i > 0 && nums[i] === nums[i - 1]) continue;

    for(let j = i + 1, k = len - 1; j < k;) {
      if(nums[i] + nums[j] + nums[k] === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while(nums[j] === nums[j - 1]) {
          j++;
        }
        while(nums[k] === nums[k + 1]) {
          k--;
        }
      } else if(nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return res;
};

