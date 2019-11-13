/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
/**
 * 思路：使用buckets存num中0~9的最后出现的位置，遍历num若出现从9开始的比当前数大的数，则和其交换
 */
var maximumSwap = function (num) {
  let arr = num.toString().split('');
  let buckets = new Array(10).fill(0);
  for(let i = 0; i < arr.length; i++) {
    buckets[arr[i]] = i;
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = 9; j > arr[i]; j--) {
      if(buckets[j] > i) {
        [arr[i], arr[buckets[j]]] = [arr[buckets[j]], arr[i]];
        return parseInt(arr.join(''));
      }
    }
  }
  return num;
};
// @lc code=end