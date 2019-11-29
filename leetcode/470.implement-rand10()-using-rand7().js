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
  let value = 40;
  while(value >= 40) {
    value = 7 * (rand7() - 1) + rand7() - 1
  }
  return value % 10 + 1;
};
