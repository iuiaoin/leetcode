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
 * 思路：从左到右遍历num，找到非递减的数，存起来和后面的数比较取最大值，以这个值和左边比它小的值交换,遇到相等的数指针后移
 */
var maximumSwap = function (num) {
  let swapMax = -Infinity;
  let swapIdx = -1;
  let arr = (num + '').split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1] && swapMax < arr[i + 1]) {
      swapMax = arr[i + 1];
      swapIdx = i + 1;
    }
    if(swapMax === arr[i + 1]) swapIdx = i + 1;
  }
  if (swapMax === -Infinity) return num;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < swapMax) {
      let temp = arr[i];
      arr[i] = swapMax;
      arr[swapIdx] = temp;
      return parseInt(arr.join(''));
    }
  }
};
// @lc code=end