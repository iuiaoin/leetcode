/*
* @lc app=leetcode id=658 lang=javascript
*
* [658] Find K Closest Elements
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
/**
 * 思路: 使用二分查找找到x在arr当中的位置，然后将其左右的k个元素添加到结果中
 */
var findClosestElements = function(arr, k, x) {
  let res = [];
  let pos = findX(arr, x, res);
  let l = pos - 1;
  let r = pos + 1;
  while(res.length < k) {
    if(l < 0) {
      res.push(arr[r]);
      r++;
    } else if(r >= arr.length) {
      res.unshift(arr[l]);
      l--;
    } else {
      if(x - arr[l] > arr[r] - x) {
        res.push(arr[r]);
        r++;
      } else {
        res.unshift(arr[l]);
        l--;
      }
    }
  }
  return res;
};

function findX(arr, x, res) {
  let l = 0;
  let r = arr.length - 1;
  while(l <= r) {
    let mid = (l + r) >> 1;
    if(arr[mid] === x) {
      res.push(arr[mid]);
      return mid;
    }
    if(arr[mid] < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  arr.splice(l, 0, x);
  return l;
}


