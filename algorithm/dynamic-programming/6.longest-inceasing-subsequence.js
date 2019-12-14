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
 * 
 * O(n^2)
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

/**
 * state: dp[i]表示长度为i+1的LIS, 最后一位的最小值
 * state transition: 对于dp[j], 0 < j < i, dp[j] > nums[i], dp[j] = nums[i];否则dp[i + 1] = nums[i]
 * base case: dp[] = [nums[0]]
 */
function lengthOfLIS(nums) {
  let len = nums.length;
  if(!len) return 0;
  let dp = [nums[0]];
  for(let i = 0; i < len; i++) {
    let l = 0;
    let r = dp.length;
    while(l <= r) {
      let mid = (l + r) >> 1;
      if(dp[mid] < nums[i]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    dp[l] = nums[i];
  }
  return dp.length;
}