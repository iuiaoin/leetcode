/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  let len = nums.length;
  if(!len) return false;
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  if(sum % k) return false;
  let target = sum / k;
  let visit = new Array(len).fill(false);
  return backtrack(k, 0, 0);

  function backtrack(k, sum, index) {
    if(k === 1) return true;
    if(sum === target) return backtrack(k - 1, 0, 0);
    for(let i = index; i < len; i++) {
      if(!visit[i]) {
        visit[i] = true;
        if(backtrack(k, sum + nums[i], i + 1)) return true;
        visit[i] = false;
      }
    }
    return false;
  }
};
// @lc code=end

