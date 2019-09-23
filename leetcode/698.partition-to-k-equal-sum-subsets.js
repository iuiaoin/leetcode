/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * 思路：使用dfs找到k个集合，使它们的和cur_sum等于sum / k,用visited来记录nums中的元素是否访问过, 当cur_sum = sum / k时，从头遍历
 * 注意：使用start来保证dfs过程中取数字的顺序
 */
var canPartitionKSubsets = function(nums, k) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0),
      len = nums.length;
  if(k <= 0 || sum % k) return false;
  sum /= k;
  let visited = new Array(len).fill(0);
  return canPartition(0, k, 0);
  
  function canPartition(cur_sum, k, start) {
    if(k === 1) return true;
    if(cur_sum === sum) return canPartition(0, k - 1, 0);
    for(let i = start; i < len; i++) {
      if(!visited[i]) {
        visited[i] = 1;
        if(canPartition(cur_sum + nums[i], k, i + 1)) return true;
        visited[i] = 0;
      }
    }
    return false;
  }
};

