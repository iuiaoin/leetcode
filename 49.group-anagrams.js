/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (let str of strs) {
    let key = 0;
    const len = str.length;
    for (let i = 0; i < len; i++) { //通过放大数的差距来避免loop
      const charCode = str.charCodeAt(i);
      key += charCode ** 4;
    }
    if (map[key]) map[key].push(str);
    else {
      map[key] = [str];
    }
  }
  return Object.values(map);
};