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
/**
 * 思路: 遍历words，双指针指向最新的word1和word2，每次更新时计算并比较最短距离
 */
var shortestWordDistance = function(words, word1, word2) {
  let res = Infinity;
  let w1 = Infinity;
  let w2 = Infinity;
  let same = word1 === word2;
  for(let i = 0; i < words.length; i++) {
    if(same) w2 = w1;
    if(words[i] === word1) {
      w1 = i;
    } else if(words[i] === word2) {
      w2 = i;
    } else {
      continue;
    }
    res = Math.min(res, Math.abs(w1 - w2));
  }
  return res;
};
// @lc code=end

