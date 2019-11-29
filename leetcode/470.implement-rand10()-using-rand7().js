/*
* @lc app=leetcode id=470 lang=javascript
*
* [470] Implement Rand10() Using Rand7()
*/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let val = rand7();
  return Math.floor(val / 7 * 10);
};
