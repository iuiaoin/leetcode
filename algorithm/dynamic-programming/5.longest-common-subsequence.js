/**
 * 最长公共子序列
 * 描述：给定两个字符串text1和text2，返回它们的最长公共子序列的长度
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/**
 * state: dp[i][j]表示text1前i个，text2前j个字符的lcs长度
 * state transition: text1[i] = text2[j], dp[i][j] = dp[i - 1][j - 1] + 1; dp[i][j] = max{dp[i][j - 1], dp[i - 1][j]}
 * base case: dp[0][0] = 0
 */
function longestCommonSubsequence (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let dp = new Array(m + 1).fill(null).map(v => new Array(n + 1).fill(0));
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};