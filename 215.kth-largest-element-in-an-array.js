/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
思路：快速选择，把比pivot小的移到左边，根据位置和n - k的大小选择左右，直到pivot的位置等于n - k
*/
var findKthLargest = function (nums, k) {
  if (!nums.length) return -1;
  let len = nums.length;

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function partition(l, r, pivotIdx) {
    let pivot = nums[pivotIdx];
    swap(pivotIdx, r);
    let storeIdx = l;
    for (let i = l; i <= r; i++) {
      if (nums[i] < pivot) {
        swap(storeIdx, i);
        storeIdx++;
      }
    }
    swap(storeIdx, r);
    return storeIdx;
  }

  function quickSelect(l, r, kSmall) {
    if (l === r) return nums[l];
    let pivotIdx = Math.floor(Math.random() * (r - l) + 1) + l;
    pivotIdx = partition(l, r, pivotIdx);
    if (kSmall === pivotIdx) {
      return nums[kSmall];
    } else if (kSmall < pivotIdx) {
      return quickSelect(l, pivotIdx - 1, kSmall);
    } else {
      return quickSelect(pivotIdx + 1, r, kSmall);
    }
  }

  return quickSelect(0, len - 1, len - k);
};