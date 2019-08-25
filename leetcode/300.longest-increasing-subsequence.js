/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i]);
    } else if (nums[i] < dp[0]) {
      dp[0] = nums[i];
    } else {
      let index = binarySearch(dp, nums[i]);
      dp[index] = nums[i];
    }
  }
  return dp.length;
}

function binarySearch(arr, target) {
  let l = 0,
      r = arr.length - 1;
  while(l < r) {
    let mid = (l + r) >> 1;
    if(arr[mid] === target) return mid;
    if(arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}