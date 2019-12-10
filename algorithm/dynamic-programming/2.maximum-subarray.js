/**
 * 最大子数组
 * 描述：给定数组nums，找出和最大的连续子数组并返回它的和
 * @param {number[]} nums
 * @return {number}
 */
/**
 * dp[i]是以nums[i]结尾的连续子数组的最大和
 * 若 dp[i - 1] > 0，dp[i] = dp[i - 1] + nums[i]，否则dp[i] = nums[i]
 * dp[0] = nums[0]
 */
function maxSubArray(nums) {
  let len = nums.length;
  let dp = new Array(len).fill(0);
  dp[0] = nums[0];
  let res = dp[0];
  for(let i = 1; i < len; i++) {
    dp[i] = nums[i];
    if(dp[i - 1] > 0) dp[i] += dp[i - 1];
    res = Math.max(res, dp[i]);
  }
  return res;
}