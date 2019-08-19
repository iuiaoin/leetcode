/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
/*
思路：dp[i][j]表示以s[i]开头，s[j]结尾的字符串是否为回文字串，则
dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])
*/
var countSubstrings = function(s) {
  if(!s) return 0;
  let len = s.length,
      dp = new Array(len).fill(null).map(v => [ false ]),
      res = 0;
  for(let i = len - 1; i >= 0; i--) {
    for(let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
      if(dp[i][j]) res++;
    }
  }
  return res;
};

