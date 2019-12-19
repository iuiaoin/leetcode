/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  if(!strs || !strs.length) return [];
  for(let i = 0; i < strs.length; i++) {
    let key = genKey(strs[i]);
    map[key] = (map[key] || []).concat(strs[i]);
  }
  return Object.values(map);

  function genKey(str) {
    let arr = new Array(26).fill(0);
    for(let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
      arr[index]++;
    }
    return arr.join('');
  }
};
// @lc code=end

