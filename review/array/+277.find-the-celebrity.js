/*
 * @lc app=leetcode id=277 lang=javascript
 *
 * [277] Find the Celebrity
 */

// @lc code=start
/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let cand = 0;
    for(let i = 1; i < n; i++) {
      if(!knows(i, cand)) cand = i;
    }
    for(let i = 0; i < n; i++) {
      if(cand !== i && knows(cand, i) || !knows(i, cand)) return -1;
    }
    return cand;
  };
};
// @lc code=end