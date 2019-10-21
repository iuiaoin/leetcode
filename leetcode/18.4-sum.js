/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * 思路：在前两位使用正常循环，并跳过重复的数，2-sum 阶段采用双指针，因为是已排序的，大于target r左移，否则l右移
 */
var fourSum = function (nums, target) {
  //sort
  nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let res = []
  for (let i = 0; i < len - 3; i++) {
    //avoid repetitive values
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len - 2; j++) {
      //avoid repetitive values
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue
      let l = j + 1
      let r = len - 1
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          //avoid repetitive values
          while (nums[l + 1] === nums[l]) l++
          while (nums[r - 1] === nums[r]) r--
          l++
          r--
        } else if (sum > target) {
          r--
        } else {
          l++
        }
      }
    }
  }
  return res
};
// @lc code=end