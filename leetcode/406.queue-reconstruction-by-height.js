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

