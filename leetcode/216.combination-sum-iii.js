/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
/**
 * 思路：采用递归，对于[1,2,3,4,5,6,7,8,9]进行k次选数，若能达到n加入结果中
 */
var combinationSum3 = function(k, n) {
  let arr = [1,2,3,4,5,6,7,8,9];
  let res = [];
  helper(arr, k, n , []);
  function helper(arr, k, n, cur) {
    if(!arr.length || n < 0) return;
    if(k === 1) {
      if(arr.indexOf(n) !== -1) {
        let temp = cur.concat(n).sort((a, b) => a - b);
        let tempStr = temp.toString();
        if(res.map(v => v.toString()).indexOf(tempStr) === -1) res.push(temp);
      }
      return;
    }
    for(let i = 0; i < arr.length; i++) {
      let cloneArr = arr.slice();
      cloneArr.splice(i, 1);
      helper(cloneArr, k - 1, n - arr[i], cur.concat(arr[i]));
    }
  }
  return res;
};
// @lc code=end

