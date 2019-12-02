/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * 思路：使用滑动窗口(双指针)，遍历s比较其字母出现频率若相同则推入结果
 */
var findAnagrams = function(s, p) {
  let pArr = new Array(26).fill(0);
  let sArr = new Array(26).fill(0);
  if(p.length > s.length) return [];
  let res = [];
  for(let i = 0; i < p.length; i++) {
    pArr[charCode(p[i])]++;
    sArr[charCode(s[i])]++;
  }
  const str = pArr.join('');
  for(let l = 0; l <= s.length - p.length; l++) {
    if(sArr.join('') === str) res.push(l);
    if(l + p.length === s.length) break;
    sArr[charCode(s[l])]--;
    sArr[charCode(s[l + p.length])]++;
  }
  return res;
};

function charCode(c) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
}
// @lc code=end

