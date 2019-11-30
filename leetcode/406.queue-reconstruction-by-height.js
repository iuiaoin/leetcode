/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
/**
 * 思路：按照从高到低排序，高度相同则按k值排序，因为前面的是最高的，所以他们的k就是他们所在的位置，之后的people按照k值插入数组中
 */
var reconstructQueue = function(people) {
  let res = [];
  people.sort((a, b) => b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1]);
  for(let i = 0; i < people.length; i++) {
    let arr = people[i];
    res.splice(arr[1], 0, arr);
  }
  return res;
};
// @lc code=end

