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
思路：设dp[i]为长度为i的字符串的回文子串数，si为第i个字母,则dp[i] = dp[i - 1] + 以si结尾的回文子串数
*/
var countSubstrings = function(s) {
  if(!s) return 0;
  let len = s.length,
      dp = new Array(len).fill(0);
  dp[0] = 1;
  for(let i = 1; i < len; i++) {
      let count = 0;
      for(let j = 0; j <= i; j++) {
          if(isPalidrom(s.slice(j, i + 1))) count++;
      }
      dp[i] = dp[i - 1] + count;
  }
  
  function isPalidrom(str) {
      if(str.length <= 1) return true;
      let l = 0,
          r = str.length - 1;
      while(l < r) {
          if(str[l] !== str[r]) return false;
          l++;
          r--;
      }
      return true;
  }
  return dp[len - 1];
};

