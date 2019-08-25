/*
 * @lc app=leetcode id=277 lang=javascript
 *
 * [277] Find the Celebrity
 */
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
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
      if(!n) return -1;
      let candidate = 0;
      for(let i = 1; i < n; i++) {
        if(knows(candidate, i)) candidate = i;
      }
      for(let j = 0; j < n; j++) {
        if(!knows(j, candidate) || candidate !== j && knows(candidate, j)) return -1;
      }
      return candidate;
    };
};

