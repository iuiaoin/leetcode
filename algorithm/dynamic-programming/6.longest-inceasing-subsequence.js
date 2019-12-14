/**
 * 最长递增子序列
 * 描述：给定一个未排序的整数数组，找到最长递增子序列的长度
 * @param {number[]} nums
 * @return {number}
 */
/**
 * state: dp[i]是以nums[i]作为结尾的LIS
 * state transition: 对于j < i且nums[j] < nums[i], dp[i] = max{dp[j]} + 1
 * base case: dp[0] = 1
 */
function lengthOfLIS (nums) {
  let len = nums.length;
  if(!len) return 0;
  let dp = new Array(len).fill(1);
  for(let i = 1; i < len; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
  return Math.max(...dp);
}