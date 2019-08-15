/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix[0] == void 0) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let arr = matrix.map(val => val[n - 1]);
  let res = binarySearch(arr, target);
  if (res[0] === target) return true;
  let index = res[1];
  if (res[0] < target) {
    index++;
    if(index >= m) return false;
  };
  return binarySearch(matrix[index], target)[0] === target;
};

function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (arr[mid] === target) return [target, null];
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return [arr[l], l];
}