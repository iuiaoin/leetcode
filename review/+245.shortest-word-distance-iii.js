/*
 * @lc app=leetcode id=245 lang=javascript
 *
 * [245] Shortest Word Distance III
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
  if(!words.length) return Infinity;
  let res = Infinity;
  let list1 = [];
  let list2 = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i] === word1) list1.push(i);
    if(words[i] === word2) list2.push(i);
  }
  for(let i = 0; i < list1.length; i++) {
    for(let j = 0; j < list2.length; j++) {
      if(list1[i] === list2[j]) continue;
      let dis = Math.abs(list1[i] - list2[j]);
      res = Math.min(res, dis);
    }
  }
  return res;
};
// @lc code=end

